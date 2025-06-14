import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// This is a simple dynamic route for individual blog posts
export default function BlogPost({ params }: Props) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use hardcoded content for demonstration
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <Link href="/blog" className="text-sd-army-blue hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center text-sd-army-blue hover:underline mb-6">
        ← Back to all posts
      </Link>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-video relative w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-sd-army-green text-white text-xs px-3 py-1 rounded-full">
              {post.category}
            </div>
            <div className="text-sm text-sd-army-gray">
              {post.date} • {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 border-b border-sd-army-gray-light pb-6 mb-6">
            <div className="w-10 h-10 bg-sd-army-blue rounded-full flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-sd-army-gray-dark">{post.author}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              {post.content[0]}
            </p>
            <p className="mb-4">
              {post.content[1]}
            </p>
            <h2 className="text-2xl font-bold text-sd-army-gray-dark mt-8 mb-4">
              Key Takeaways
            </h2>
            <ul className="list-disc pl-6 mb-6">
              {post.takeaways.map((takeaway, index) => (
                <li key={index} className="mb-2">{takeaway}</li>
              ))}
            </ul>
            <p>
              {post.content[2]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-sd-army-gray-dark mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {post.related.map((related, index) => (
            <Link href={`/blog/${related.slug}`} key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sd-army-gray-dark hover:text-sd-army-green transition-colors">
                    {related.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mock function to simulate fetching data
function getBlogPostBySlug(slug: string) {
  const posts = {
    "ai-sdr-revolution": {
      title: "The AI SDR Revolution: How Automation is Transforming B2B Sales",
      date: "June 11, 2025",
      author: "Stan Altshuller",
      category: "AI Sales",
      image: "/images/blog-ai-sdr.jpg",
      readTime: "5 min read",
      content: [
        "The landscape of B2B sales development is undergoing a seismic shift as intelligent AI agents begin to handle tasks traditionally performed by human SDRs. This revolution isn't about replacing humans—it's about empowering them with tools that automate repetitive tasks and enhance their capabilities.",
        "Today's AI agents can analyze vast amounts of data to identify promising leads, craft personalized outreach messages, and even engage in meaningful conversations with prospects. The result is a more efficient sales process that allows human SDRs to focus on high-value activities that truly require their creativity and emotional intelligence.",
        "As we look to the future, organizations that successfully integrate AI into their sales development processes will gain a significant competitive advantage. The key is finding the right balance between automation and human touch—leveraging AI for efficiency while maintaining the authentic relationships that ultimately drive business success."
      ],
      takeaways: [
        "AI-powered SDR solutions can increase efficiency by up to 40% by automating repetitive tasks",
        "Human creativity and relationship-building remain essential components of successful B2B sales",
        "Companies with longer sales cycles benefit most from AI-enhanced ABM strategies",
        "The best AI implementations augment human capabilities rather than replacing them"
      ],
      related: [
        {
          slug: "abm-strategy",
          title: "Building an Effective Account-Based Marketing Strategy with AI",
          image: "/images/blog-abm.jpg"
        },
        {
          slug: "personalized-outreach",
          title: "The Art of Personalized Outreach in the Age of AI",
          image: "/images/blog-outreach.jpg"
        },
        {
          slug: "ai-sdr-revolution",
          title: "The AI SDR Revolution: How Automation is Transforming B2B Sales",
          image: "/images/blog-ai-sdr.jpg"
        }
      ]
    },
    "abm-strategy": {
      title: "Building an Effective Account-Based Marketing Strategy with AI",
      date: "May 28, 2025",
      author: "Stan Altshuller",
      category: "Account-Based Marketing",
      image: "/images/blog-abm.jpg",
      readTime: "8 min read",
      content: [
        "Account-Based Marketing (ABM) has emerged as a powerful strategy for B2B companies with longer sales cycles and a limited Total Addressable Market (TAM). By focusing resources on a select set of high-value accounts, organizations can create highly personalized campaigns that resonate with key decision-makers.",
        "Artificial Intelligence is revolutionizing ABM by enhancing every stage of the process—from account selection and research to personalization and engagement. AI algorithms can analyze vast amounts of data to identify ideal target accounts, uncover valuable insights about key stakeholders, and predict which messaging will drive the highest engagement.",
        "The future of ABM lies in the intelligent application of AI to create hyper-personalized, multi-channel campaigns that engage prospects on their terms. Companies that embrace this approach will see shorter sales cycles, higher conversion rates, and more efficient use of their marketing and sales resources."
      ],
      takeaways: [
        "AI can analyze thousands of data points to identify your ideal target accounts",
        "Machine learning models can predict which content and messaging will resonate with specific decision-makers",
        "Automated intelligence gathering keeps your team updated on important changes within target accounts",
        "AI-driven ABM results in 2-3x higher engagement rates compared to traditional approaches"
      ],
      related: [
        {
          slug: "ai-sdr-revolution",
          title: "The AI SDR Revolution: How Automation is Transforming B2B Sales",
          image: "/images/blog-ai-sdr.jpg"
        },
        {
          slug: "personalized-outreach",
          title: "The Art of Personalized Outreach in the Age of AI",
          image: "/images/blog-outreach.jpg"
        },
        {
          slug: "abm-strategy",
          title: "Building an Effective Account-Based Marketing Strategy with AI",
          image: "/images/blog-abm.jpg"
        }
      ]
    },
    "personalized-outreach": {
      title: "The Art of Personalized Outreach in the Age of AI",
      date: "May 15, 2025",
      author: "Stan Altshuller",
      category: "Email Strategy",
      image: "/images/blog-outreach.jpg",
      readTime: "6 min read",
      content: [
        "In today's crowded digital landscape, generic mass outreach simply doesn't cut it anymore. Decision-makers are bombarded with hundreds of messages daily, and they've developed a keen radar for detecting templated, impersonal communications. This is where AI-powered personalization is creating a revolution in B2B outreach.",
        "Modern AI tools can analyze a prospect's digital footprint—their social media activity, published content, company news, and industry trends—to identify genuine points of connection. This enables outreach that references specific interests, achievements, or challenges that resonate with the recipient, dramatically increasing the likelihood of a response.",
        "The most effective approach combines AI-driven research and content generation with human creativity and emotional intelligence. Let the AI gather insights and suggest personalization points, then have your human team refine the message to ensure it strikes the right tone and feels authentic rather than creepy or overly automated."
      ],
      takeaways: [
        "AI-powered research can uncover personalization points that would take humans hours to find",
        "Personalized outreach produces 3-5x higher response rates than generic templates",
        "The most effective personalization focuses on the prospect's interests rather than just their demographics",
        "AI tools can learn from successful interactions to continuously improve personalization strategy"
      ],
      related: [
        {
          slug: "ai-sdr-revolution",
          title: "The AI SDR Revolution: How Automation is Transforming B2B Sales",
          image: "/images/blog-ai-sdr.jpg"
        },
        {
          slug: "abm-strategy",
          title: "Building an Effective Account-Based Marketing Strategy with AI",
          image: "/images/blog-abm.jpg"
        },
        {
          slug: "personalized-outreach",
          title: "The Art of Personalized Outreach in the Age of AI",
          image: "/images/blog-outreach.jpg"
        }
      ]
    }
  };

  return posts[slug as keyof typeof posts] || null;
}
