// src/app/mindmap/page.tsx
"use client"; // Required because MindMap uses client-side hooks (useState, useEffect, etc.)

import React from "react";
import MindMap from "@/components/MindMap"; // Import the actual MindMap component

export default function MindMapPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Tools Mind Map</h1>
      <p className="text-muted-foreground mb-8">
        Explore the landscape of AI tools for sales, marketing, productivity, and more.
        Hover over a node to see details. Use the buttons to align the layout or add new tools (session only).
      </p>
      {/* Render the MindMap component */}
      <div className="w-full h-[70vh] border rounded-md bg-muted/30 relative">
        {/* The MindMap component needs relative positioning for its internal absolute elements */}
        <MindMap />
      </div>
    </div>
  );
}

