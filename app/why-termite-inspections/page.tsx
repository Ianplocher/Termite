import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Why Termite Inspections Matter in Riverside CA",
  description:
    "Learn why Riverside homeowners need regular termite inspections. Termites cause billions in damage yearly and most insurance doesn't cover it. Get a free inspection today.",
  alternates: {
    canonical: "https://riversidetermiteinspection.com/why-termite-inspections",
  },
  openGraph: {
    title: "Why Termite Inspections Matter in Riverside CA",
    description:
      "Learn why Riverside homeowners need regular termite inspections. Termites cause billions in damage yearly and most insurance doesn't cover it.",
    url: "https://riversidetermiteinspection.com/why-termite-inspections",
    type: "website",
    locale: "en_US",
    siteName: "Riverside Termite Inspection",
  },
};

export default function WhyTermiteInspectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Termite Inspections Matter in Riverside
          </h1>
          <p className="text-xl text-gray-300">
            Riverside&apos;s warm climate creates ideal conditions for termite activity. Here&apos;s what every homeowner should know.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { stat: "$5B+", label: "Annual termite damage in the US" },
              { stat: "600K+", label: "US homes affected each year" },
              { stat: "$3,000+", label: "Average repair cost per home" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-xl bg-orange/5 border border-orange/10">
                <div className="text-4xl font-bold text-orange mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                The Silent Threat to Riverside Homes
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Termites are often called &ldquo;silent destroyers&rdquo; because they can cause significant structural damage before homeowners even notice. In Riverside and throughout the Inland Empire, the warm, dry climate creates ideal conditions for both drywood and subterranean termites to thrive year-round.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Unlike many pests, termite damage happens gradually — often hidden inside walls, under flooring, and within foundation structures. By the time visible signs appear, thousands of dollars in damage may have already occurred.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Your Insurance Probably Doesn&apos;t Cover It
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Most homeowners insurance policies in California specifically exclude termite damage from coverage. Insurance companies consider termite damage a maintenance issue — meaning you could be stuck paying for all repairs out of pocket.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This makes preventative inspections especially critical. A free termite inspection can identify early signs of activity before the damage becomes severe and expensive to repair.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Early Detection Saves Thousands
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                When caught early, termite treatment in Riverside typically costs a fraction of what structural repairs would cost if left unchecked. Regular inspections are the most cost-effective way to protect your investment.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Drywood termites can live in walls undetected for years",
                  "Subterranean termites can enter through cracks as small as 1/32 of an inch",
                  "A single colony can consume several pounds of wood per year",
                  "Riverside's climate supports year-round termite activity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Required for Most Home Sales
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Planning to sell your Riverside home? Most lenders require a termite inspection (also known as a Wood Destroying Organism report) before approving the buyer&apos;s loan. Getting a free inspection now helps you plan ahead, identify any issues early, and avoid last-minute delays that could jeopardize your sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-navy mb-4 text-center">Learn More</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/how-it-works" className="text-orange hover:underline">How Inspections Work</Link>
            <Link href="/faq" className="text-orange hover:underline">FAQ</Link>
            <Link href="/service-areas" className="text-orange hover:underline">Service Areas</Link>
            <Link href="/blog" className="text-orange hover:underline">Termite Blog</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t Wait Until It&apos;s Too Late
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Protect your Riverside home with a free, no-obligation termite inspection.
          </p>
          <Link href="/schedule">
            <Button size="lg" className="bg-lime hover:bg-lime-dark text-navy font-bold text-lg px-8 py-6">
              Schedule My Free Inspection
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
