// Next.js 15 App Router blog post page with async pattern
import Link from 'next/link';

// This follows the async pattern commonly used in Next.js 15
export default async function Page({ params }: { params: { slug: string } }) {
  // Get blog post data asynchronously (even if it's static in this example)
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto p-4">
        <h1>Post not found</h1>
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4">
      <Link href="/blog" className="text-blue-500 hover:underline block mb-4">
        ← Back to blog
      </Link>
      
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
    </div>
  );
}

// Async function to simulate fetching blog post data
async function getBlogPost(slug: string) {
  // Simulating an async operation
  return {
    title: `Blog Post: ${slug}`,
    content: `This is content for ${slug}.`,
  };
}
