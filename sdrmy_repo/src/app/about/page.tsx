// src/app/about/page.tsx
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-8 text-center">About SD Army</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-white p-8 rounded-lg shadow-md">
        {/* Profile Picture */}
        <div className="flex-shrink-0 w-48 h-48 md:w-60 md:h-60 relative rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="/images/profile.png" // Path relative to the /public directory
            alt="Stan Altshuller - Founder of SD Army" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
        
        {/* Bio Content */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-sd-army-blue mb-4">Stan Altshuller, Founder</h2>
          <p className="text-sd-army-gray mb-4">
            With over a decade of experience working closely with clients, I have developed a deep understanding of the intersection between data, technology, and business growth. My passion lies in leveraging cutting-edge tools to create practical, effective solutions that drive real results.
          </p>
          <p className="text-sd-army-gray mb-4">
            At SD Army, we specialize in building custom-tailored AI solutions designed specifically for sales development teams. We harness the power of the latest and greatest AI tools to automate workflows, enhance outreach, qualify leads, and ultimately, help your business grow faster and smarter.
          </p>
          <p className="text-sd-army-gray">
            We believe that the future of sales involves intelligent automation, and our mission is to equip B2B companies with the AI agents they need to stay ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
}

