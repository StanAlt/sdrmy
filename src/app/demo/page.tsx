// src/app/demo/page.tsx
"use client"; // Required because VapiDemo uses client-side hooks

import React from "react";
import VapiDemo from "@/components/VapiDemo"; // Import the actual VapiDemo component

// --- VAPI Configuration ---
// IMPORTANT: Replace "YOUR_VAPI_PUBLIC_KEY" with the actual key provided by the user
// It's best practice to store this in environment variables, especially for production.
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
    <div>
      <h1 className="text-3xl font-bold mb-6">AI SDR Voice Demo</h1>
      <p className="text-muted-foreground mb-4">
        Experience an AI Sales Development Representative in action. This demo showcases how our AI agents can handle tasks like cold outreach and booking meetings.
      </p>
      <p className="text-muted-foreground mb-8">
        Click the button below to start a simulated call. You will need to grant microphone permissions.
      </p>
      
      {/* Render the VapiDemo component */}
      <VapiDemo 
        vapiKey={VAPI_PUBLIC_KEY} 
        assistantId={VAPI_ASSISTANT_ID} // Using Assistant ID provided by user
        // assistantConfig={VAPI_ASSISTANT_CONFIG} // Using Assistant ID instead
      />

      {VAPI_PUBLIC_KEY === "YOUR_VAPI_PUBLIC_KEY_PLACEHOLDER" && (
        <p className="mt-4 text-center text-sm text-yellow-600">
          Note: The VAPI demo requires a valid Public Key to function. Please provide your key or set it as an environment variable (NEXT_PUBLIC_VAPI_KEY) in Vercel.
        </p>
      )}
    </div>
  );
}

