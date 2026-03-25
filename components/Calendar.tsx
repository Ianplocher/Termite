"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface CalendarProps {
  formData: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    propertyType: string;
    bestTime: string;
    notes: string;
  };
}

const TIME_SLOTS = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getSlotStatus(dateStr: string, slotIndex: number): "available" | "almost-full" | "booked" {
  const seed = dateStr.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const r1 = seededRandom(seed + slotIndex * 7);
  if (r1 < 0.2) return "booked";
  if (r1 < 0.5) return "almost-full";
  return "available";
}

export default function Calendar({ formData }: CalendarProps) {
  const router = useRouter();
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startPadding = firstDay.getDay();
    const days: (Date | null)[] = [];

    for (let i = 0; i < startPadding; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(currentYear, currentMonth, d));
    }
    return days;
  }, [currentMonth, currentYear]);

  function isAvailable(date: Date): boolean {
    if (date.getDay() === 0) return false; // Sunday
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date >= todayStart;
  }

  function goNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  function goPrevMonth() {
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    if (currentYear === todayYear && currentMonth <= todayMonth) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  async function handleTimeSelect(time: string) {
    setSelectedTime(time);
    setSubmitting(true);
    setSubmitError(null);

    const bookingData = {
      ...formData,
      date: selectedDate,
      time,
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit booking");
      }

      // Store in sessionStorage for thank-you page
      if (typeof window !== "undefined") {
        sessionStorage.setItem("booking", JSON.stringify(bookingData));
      }
      router.push("/thank-you");
    } catch (err) {
      console.error("Booking submission error:", err);
      setSubmitError("Something went wrong. Please try again or call (951) 555-0100.");
      setSubmitting(false);
    }
  }

  const canGoPrev = !(currentYear === today.getFullYear() && currentMonth <= today.getMonth());

  return (
    <div>
      <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-medium text-navy">
          <span className="text-orange font-bold">Step 2 of 2:</span> Pick your preferred date &amp; time
        </p>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goPrevMonth}
          disabled={!canGoPrev}
          className={`p-2 rounded-lg ${canGoPrev ? "hover:bg-gray-100 text-navy" : "text-gray-300 cursor-not-allowed"}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-navy">
          {MONTHS[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={goNextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 text-navy"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;
          const available = isAvailable(date);
          const dateStr = date.toISOString().split("T")[0];
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              disabled={!available}
              onClick={() => {
                setSelectedDate(dateStr);
                setSelectedTime(null);
              }}
              className={`
                p-2 text-sm rounded-lg text-center transition-colors
                ${!available ? "text-gray-300 cursor-not-allowed" : ""}
                ${available && !isSelected ? "hover:bg-orange/10 text-navy font-medium" : ""}
                ${isSelected ? "bg-orange text-white font-bold" : ""}
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="border-t pt-6">
          <h4 className="font-bold text-navy mb-4">
            Available Times for{" "}
            {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h4>
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-700">
              {submitError}
            </div>
          )}
          {submitting && (
            <div className="flex items-center justify-center gap-2 mb-4 text-navy">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="font-medium">Booking your inspection...</span>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIME_SLOTS.map((slot, i) => {
              const status = getSlotStatus(selectedDate, i);
              const isBooked = status === "booked";

              return (
                <Button
                  key={slot}
                  variant={selectedTime === slot ? "default" : "outline"}
                  disabled={isBooked || submitting}
                  onClick={() => handleTimeSelect(slot)}
                  className={`
                    relative py-6 text-base justify-between
                    ${isBooked ? "opacity-50 cursor-not-allowed line-through" : ""}
                    ${selectedTime === slot ? "bg-orange hover:bg-orange-dark text-white" : ""}
                    ${status === "almost-full" && selectedTime !== slot ? "border-orange text-orange" : ""}
                  `}
                >
                  <span>{slot}</span>
                  {status === "almost-full" && (
                    <span className="text-xs font-semibold bg-orange/10 text-orange px-2 py-1 rounded">
                      Only 2 spots left
                    </span>
                  )}
                  {isBooked && (
                    <span className="text-xs font-semibold text-gray-400">
                      Fully Booked
                    </span>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
