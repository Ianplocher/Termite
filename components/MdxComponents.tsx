import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import BlogCTA from "./BlogCTA";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl font-bold text-navy mt-10 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-xl font-semibold text-navy mt-8 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href!}
          className="text-orange hover:text-orange-dark underline font-medium"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange hover:text-orange-dark underline font-medium"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-lime pl-4 py-2 my-6 bg-cream rounded-r-lg italic text-gray-600"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-navy" {...props}>
      {children}
    </strong>
  ),
  // Custom components available in MDX
  CTA: BlogCTA,
};
