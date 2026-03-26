import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import WhyInspect from "@/components/WhyInspect";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyInspect />
      <ReviewsSection />
      <CTABanner />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "Riverside Termite Inspection",
                description:
                  "Free professional termite inspections in Riverside, CA. Licensed inspectors, same-week availability, no obligation.",
                url: "https://riverside-termite-inspection.com",
                telephone: "(951) 777-2049",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3900 Main Street",
                  addressLocality: "Riverside",
                  addressRegion: "CA",
                  postalCode: "92501",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "33.9533",
                  longitude: "-117.3962",
                },
                areaServed: [
                  { "@type": "City", name: "Riverside" },
                  { "@type": "City", name: "Corona" },
                  { "@type": "City", name: "Moreno Valley" },
                  { "@type": "City", name: "Jurupa Valley" },
                  { "@type": "City", name: "Norco" },
                ],
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                priceRange: "Free",
              },
              {
                "@type": "Service",
                name: "Free Termite Inspection",
                description:
                  "Comprehensive termite inspection for residential and commercial properties in Riverside, CA.",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Riverside Termite Inspection",
                },
                areaServed: {
                  "@type": "City",
                  name: "Riverside",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "100% free termite inspection with no hidden fees",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is the termite inspection really free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, our termite inspection in Riverside is 100% free with no hidden fees or obligations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does a termite inspection take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A typical termite inspection for a Riverside home takes 30-45 minutes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What areas in Riverside do you serve?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We serve all of Riverside plus Corona, Moreno Valley, Jurupa Valley, Norco, and surrounding communities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens if termites are found?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Your inspector will explain the findings and recommended treatment options. There is never any obligation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to be home during the inspection?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We recommend being present but it's not required as long as the inspector can access the property.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
