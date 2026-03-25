import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Spots Are Limited — Riverside Inspectors Book Fast
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Don&apos;t wait until termite damage costs you thousands. Book your free inspection today.
        </p>
        <Link href="/schedule">
          <Button
            size="lg"
            className="bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-6 rounded-lg"
          >
            Schedule Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
