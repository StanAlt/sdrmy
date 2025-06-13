// src/app/mindmap/page.tsx
"use client"; // Required because MindMap uses client-side hooks (useState, useEffect, etc.)

import React from "react";
import MindMap from "@/components/MindMap"; // Import the actual MindMap component

export default function MindMapPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      {/* Page Header with Gradient */}
      <div className="relative mb-12 py-16 px-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sd-army-blue-light to-sd-army-green-light z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sd-army-gray-dark mb-6">
            AI Tools <span className="text-sd-army-green">Mind Map</span>
          </h1>
          <p className="text-lg text-sd-army-gray">
            Explore the landscape of AI tools for sales, marketing, productivity, and more.
            Hover over a node to see details and connections between different technologies.
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-sd-army-gray-dark">Interactive Map</h2>
              <p className="text-sd-army-gray">Use the buttons below to organize the view or add new tools</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-sd-army-green-light hover:bg-sd-army-green text-sd-army-green hover:text-white px-4 py-2 rounded-md transition-colors">
                Force Layout
              </button>
              <button className="bg-sd-army-orange-light hover:bg-sd-army-orange text-sd-army-orange hover:text-white px-4 py-2 rounded-md transition-colors">
                Tree Layout
              </button>
              <button className="bg-sd-army-blue-light hover:bg-sd-army-blue text-sd-army-blue hover:text-white px-4 py-2 rounded-md transition-colors">
                Add Tool
              </button>
            </div>
          </div>
          
          {/* Render the MindMap component with improved styling */}
          <div className="w-full h-[70vh] border border-sd-army-gray-light rounded-xl bg-gradient-to-b from-white to-sd-army-gray-light/10 relative overflow-hidden">
            {/* The MindMap component needs relative positioning for its internal absolute elements */}
            <MindMap />
          </div>
          
          <div className="mt-6 text-center text-sd-army-gray text-sm">
            <p>Note: Changes made to this mind map are session-only and will reset when you refresh the page.</p>
          </div>
        </div>
        
        {/* Legend Section */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-sd-army-gray-dark mb-4">Mind Map Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-sd-army-green"></div>
              <span className="text-sd-army-gray">Sales Intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-sd-army-orange"></div>
              <span className="text-sd-army-gray">Outreach Automation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-sd-army-blue"></div>
              <span className="text-sd-army-gray">Data Enrichment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-sd-army-gray">Conversation Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

