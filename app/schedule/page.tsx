import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Schedule Your Free Termite Inspection",
  description:
    "Book your free termite inspection in Riverside, CA in 60 seconds. Licensed inspectors, same-week appointments, no hidden fees. Schedule online now.",
  alternates: {
    canonical: "https://riversidetermiteinspection.com/schedule",
  },
  openGraph: {
    title: "Schedule Your Free Termite Inspection",
    description:
      "Book your free termite inspection in Riverside, CA in 60 seconds. Licensed inspectors, same-week appointments, no hidden fees.",
    url: "https://riversidetermiteinspection.com/schedule",
    type: "website",
    locale: "en_US",
    siteName: "Riverside Termite Inspection",
  },
};

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Schedule Your Free Termite Inspection
          </h1>
          <p className="text-lg text-gray-300">
            Book your free Riverside termite inspection in under 60 seconds. No obligation, no hidden fees.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <BookingForm />
          </div>

          {/* Trust Signals */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Free
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed Inspectors
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Obligation
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
