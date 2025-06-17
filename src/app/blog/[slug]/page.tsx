// Minimal Next.js 15 blog post page component
// Using strict App Router conventions with correct typing

import Link from 'next/link';

// Simple, focused type for params
type Params = {
  slug: string;
};

// This follows Next.js 15 App Router conventions for dynamic routes
export default function Page({
  params,
}: {
  params: Params;
}) {
  // Simple function to get static blog data
  const post = {
    title: `Blog Post: ${params.slug}`,
    content: `This is content for ${params.slug}.`,
  };
  
  return (
    <div className="container mx-auto p-4">
      <Link href="/blog" className="block mb-4 text-blue-500 hover:underline">
        ← Back to blog
      </Link>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
    </div>
  );
}
