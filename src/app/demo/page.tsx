// src/app/demo/page.tsx
"use client"; // Required because VapiDemo uses client-side hooks

import React from "react";
import VapiDemo from "@/components/VapiDemo"; // Import the actual VapiDemo component

// --- VAPI Configuration ---
// IMPORTANT: Replace "YOUR_VAPI_PUBLIC_KEY" with the actual key provided by the user
// It's best practice to store this in environment variables, especially for production.
// Using a TypeScript-friendly approach to access env variables
const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_KEY || "YOUR_VAPI_PUBLIC_KEY_PLACEHOLDER";

// Option 1: Use a specific Assistant ID (Provided by user)
const VAPI_ASSISTANT_ID = "e885f700-0f85-46ba-8cfc-d736a03bb8df";

// Option 2: Define assistant configuration inline (using VAPI's default demo assistant structure as a base)
// (This is based on the typical structure, might need adjustment based on VAPI's current default demo)
/*
const VAPI_ASSISTANT_CONFIG = {
  name: "SD Army Demo Assistant",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an AI Sales Development Representative for SD Army. Your goal is to briefly explain what SD Army does (builds custom AI agents for sales teams) and book a meeting with the user. Be friendly, professional, and concise.",
      },
    ],
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer", // A common default voice, might change
  },
  firstMessage: "Hi there! Thanks for calling SD Army. I'm an AI agent. Are you interested in learning how AI can supercharge your sales development?",
  // Add other configurations as needed, e.g., serverUrl, serverUrlSecret
};
*/
// --- End VAPI Configuration ---

export default function DemoPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      {/* Page Header with Gradient */}
      <div className="relative mb-12 py-16 px-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sd-army-orange-light to-sd-army-green-light z-0 opacity-90"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="text-sd-army-blue-light">SDR Voice Demo</span>
          </h1>
          <p className="text-lg text-white">
            Experience our AI Sales Development Representative in action. Talk with our virtual SDR and see how AI can enhance your sales outreach.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-sd-army-green-light p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sd-army-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sd-army-gray-dark">Voice Interaction</h3>
                <p className="text-sd-army-gray">Speak naturally with our AI representative. You&apos;ll need to grant microphone permissions.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-sd-army-orange-light p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sd-army-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sd-army-gray-dark">Simulated Meeting Booking</h3>
                <p className="text-sd-army-gray">The AI will attempt to qualify you and book a meeting, just like a real SDR.</p>
              </div>
            </div>
          </div>
          
          {/* Demo Instructions */}
          <div className="bg-sd-army-gray-light/20 p-6 rounded-lg mb-8 border border-sd-army-gray-light">
            <h3 className="font-bold text-sd-army-gray-dark mb-3">How to Use This Demo:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sd-army-gray">
              <li>Click the button below to start the demo</li>
              <li>Allow microphone access when prompted</li>
              <li>Speak naturally as if you&apos;re on a sales call</li>
              <li>Try asking about SD Army&apos;s services or how AI can help your sales team</li>
            </ol>
          </div>
          
          {/* Render the VapiDemo component with improved styling */}
          <div className="bg-gradient-to-b from-white to-sd-army-blue-light/5 p-6 rounded-xl border border-sd-army-gray-light">
            <VapiDemo 
              vapiKey={VAPI_PUBLIC_KEY} 
              assistantId={VAPI_ASSISTANT_ID} // Using Assistant ID provided by user
              // assistantConfig={VAPI_ASSISTANT_CONFIG} // Using Assistant ID instead
            />

            {VAPI_PUBLIC_KEY === "YOUR_VAPI_PUBLIC_KEY_PLACEHOLDER" && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-center text-yellow-700 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  The VAPI demo requires a valid Public Key to function. Please provide your key or set it as an environment variable (NEXT_PUBLIC_VAPI_KEY) in Vercel.
                </p>
              </div>
            )}
          </div>
          
          {/* Engagement Metrics - For visual appeal */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-sd-army-gray-dark mb-6 text-center">How AI SDRs Compare to Human SDRs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-5 rounded-xl border border-sd-army-gray-light hover:border-sd-army-green transition-colors">
                <div className="text-3xl font-bold text-sd-army-green mb-2">24/7</div>
                <p className="text-sd-army-gray">Availability for outreach and follow-ups</p>
              </div>
              <div className="p-5 rounded-xl border border-sd-army-gray-light hover:border-sd-army-orange transition-colors">
                <div className="text-3xl font-bold text-sd-army-orange mb-2">10x</div>
                <p className="text-sd-army-gray">More conversations per day</p>
              </div>
              <div className="p-5 rounded-xl border border-sd-army-gray-light hover:border-sd-army-blue transition-colors">
                <div className="text-3xl font-bold text-sd-army-blue mb-2">68%</div>
                <p className="text-sd-army-gray">Increase in qualified meetings booked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

