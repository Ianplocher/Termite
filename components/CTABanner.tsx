import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background inspector image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cta-inspector.jpg')" }}
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Spots Are Limited — Riverside Inspectors Book Fast
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Don&apos;t wait until termite damage costs you thousands. Book your free inspection today.
        </p>
        <Link href="/schedule">
          <Button
            size="lg"
            className="bg-lime hover:bg-lime-dark text-navy font-bold text-lg px-8 py-6 rounded-lg"
          >
            Schedule Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
