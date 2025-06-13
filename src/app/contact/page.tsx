// src/app/contact/page.tsx
"use client"; // Needed for form handling state

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To show submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    // --- Backend Form Submission Logic (Placeholder) ---
    // In a real application, you would send this data to a backend endpoint
    // or a third-party form service (like Formspree, Netlify Forms, or a Vercel Serverless Function).
    // Example using a hypothetical endpoint:
    /*
    try {
      const response = await fetch("/api/contact", { // Replace with your actual endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("An error occurred. Please try again.");
    }
    */

    // Placeholder behavior for now:
    console.log("Form submitted (placeholder):", { name, email, message });
    setTimeout(() => {
      setStatus("Message sent successfully! (Placeholder)");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(""), 3000); // Clear status after 3 seconds
    }, 1000);
    // --- End Placeholder Logic ---
  };

  return (
    <div className="container mx-auto py-12 md:py-16">
      {/* Page Header with Gradient */}
      <div className="relative mb-12 py-16 px-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sd-army-orange-light to-sd-army-green-light z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sd-army-gray-dark mb-6">
            Get in <span className="text-sd-army-orange">Touch</span>
          </h1>
          <p className="text-lg text-sd-army-gray">
            Have questions about AI sales agents or want to discuss a custom solution for your team? We're here to help.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-sd-army-gray-dark mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sd-army-green-light rounded-full p-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sd-army-green">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sd-army-gray-dark">Phone</h3>
                <p className="text-sd-army-gray">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-sd-army-orange-light rounded-full p-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sd-army-orange">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sd-army-gray-dark">Email</h3>
                <p className="text-sd-army-gray">contact@sdrmy.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-sd-army-blue-light rounded-full p-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sd-army-blue">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sd-army-gray-dark">Location</h3>
                <p className="text-sd-army-gray">New York, NY</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-sd-army-gray-dark mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-sd-army-gray-light rounded-full flex items-center justify-center hover:bg-sd-army-green hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-sd-army-gray-light rounded-full flex items-center justify-center hover:bg-sd-army-orange hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-md">
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-sd-army-gray-dark">Your Name</Label>
          <Input 
            id="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="mt-1 border-sd-army-gray-light focus:border-sd-army-green focus:ring focus:ring-sd-army-green-light"
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-sd-army-gray-dark">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="mt-1 border-sd-army-gray-light focus:border-sd-army-green focus:ring focus:ring-sd-army-green-light"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-sd-army-gray-dark">Your Message</Label>
          <Textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            rows={5}
            className="mt-1 border-sd-army-gray-light focus:border-sd-army-green focus:ring focus:ring-sd-army-green-light"
            placeholder="Tell us about your sales team and what you're looking for..."
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Button 
            type="submit" 
            disabled={status === "Submitting..."}
            className="bg-gradient-to-r from-sd-army-green to-sd-army-orange text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            {status === "Submitting..." ? "Sending..." : "Send Message"}
          </Button>
          {status && <p className={`text-sm ${status.includes("Failed") || status.includes("error") ? "text-red-600" : "text-sd-army-green font-medium"}`}>{status}</p>}
        </div>
      </form>
        </div>
      </div>
      
      {/* Contact FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-sd-army-gray-dark mb-8 text-center">
          Frequently Asked <span className="text-sd-army-green">Questions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-sd-army-gray-dark mb-3">How does your AI technology enhance SDR teams?</h3>
            <p className="text-sd-army-gray">Our AI agents work alongside human SDRs to automate repetitive tasks like list building, initial outreach, and follow-ups, allowing your team to focus on high-value activities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-sd-army-gray-dark mb-3">Will AI replace my SDR team?</h3>
            <p className="text-sd-army-gray">No. Our philosophy is about enhancing human capabilities, not replacing them. The human touch remains essential for building meaningful relationships with prospects.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-sd-army-gray-dark mb-3">How long does implementation take?</h3>
            <p className="text-sd-army-gray">Typically 2-4 weeks depending on complexity. We work closely with your team to ensure a smooth integration with your existing workflows and systems.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-sd-army-gray-dark mb-3">Do you offer custom solutions?</h3>
            <p className="text-sd-army-gray">Absolutely. We specialize in tailored AI solutions that align with your specific sales process, target market, and business objectives.</p>
          </div>
        </div>
      </div>
      
      <p className="mt-12 text-center text-sm text-sd-army-gray">
        Note: Form submission currently uses placeholder logic. Backend integration is required for actual message delivery.
      </p>
    </div>
  );
}

