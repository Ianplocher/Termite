"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Calendar from "./Calendar";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  propertyType: string;
  bestTime: string;
  notes: string;
}

const initialForm: FormData = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  propertyType: "single-family",
  bestTime: "morning",
  notes: "",
};

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Name is required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Valid phone number is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.address.trim()) newErrors.address = "Property address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("Lead form data:", form);
    setLoading(false);
    setStep(2);
  }

  if (step === 2) {
    return <Calendar formData={form} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-medium text-navy">
          <span className="text-orange font-bold">Step 1 of 2:</span> Tell us about your property
        </p>
      </div>

      {/* Full Name */}
      <div>
        <Label htmlFor="fullName" className="text-navy font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder="John Smith"
          className={errors.fullName ? "border-red-500" : ""}
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-navy font-medium">
          Phone Number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
          placeholder="(951) 555-0100"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-navy font-medium">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="john@example.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Address */}
      <div>
        <Label htmlFor="address" className="text-navy font-medium">
          Property Address in Riverside <span className="text-red-500">*</span>
        </Label>
        <Input
          id="address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="123 Main St, Riverside, CA 92501"
          className={errors.address ? "border-red-500" : ""}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Property Type */}
      <div>
        <Label htmlFor="propertyType" className="text-navy font-medium">
          Property Type
        </Label>
        <select
          id="propertyType"
          value={form.propertyType}
          onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="single-family">Single Family Home</option>
          <option value="condo">Condo / Townhouse</option>
          <option value="multi-family">Multi-Family</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      {/* Best Time */}
      <div>
        <Label className="text-navy font-medium">Best Time to Reach You</Label>
        <div className="flex gap-4 mt-2">
          {["morning", "afternoon", "evening"].map((time) => (
            <label key={time} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="bestTime"
                value={time}
                checked={form.bestTime === time}
                onChange={(e) => setForm({ ...form, bestTime: e.target.value })}
                className="w-4 h-4 text-orange accent-orange"
              />
              <span className="text-sm capitalize">{time}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes" className="text-navy font-medium">
          Additional Notes <span className="text-gray-400">(optional)</span>
        </Label>
        <Textarea
          id="notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Anything else we should know about your property?"
          rows={3}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-orange hover:bg-orange-dark text-white font-bold text-lg py-6 rounded-lg"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          "Continue to Select a Time"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Your information is secure and will only be used to schedule your free inspection.
      </p>
    </form>
  );
}
