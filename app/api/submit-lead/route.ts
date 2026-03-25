import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  propertyType: string;
  bestTime: string;
  notes: string;
  date: string;
  time: string;
}

// Map our time strings to 24h format for FieldRoutes
const TIME_TO_24H: Record<string, string> = {
  "8:00 AM": "08:00:00",
  "10:00 AM": "10:00:00",
  "12:00 PM": "12:00:00",
  "2:00 PM": "14:00:00",
  "4:00 PM": "16:00:00",
};

// Map property types to FieldRoutes-compatible values
const PROPERTY_TYPE_MAP: Record<string, string> = {
  "single-family": "Residential",
  condo: "Residential",
  "multi-family": "Multi-Family",
  commercial: "Commercial",
};

async function fieldRoutesRequest(
  endpoint: string,
  body: Record<string, string>
) {
  const subdomain = process.env.FIELDROUTES_SUBDOMAIN;
  const authKey = process.env.FIELDROUTES_AUTH_KEY;
  const authToken = process.env.FIELDROUTES_AUTH_TOKEN;

  if (!subdomain || !authKey || !authToken) {
    return null; // FieldRoutes not configured
  }

  const baseUrl = `https://${subdomain}.fieldroutes.com/api`;
  const params = new URLSearchParams({
    authenticationKey: authKey,
    authenticationToken: authToken,
  });

  const res = await fetch(`${baseUrl}${endpoint}?${params.toString()}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body).toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FieldRoutes ${endpoint} failed (${res.status}): ${text}`);
  }

  return res.json();
}

async function createFieldRoutesCustomer(lead: LeadPayload) {
  // Split name into first/last
  const nameParts = lead.fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Parse address components (best effort)
  const addressParts = lead.address.split(",").map((s) => s.trim());
  const street = addressParts[0] || lead.address;
  const city = addressParts[1] || "Riverside";
  const stateZip = addressParts[2] || "CA";
  const state = stateZip.replace(/\d/g, "").trim() || "CA";
  const zip = stateZip.replace(/\D/g, "").trim() || "";

  // Strip phone to digits
  const phoneDigits = lead.phone.replace(/\D/g, "");

  const customerData: Record<string, string> = {
    fname: firstName,
    lname: lastName,
    phone1: phoneDigits,
    email: lead.email,
    address: street,
    city: city,
    state: state,
    zip: zip,
    source: "Website - Free Termite Inspection",
    companyName: "",
    // Map property type
    propertyType: PROPERTY_TYPE_MAP[lead.propertyType] || "Residential",
  };

  if (lead.notes) {
    customerData.notes = lead.notes;
  }

  const result = await fieldRoutesRequest("/customer/create", customerData);
  return result;
}

async function createFieldRoutesAppointment(
  customerId: string,
  lead: LeadPayload
) {
  const time24 = TIME_TO_24H[lead.time] || "08:00:00";
  // End time = start + 1 hour
  const startHour = parseInt(time24.split(":")[0]);
  const endTime = `${String(startHour + 1).padStart(2, "0")}:00:00`;

  const appointmentData: Record<string, string> = {
    customerID: customerId,
    date: lead.date, // YYYY-MM-DD
    start: time24,
    end: endTime,
    type: "Inspection",
    notes: `Free Termite Inspection\nProperty: ${lead.propertyType}\nBest contact time: ${lead.bestTime}${lead.notes ? `\nCustomer notes: ${lead.notes}` : ""}`,
    duration: "60",
  };

  const result = await fieldRoutesRequest(
    "/appointment/create",
    appointmentData
  );
  return result;
}

export async function POST(request: NextRequest) {
  try {
    const lead: LeadPayload = await request.json();

    // Validate required fields
    if (!lead.fullName || !lead.phone || !lead.email || !lead.address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!lead.date || !lead.time) {
      return NextResponse.json(
        { error: "Missing date or time selection" },
        { status: 400 }
      );
    }

    const isFieldRoutesConfigured = !!(
      process.env.FIELDROUTES_SUBDOMAIN &&
      process.env.FIELDROUTES_AUTH_KEY &&
      process.env.FIELDROUTES_AUTH_TOKEN
    );

    let fieldRoutesResult = null;

    if (isFieldRoutesConfigured) {
      try {
        // Step 1: Create customer in FieldRoutes
        const customerResult = await createFieldRoutesCustomer(lead);
        const customerId = customerResult?.id || customerResult?.customerID;

        // Step 2: Create appointment if customer was created
        if (customerId) {
          const appointmentResult = await createFieldRoutesAppointment(
            String(customerId),
            lead
          );
          fieldRoutesResult = {
            customerId,
            appointmentId:
              appointmentResult?.id || appointmentResult?.appointmentID,
          };
        }

        console.log("[FieldRoutes] Lead synced:", fieldRoutesResult);
      } catch (frError) {
        // Log but don't fail the request — lead is still captured
        console.error("[FieldRoutes] Sync failed:", frError);
        fieldRoutesResult = {
          error: frError instanceof Error ? frError.message : "Unknown error",
        };
      }
    } else {
      console.log(
        "[Lead Captured] FieldRoutes not configured. Lead data:",
        JSON.stringify(lead, null, 2)
      );
    }

    // Send to webhook if configured (Zapier, Make, etc.)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...lead,
            source: "riverside-termite-website",
            submittedAt: new Date().toISOString(),
            fieldRoutes: fieldRoutesResult,
          }),
        });
        console.log("[Webhook] Lead sent to webhook");
      } catch (whError) {
        console.error("[Webhook] Failed:", whError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      fieldRoutes: isFieldRoutesConfigured
        ? fieldRoutesResult
        : "not_configured",
    });
  } catch (error) {
    console.error("[API] Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
