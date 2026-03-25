import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "How Our Free Termite Inspection Works",
  description:
    "Learn how easy it is to schedule a free termite inspection in Riverside, CA. Book online, we come to you, and you get a full written report — all at no cost.",
};

const steps = [
  {
    number: "01",
    title: "Book Your Free Inspection Online",
    description:
      "Choose a date and time that works for your schedule. Our online booking takes less than 60 seconds. No phone calls needed — though you're welcome to call us at (951) 555-0100 if you prefer.",
    details: [
      "Available Monday through Saturday",
      "Same-week appointments often available",
      "Morning, afternoon, and evening slots",
      "Instant confirmation via email",
    ],
  },
  {
    number: "02",
    title: "A Licensed Inspector Visits Your Property",
    description:
      "One of our California-licensed termite inspectors arrives at your Riverside property at the scheduled time. The inspection covers your entire home — inside and out.",
    details: [
      "Full interior and exterior inspection",
      "Attic, crawlspace, and foundation check",
      "Identification of termite species",
      "Assessment of moisture and wood damage",
    ],
  },
  {
    number: "03",
    title: "Receive Your Detailed Inspection Report",
    description:
      "After the inspection, you'll receive a comprehensive written report detailing our findings. If termite activity is detected, we'll explain your options — with zero pressure.",
    details: [
      "Written report with photos",
      "Clear explanation of findings",
      "Treatment recommendations if needed",
      "No obligation — it's truly free",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Your Free Termite Inspection Works
          </h1>
          <p className="text-xl text-gray-300">
            Three simple steps to protect your Riverside home from termite damage.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-orange text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Book your free termite inspection in Riverside today. It only takes 60 seconds.
          </p>
          <Link href="/schedule">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-6">
              Schedule My Free Inspection
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
