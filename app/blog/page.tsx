import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TrustBar from "@/components/TrustBar";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Termite Blog | Riverside Pest Control Tips & Guides",
  description:
    "Expert termite tips, inspection guides, and pest control advice for Riverside CA homeowners. Learn how to protect your home from termite damage.",
  alternates: {
    canonical: "https://riversidetermiteinspection.com/blog",
  },
  openGraph: {
    title: "Termite Blog | Riverside Pest Control Tips & Guides",
    description:
      "Expert termite tips, inspection guides, and pest control advice for Riverside CA homeowners.",
    url: "https://riversidetermiteinspection.com/blog",
    type: "website",
    locale: "en_US",
    siteName: "Riverside Termite Inspection",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Termite Tips & Guides
          </h1>
          <p className="text-xl text-gray-300">
            Expert advice to help Riverside homeowners protect their properties
            from termite damage.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Blog posts coming soon — check back shortly!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Think You Might Have Termites?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Don&apos;t wait until it&apos;s too late. Book your free termite
            inspection in Riverside today.
          </p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-lime hover:bg-lime-dark text-navy font-bold text-lg px-8 py-6"
            >
              Schedule My Free Inspection
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
