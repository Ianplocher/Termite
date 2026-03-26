import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col">
        {post.image && (
          <div className="aspect-video bg-cream overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-lime/20 text-navy px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-lg font-bold text-navy group-hover:text-orange transition-colors mb-2 flex-1">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
