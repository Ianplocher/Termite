import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogCTAProps {
  text?: string;
}

export default function BlogCTA({
  text = "Worried about termites? Get your free inspection today.",
}: BlogCTAProps) {
  return (
    <div className="my-10 bg-navy rounded-2xl p-8 text-center">
      <p className="text-white text-lg font-semibold mb-4">{text}</p>
      <Link href="/schedule">
        <Button className="bg-lime hover:bg-lime-dark text-navy font-bold text-base px-8 py-3">
          Schedule Free Inspection
        </Button>
      </Link>
      <p className="text-gray-400 text-sm mt-3">
        No obligation · Takes 60 seconds · Same-week availability
      </p>
    </div>
  );
}
