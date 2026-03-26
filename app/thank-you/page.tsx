"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
}

export default function ThankYouPage() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("booking");
    if (stored) {
      setBooking(JSON.parse(stored));
    }
  }, []);

  const formattedDate = booking?.date
    ? new Date(booking.date + "T12:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  // Google Calendar link
  function getCalendarLink() {
    if (!booking) return "#";
    const dateStr = booking.date.replace(/-/g, "");
    const timeMap: Record<string, string> = {
      "8:00 AM": "080000",
      "10:00 AM": "100000",
      "12:00 PM": "120000",
      "2:00 PM": "140000",
      "4:00 PM": "160000",
    };
    const startTime = timeMap[booking.time] || "080000";
    // Inspection lasts ~1 hour
    const endHour = String(parseInt(startTime.slice(0, 2)) + 1).padStart(2, "0");
    const endTime = `${endHour}0000`;

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: "Free Termite Inspection - Riverside",
      dates: `${dateStr}T${startTime}/${dateStr}T${endTime}`,
      details: "Free termite inspection by a licensed inspector. Call (951) 777-2049 to reschedule.",
      location: booking.address,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Inspection Is Booked!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A local Riverside inspector will confirm your appointment within 2 hours.
          </p>

          {/* Booking Details */}
          {booking && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 text-left mb-8">
              <h2 className="font-bold text-navy text-lg mb-4 text-center">Booking Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Name</span>
                  <span className="font-medium text-navy">{booking.fullName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium text-navy">{formattedDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Time</span>
                  <span className="font-medium text-navy">{booking.time}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Address</span>
                  <span className="font-medium text-navy text-right max-w-[200px]">{booking.address}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Phone</span>
                  <span className="font-medium text-navy">{booking.phone}</span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {booking && (
              <a href={getCalendarLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-navy text-navy hover:bg-navy hover:text-white">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Google Calendar
                </Button>
              </a>
            )}
            <a href="tel:9517772049">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange text-orange hover:bg-orange hover:text-white">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Reschedule
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Need to reschedule? Call us at{" "}
            <a href="tel:9517772049" className="text-orange font-semibold hover:underline">
              (951) 777-2049
            </a>
          </p>

          <div className="mt-8">
            <Link href="/" className="text-navy hover:text-orange transition-colors text-sm font-medium">
              &larr; Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
