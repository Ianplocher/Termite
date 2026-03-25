import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #F97316 1px, transparent 1px), radial-gradient(circle at 75% 75%, #F97316 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Free Termite Inspection in{" "}
            <span className="text-orange">Riverside, CA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
            Licensed inspectors. No obligation. Book your spot in 60 seconds.
          </p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule My Free Inspection
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. No commitment. Just peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
