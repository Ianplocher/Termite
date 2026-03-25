import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ | Free Termite Inspection Riverside CA",
  description:
    "Answers to common questions about free termite inspections in Riverside, CA. Learn about the process, what to expect, and how to schedule your inspection.",
};

const faqs = [
  {
    question: "Is the termite inspection really free?",
    answer:
      "Yes, 100% free. There are no hidden fees, no obligation to purchase treatment, and no catches. We provide a complete written inspection report at absolutely no cost to you.",
  },
  {
    question: "How long does a termite inspection in Riverside take?",
    answer:
      "A typical termite inspection for a Riverside home takes between 30 and 45 minutes, depending on the size and accessibility of your property. Larger homes or properties with crawlspaces may take slightly longer.",
  },
  {
    question: "What areas do your Riverside termite inspectors cover?",
    answer:
      "We serve all of Riverside plus Corona, Moreno Valley, Jurupa Valley, Norco, Eastvale, and surrounding Riverside County communities. If you're unsure whether we cover your area, give us a call at (951) 555-0100.",
  },
  {
    question: "What happens if termites are found during my inspection?",
    answer:
      "If termite activity is detected, your inspector will explain the findings in detail, including the type of termites, severity of the issue, and recommended treatment options. There is absolutely no obligation to purchase any treatment. The decision is entirely yours.",
  },
  {
    question: "Do I need to be home during the termite inspection?",
    answer:
      "We recommend being present so the inspector can walk you through findings in real-time, but it's not strictly required. As long as the inspector can access all areas of the property (including any locked gates or rooms), the inspection can proceed.",
  },
  {
    question: "What types of termites are common in Riverside, CA?",
    answer:
      "Riverside's climate supports both drywood termites and subterranean termites. Drywood termites live inside the wood they consume and don't need contact with soil. Subterranean termites build colonies underground and construct mud tubes to reach food sources above ground. Both types can cause significant structural damage.",
  },
  {
    question: "How often should I get a termite inspection?",
    answer:
      "The California Structural Pest Control Board recommends annual termite inspections for Riverside homes, especially given our warm climate. If you're buying or selling a home, an inspection is typically required by lenders.",
  },
  {
    question: "What's the difference between a termite inspection and a pest control treatment?",
    answer:
      "A termite inspection is a thorough examination of your property to detect the presence of termites or conditions that could lead to infestation. Treatment is the process of eliminating termites if they're found. Our free inspection covers the detection — treatment is a separate service and is never required.",
  },
  {
    question: "Can I schedule a termite inspection for a property I'm buying?",
    answer:
      "Absolutely. Pre-purchase termite inspections are one of the most common reasons Riverside residents book with us. Most lenders require a Wood Destroying Organism (WDO) report before approving a home loan. We can provide this report through our free inspection service.",
  },
  {
    question: "How soon can I get an appointment?",
    answer:
      "We typically offer same-week appointments for Riverside properties. Availability varies by season — spring and summer tend to be busier. Book online to see the latest available time slots, or call us at (951) 555-0100 for immediate assistance.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about free termite inspections in Riverside, CA.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange/30 transition-colors">
                <h2 className="text-lg font-bold text-navy mb-3 flex items-start gap-3">
                  <span className="text-orange font-bold shrink-0">Q:</span>
                  {faq.question}
                </h2>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-navy mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Call us at{" "}
              <a href="tel:9515550100" className="text-orange font-semibold hover:underline">
                (951) 555-0100
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Book Your Free Inspection?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Protect your Riverside home. Schedule online in 60 seconds.
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
