import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with background gradient */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white via-sd-army-green-light to-sd-army-orange-light">
        <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-sd-army-gray-dark mb-6 leading-tight">
              <span className="text-sd-army-green">Supercharge</span> Your Sales with Intelligent AI Agents
            </h1>
            <p className="text-lg md:text-xl text-sd-army-gray mb-8">
              SD Army builds intelligent AI agents that handle all the work of an SDR and BDR. Instead of replacing your team, we make them superhuman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-md bg-sd-army-orange px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Hear an AI SDR Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-sd-army-green bg-white px-6 py-3 text-base font-medium text-sd-army-green shadow-md hover:bg-sd-army-green-light transition-colors"
              >
                Get Custom Solution
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ai-sdr-team.jpg"
                alt="AI-powered SDR Team"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">Your SDR team + Our AI = Superhuman Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-4 text-center">
            How We <span className="text-sd-army-orange">Transform</span> Your Sales Process
          </h2>
          <p className="text-lg text-sd-army-gray mb-12 text-center max-w-3xl mx-auto">
            We handle three key aspects of your sales development process with our AI-powered approach
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-sd-army-green-light to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-sd-army-green">
              <div className="w-16 h-16 mb-6 bg-sd-army-green text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-sd-army-gray-dark">Generate Quality Contacts</h3>
              <p className="text-sd-army-gray">
                Our AI agents identify and qualify high-value prospects through deep research on the web and social media, building targeted contact lists for your sales team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-sd-army-orange-light to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-sd-army-orange">
              <div className="w-16 h-16 mb-6 bg-sd-army-orange text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.981V19.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-sd-army-gray-dark">Convert Leads Effectively</h3>
              <p className="text-sd-army-gray">
                Our AI crafts personalized email strategies and outreach campaigns that resonate with prospects, increasing response rates and conversions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-sd-army-blue-light to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-sd-army-blue">
              <div className="w-16 h-16 mb-6 bg-sd-army-blue text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-sd-army-gray-dark">Set More Meetings</h3>
              <p className="text-sd-army-gray">
                Our AI engages prospects based on their genuine interests, schedules meetings, and prepares your sales team with relevant context for successful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-20 bg-sd-army-green-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-4 text-center">
            We Make SDRs <span className="text-sd-army-green">Superhuman</span>
          </h2>
          <p className="text-lg text-sd-army-gray mb-12 text-center max-w-3xl mx-auto">
            Instead of replacing your SDR team, our AI tools make them more effective, efficient, and productive
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards - Using placeholder images */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-56 relative">
                <Image
                  src="/images/sdr-team-1.jpg"
                  alt="SDR Team Member 1"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sd-army-gray-dark">Account-Based Marketing</h3>
                <p className="text-sd-army-gray mt-2">Perfect for companies with longer sales cycles and a limited TAM, our AI helps execute strategic ABM campaigns.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-56 relative">
                <Image
                  src="/images/sdr-team-2.jpg"
                  alt="SDR Team Member 2"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sd-army-gray-dark">Personalized Outreach</h3>
                <p className="text-sd-army-gray mt-2">Our AI crafts genuine communications that resonate with prospects&apos; interests and pain points.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-56 relative">
                <Image
                  src="/images/sdr-team-3.jpg"
                  alt="SDR Team Member 3"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sd-army-gray-dark">Deep Research</h3>
                <p className="text-sd-army-gray mt-2">We analyze web and social media data to identify the perfect prospects for your specific offering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-r from-sd-army-orange to-sd-army-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover how our AI-powered sales development solutions can help your team achieve better results with less effort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-4 text-base font-medium text-sd-army-orange shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Read Our Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sd-army-gray-dark px-6 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

