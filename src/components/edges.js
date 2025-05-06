import { MarkerType } from "@xyflow/react";

// This function generates edges based on the node structure defined in nodes.js
// It assumes nodes.js exports the aiToolsData structure or similar
// For simplicity, we'll assume the node IDs generated in nodes.js are consistent:
// Central Node: '0'
// Category Nodes: '1', '2', '3', ...
// Tool Nodes: '100', '101', '102', ... (sequentially)

// Sample data structure (mirroring nodes.js for logic)
const aiToolsData = [
  {
    "category": "AI Chatbots & Assistants",
    "tools": [{}, {}, {}] // Length matters for ID calculation
  },
  {
    "category": "AI Video Generation",
    "tools": [{}, {}, {}]
  },
  {
    "category": "AI Image Generation",
    "tools": [{}, {}]
  }
  // ... Add more categories and tools here ...
];

const initialEdges = [];
let toolIdCounter = 100; // Must match the starting counter in nodes.js

// Edges from Central Node to Category Nodes
aiToolsData.forEach((_, categoryIndex) => {
  const categoryId = `${categoryIndex + 1}`;
  initialEdges.push({
    id: `e0-${categoryId}`,
    source: '0', // Central node
    target: categoryId,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  });

  // Edges from Category Node to Tool Nodes
  aiToolsData[categoryIndex].tools.forEach(() => {
    const toolId = `${toolIdCounter++}`;
    initialEdges.push({
      id: `e${categoryId}-${toolId}`,
      source: categoryId,
      target: toolId,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      style: { strokeWidth: 1.5 }
    });
  });
});

export default initialEdges;

