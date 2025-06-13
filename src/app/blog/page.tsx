import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  // Array of blog posts (would typically come from a CMS or database)
  const blogPosts = [
    {
      id: "ai-sdr-revolution",
      title: "The AI SDR Revolution: How Automation is Transforming B2B Sales",
      excerpt: "Discover how AI-powered SDR solutions are changing the landscape of B2B sales development and why human creativity remains essential.",
      date: "June 11, 2025",
      author: "Stan Altshuller",
      category: "AI Sales",
      image: "/images/blog-ai-sdr.jpg",
      readTime: "5 min read",
    },
    {
      id: "abm-strategy",
      title: "Building an Effective Account-Based Marketing Strategy with AI",
      excerpt: "Learn how AI can help you develop a targeted ABM strategy that increases engagement with high-value accounts and shortens sales cycles.",
      date: "May 28, 2025",
      author: "Stan Altshuller",
      category: "Account-Based Marketing",
      image: "/images/blog-abm.jpg",
      readTime: "8 min read",
    },
    {
      id: "personalized-outreach",
      title: "The Art of Personalized Outreach in the Age of AI",
      excerpt: "Learn how to leverage AI tools for genuinely personalized prospect outreach that dramatically improves response rates and conversions.",
      date: "May 15, 2025",
      author: "Stan Altshuller",
      category: "Email Strategy",
      image: "/images/blog-outreach.jpg",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-sd-army-gray-dark mb-4">SD Army Blog</h1>
      <p className="text-lg md:text-xl text-sd-army-gray mb-12 max-w-3xl">
        Latest insights on AI-powered sales development, account-based marketing, and how to leverage technology for better prospect engagement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-sd-army-gray-dark text-white text-xs px-2 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-sd-army-gray mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-sd-army-gray-dark mb-3 group-hover:text-sd-army-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-sd-army-gray mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-sd-army-blue rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-sd-army-gray-dark">{post.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 py-12 px-6 md:px-10 bg-gradient-to-r from-sd-army-green-light to-sd-army-orange-light rounded-2xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-sd-army-gray-dark mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sd-army-gray mb-8">
            Get the latest insights on AI sales development delivered straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-sd-army-gray-light focus:outline-none focus:ring-2 focus:ring-sd-army-green"
            />
            <button className="bg-sd-army-green text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
