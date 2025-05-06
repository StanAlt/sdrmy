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
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-sd-army-gray-dark mb-8 text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-8">
        Have questions about AI sales agents or want to discuss a custom solution? Fill out the form below, and we&apos;ll get back to you shortly.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            rows={5}
            className="mt-1"
          />
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit" disabled={status === "Submitting..."}>
            {status === "Submitting..." ? "Sending..." : "Send Message"}
          </Button>
          {status && <p className={`text-sm ${status.includes("Failed") || status.includes("error") ? "text-red-600" : "text-green-600"}`}>{status}</p>}
        </div>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Note: Form submission currently uses placeholder logic. Backend integration is required for actual message delivery.
      </p>
    </div>
  );
}

