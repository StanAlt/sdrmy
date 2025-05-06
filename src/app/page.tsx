import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-12 md:py-24">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-sd-army-gray-dark mb-4">
          Supercharge Your Sales with AI Agents
        </h1>
        <p className="text-lg md:text-xl text-sd-army-gray mb-8 max-w-2xl mx-auto">
          SD Army builds custom-tailored AI solutions leveraging the latest tools to automate and enhance your sales development process. With over a decade of experience, we understand data and technology to deliver results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md bg-sd-army-blue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90 transition-colors"
          >
            Hear an AI SDR Demo
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-sd-army-gray-light bg-background px-6 py-3 text-base font-medium text-sd-army-blue shadow-sm hover:bg-sd-army-blue-light transition-colors"
          >
            Get Custom Solution
          </Link>
        </div>
      </section>

      {/* Features/Highlights Section (Placeholder for Illustrations) */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 text-left">
        <div className="bg-sd-army-blue-light p-6 rounded-lg">
          {/* AI Agent Icon */}
          <div className="w-full h-40 bg-white rounded mb-4 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="2" y="5" width="20" height="14" rx="3" fill="#0057FF" />
                <circle cx="8" cy="12" r="2" fill="white" />
                <circle cx="16" cy="12" r="2" fill="white" />
                <path d="M8 16C8 16 10 18 16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 5L5 2" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" />
                <path d="M19 5L19 2" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 9L24 9" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 12L24 12" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 15L24 15" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-sd-army-gray-dark mb-2">Custom AI Sales Agents</h2>
          <p className="text-sd-army-gray">
            We design and deploy AI agents specifically trained for your B2B sales workflows, handling tasks like lead qualification, outreach, and appointment setting.
          </p>
        </div>
        <div className="bg-sd-army-blue-light p-6 rounded-lg">
          {/* Data & Tech Icon */}
          <div className="w-full h-40 bg-white rounded mb-4 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="#0057FF" />
                <rect x="4" y="6" width="16" height="3" rx="1" fill="white" />
                <rect x="4" y="11" width="6" height="7" rx="1" fill="#FFC107" />
                <rect x="12" y="11" width="8" height="3" rx="1" fill="white" />
                <rect x="12" y="15" width="8" height="3" rx="1" fill="white" />
                <circle cx="7" cy="14.5" r="1.5" fill="white" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-sd-army-gray-dark mb-2">Data-Driven & Tech Savvy</h2>
          <p className="text-sd-army-gray">
            Leveraging a deep understanding of data and the latest AI technologies, we ensure your solutions are effective, scalable, and integrated seamlessly.
          </p>
        </div>
      </section>

      {/* AI Tools Mind Map CTA */}
      <section className="w-full max-w-4xl text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-4">Explore the AI Landscape</h2>
        <p className="text-lg text-sd-army-gray mb-6">
          Discover the best AI tools for sales, marketing, and productivity in our interactive mind map.
        </p>
        <Link
          href="/mindmap"
          className="inline-flex items-center justify-center rounded-md bg-sd-army-green px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90 transition-colors"
        >
          View AI Tools Map
        </Link>
      </section>
    </div>
  );
}

