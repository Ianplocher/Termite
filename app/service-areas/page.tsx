import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Service Areas | Riverside & Surrounding Cities",
  description:
    "Free termite inspections serving Riverside, Corona, Moreno Valley, Jurupa Valley, Norco, and surrounding Riverside County communities. Book online today.",
};

const serviceAreas = [
  {
    city: "Riverside",
    description:
      "Our home base. We provide free termite inspections to all Riverside neighborhoods including Arlington Heights, Wood Streets, Canyon Crest, La Sierra, University, Magnolia Center, and Downtown Riverside.",
    primary: true,
  },
  {
    city: "Corona",
    description:
      "Serving all of Corona including South Corona, North Corona, Eagle Glen, Sierra Del Oro, and the newer developments near the 15 freeway.",
  },
  {
    city: "Moreno Valley",
    description:
      "Complete termite inspection coverage throughout Moreno Valley including Sunnymead, Edgemont, March Air Reserve Base area, and the Towngate community.",
  },
  {
    city: "Jurupa Valley",
    description:
      "Free inspections available for Jurupa Valley homes including Rubidoux, Glen Avon, Pedley, Mira Loma, and the communities along Limonite Avenue.",
  },
  {
    city: "Norco",
    description:
      "Serving the horse community of Norco with professional termite inspections. Coverage includes all of Norco's residential and commercial properties.",
  },
  {
    city: "Eastvale",
    description:
      "Free termite inspections for Eastvale residents. Many newer Eastvale homes benefit from early detection and prevention programs.",
  },
  {
    city: "Lake Elsinore",
    description:
      "Termite inspection services extending to Lake Elsinore and the surrounding lakeside communities.",
  },
  {
    city: "Perris",
    description:
      "Professional termite inspections available for Perris homeowners. Same-week appointments typically available.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Termite Inspection Service Areas
          </h1>
          <p className="text-xl text-gray-300">
            Free termite inspections throughout Riverside and the surrounding Inland Empire communities.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.city}
                className={`rounded-xl p-6 border ${
                  area.primary
                    ? "border-orange bg-orange/5 ring-2 ring-orange/20"
                    : "border-gray-200 bg-white hover:border-orange/50"
                } transition-colors`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-xl font-bold text-navy">
                    {area.city}, CA
                    {area.primary && (
                      <span className="ml-2 text-xs bg-orange text-white px-2 py-1 rounded-full font-medium">
                        PRIMARY
                      </span>
                    )}
                  </h2>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-navy mb-2">Don&apos;t See Your City?</h3>
            <p className="text-gray-600 mb-4">
              We may still serve your area. Call us at{" "}
              <a href="tel:9517772049" className="text-orange font-semibold hover:underline">
                (951) 777-2049
              </a>{" "}
              to check availability for your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Schedule Your Free Inspection in Riverside County
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Same-week appointments available. Book online in 60 seconds.
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
