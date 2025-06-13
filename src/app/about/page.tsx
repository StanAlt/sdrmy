// src/app/about/page.tsx
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      {/* Page Header with Gradient */}
      <div className="relative mb-12 md:mb-16 py-16 px-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sd-army-green-light to-sd-army-orange-light z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sd-army-gray-dark mb-6">
            About <span className="text-sd-army-green">SD</span> Army
          </h1>
          <p className="text-lg text-sd-army-gray">
            We're on a mission to transform B2B sales through intelligent AI agents that make SDRs superhuman.
          </p>
        </div>
      </div>
      
      {/* Founder Section */}
      <div className="max-w-5xl mx-auto mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-white p-6 md:p-10 rounded-xl shadow-lg">
          {/* Profile Picture with branded border */}
          <div className="flex-shrink-0 w-48 h-48 md:w-72 md:h-72 relative rounded-xl overflow-hidden shadow-lg border-4 md:border-8 border-sd-army-green">
            <Image 
              src="/images/profile.png"
              alt="Stan Altshuller - Founder of SD Army" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          {/* Bio Content */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-sd-army-gray-dark mb-2">
              Stan Altshuller
              <span className="block text-xl text-sd-army-green mt-1">Founder & AI Strategist</span>
            </h2>
            <div className="w-20 h-1 bg-sd-army-orange mb-6"></div>
            
            <p className="text-sd-army-gray mb-4 text-lg">
              With over a decade of experience working closely with clients, I have developed a deep understanding of the intersection between data, technology, and business growth. My passion lies in leveraging cutting-edge tools to create practical, effective solutions that drive real results.
            </p>
            <p className="text-sd-army-gray mb-4">
              At SD Army, we specialize in building custom-tailored AI solutions designed specifically for sales development teams. We harness the power of the latest and greatest AI tools to automate workflows, enhance outreach, qualify leads, and ultimately, help your business grow faster and smarter.
            </p>
            <p className="text-sd-army-gray mb-6">
              We believe that the future of sales involves intelligent automation, and our mission is to equip B2B companies with the AI agents they need to stay ahead of the curve.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-sd-army-gray-light rounded-full flex items-center justify-center hover:bg-sd-army-green hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-sd-army-gray-light rounded-full flex items-center justify-center hover:bg-sd-army-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-4">
            Our <span className="text-sd-army-orange">Expert</span> Team
          </h2>
          <p className="text-lg text-sd-army-gray max-w-2xl mx-auto">
            We combine AI expertise with deep sales development experience to create solutions that transform your sales process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
            <div className="h-64 relative">
              <Image
                src="/images/sdr-team-1.jpg"
                alt="Team Member - AI Engineer" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sd-army-green/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-all">
                <div className="text-white">
                  <p className="font-medium">Expert in ML/NLP solutions for sales conversation analysis and automation</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-sd-army-gray-dark">Alex Johnson</h3>
              <p className="text-sd-army-green font-medium mb-3">AI Engineer</p>
              <p className="text-sd-army-gray">Specializes in creating intelligent agents that understand and respond to prospect communications naturally.</p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
            <div className="h-64 relative">
              <Image
                src="/images/sdr-team-2.jpg"
                alt="Team Member - Sales Development Expert" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sd-army-orange/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-all">
                <div className="text-white">
                  <p className="font-medium">15+ years experience in B2B sales development and team management</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-sd-army-gray-dark">Sarah Miller</h3>
              <p className="text-sd-army-orange font-medium mb-3">Sales Development Expert</p>
              <p className="text-sd-army-gray">Masters the art of converting prospects into qualified leads through strategic outreach and engagement.</p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
            <div className="h-64 relative">
              <Image
                src="/images/sdr-team-3.jpg"
                alt="Team Member - Data Scientist" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sd-army-blue/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-all">
                <div className="text-white">
                  <p className="font-medium">Expert in extracting actionable insights from sales data and optimizing campaigns</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-sd-army-gray-dark">David Chen</h3>
              <p className="text-sd-army-blue font-medium mb-3">Data Scientist</p>
              <p className="text-sd-army-gray">Analyzes prospect data to identify patterns and opportunities for targeted, personalized outreach.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Values Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-8 text-center">
            Our <span className="text-sd-army-green">Mission</span> & Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-sd-army-green-light to-white border-l-4 border-sd-army-green">
              <h3 className="text-xl font-bold text-sd-army-green mb-3">People-First AI</h3>
              <p className="text-sd-army-gray">
                We believe AI should augment human capabilities, not replace them. Our solutions make your SDRs superhuman rather than attempting to substitute them.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-sd-army-orange-light to-white border-l-4 border-sd-army-orange">
              <h3 className="text-xl font-bold text-sd-army-orange mb-3">Data-Driven Excellence</h3>
              <p className="text-sd-army-gray">
                Our solutions are built on deep research and analysis, ensuring that every outreach is informed by meaningful insights about your prospects.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-sd-army-blue-light to-white border-l-4 border-sd-army-blue">
              <h3 className="text-xl font-bold text-sd-army-blue mb-3">Genuine Engagement</h3>
              <p className="text-sd-army-gray">
                We create AI tools that enable authentic connections with prospects, focusing on their actual interests and needs rather than generic outreach.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-sd-army-green-light to-white border-l-4 border-sd-army-green">
              <h3 className="text-xl font-bold text-sd-army-green mb-3">Continuous Innovation</h3>
              <p className="text-sd-army-gray">
                We constantly explore and integrate the latest AI technologies to ensure our clients stay ahead of the curve in sales development.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-sd-army-orange to-sd-army-green rounded-3xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Supercharge Your Sales Team?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Let's discuss how SD Army's AI solutions can transform your sales development process</p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-4 text-base font-medium text-sd-army-gray-dark shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
}

