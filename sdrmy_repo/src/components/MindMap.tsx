"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { 
  ReactFlow, 
  ReactFlowProvider, 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  MiniMap, 
  Controls, 
  Background, 
  Position, 
  MarkerType,
  useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Shadcn UI components for Modal
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Import the configuration that uses the full data
import { initialNodes as baseInitialNodes, initialEdges } from './node-edge-config.js'; // Renamed to avoid conflict
import aiToolsData from "@/lib/data.json";

// --- Layout Calculation Logic (Simplified for brevity, assuming it exists as before) ---
const nodeSpacingX = 300;
const nodeSpacingY = 150;
const categoryRadius = 400;
const toolRadiusStep = 100;
const toolColor = "#1E90FF"; // Defined here for use in addTool

const calculateRadialLayout = (categoriesData, existingNodes = []) => {
  const nodes = [];
  const centerColor = "#5D3FD3";
  const categoryColors = [
    "#FF6347", "#4682B4", "#32CD32", "#FFD700", "#6A5ACD", 
    "#FF4500", "#20B2AA", "#DA70D6", "#00CED1", "#FF8C00",
  ];
  // const toolColor = "#1E90FF"; // Already defined above
  let toolIdCounter = 100;
  const existingToolIds = new Set(existingNodes.filter(n => n.data?.isTool).map(n => parseInt(n.id)));
  while (existingToolIds.has(toolIdCounter)) {
      toolIdCounter++;
  }

  // Center Node
  nodes.push({
    id: "0",
    data: { label: "Top AI Tools" },
    position: { x: 0, y: 0 },
    type: "input",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: {
      background: centerColor,
      color: "white", width: 180, textAlign: "center", fontSize: "20px",
      padding: "20px", borderRadius: "50%", border: "3px solid white",
    },
    zIndex: 100,
  });

  const categoryAngleStep = (2 * Math.PI) / categoriesData.length;

  categoriesData.forEach((categoryData, categoryIndex) => {
    const categoryId = `${categoryIndex + 1}`;
    const angle = categoryIndex * categoryAngleStep;
    const categoryX = categoryRadius * Math.cos(angle);
    const categoryY = categoryRadius * Math.sin(angle);
    const categoryColor = categoryColors[categoryIndex % categoryColors.length];

    nodes.push({
      id: categoryId,
      data: { label: categoryData.category },
      position: { x: categoryX, y: categoryY },
      type: "default",
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: {
        background: categoryColor,
        color: "white", width: 180, textAlign: "center", fontWeight: "bold",
        borderRadius: "10px", padding: "10px", border: "2px solid white",
      },
      zIndex: 50,
    });

    const toolAngleStep = (Math.PI / 8) / Math.max(1, categoryData.tools.length -1);
    const toolStartAngle = angle - ( (categoryData.tools.length -1) * toolAngleStep / 2 );

    categoryData.tools.forEach((tool, toolIndex) => {
      const toolId = `${toolIdCounter++}`;
      while (existingToolIds.has(toolId)) { // Ensure unique ID
          toolIdCounter++;
          toolId = `${toolIdCounter++}`;
      }
      const toolAngle = toolStartAngle + toolIndex * toolAngleStep;
      const toolRadius = categoryRadius + toolRadiusStep + (toolIndex % 2) * 50;

      nodes.push({
        id: toolId,
        data: { label: tool.name, isTool: true, ...tool },
        position: {
          x: categoryX + (toolRadiusStep + (toolIndex % 3) * 60) * Math.cos(toolAngle),
          y: categoryY + (toolRadiusStep + (toolIndex % 3) * 60) * Math.sin(toolAngle),
        },
        type: "default",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
          background: toolColor,
          color: "white", width: 150, textAlign: "center", fontSize: "12px",
          borderRadius: "5px", padding: "8px", border: "1px solid white",
        },
        zIndex: 10,
      });
    });
  });
  // Add back any dynamically added nodes not in the original data
  existingNodes.forEach(existingNode => {
      if (!nodes.find(n => n.id === existingNode.id)) {
          nodes.push(existingNode);
      }
  });
  return nodes;
};

const calculateGridLayout = (categoriesData, existingNodes = []) => {
  const nodes = [];
  const centerColor = "#5D3FD3";
  const categoryColors = [
    "#FF6347", "#4682B4", "#32CD32", "#FFD700", "#6A5ACD", 
    "#FF4500", "#20B2AA", "#DA70D6", "#00CED1", "#FF8C00",
  ];
  // const toolColor = "#1E90FF"; // Already defined above
  let toolIdCounter = 100;
  const existingToolIds = new Set(existingNodes.filter(n => n.data?.isTool).map(n => parseInt(n.id)));
  while (existingToolIds.has(toolIdCounter)) {
      toolIdCounter++;
  }

  const gridCols = 3; // Number of columns for categories
  const categorySpacingX = 600;
  const categorySpacingY = 400;
  const toolSpacingX = 200;
  const toolSpacingY = 100;

  // Center Node
  nodes.push({
    id: "0",
    data: { label: "Top AI Tools" },
    position: { x: (gridCols - 1) * categorySpacingX / 2, y: -categorySpacingY * 1.5 }, // Position above grid
    type: "input",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: {
      background: centerColor,
      color: "white", width: 180, textAlign: "center", fontSize: "20px",
      padding: "20px", borderRadius: "50%", border: "3px solid white",
    },
    zIndex: 100,
  });

  categoriesData.forEach((categoryData, categoryIndex) => {
    const categoryId = `${categoryIndex + 1}`;
    const gridRow = Math.floor(categoryIndex / gridCols);
    const gridCol = categoryIndex % gridCols;
    const categoryX = gridCol * categorySpacingX;
    const categoryY = gridRow * categorySpacingY;
    const categoryColor = categoryColors[categoryIndex % categoryColors.length];

    nodes.push({
      id: categoryId,
      data: { label: categoryData.category },
      position: { x: categoryX, y: categoryY },
      type: "default",
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: {
        background: categoryColor,
        color: "white", width: 180, textAlign: "center", fontWeight: "bold",
        borderRadius: "10px", padding: "10px", border: "2px solid white",
      },
      zIndex: 50,
    });

    // Arrange tools in a grid below the category
    const toolsPerRow = 3;
    categoryData.tools.forEach((tool, toolIndex) => {
      const toolId = `${toolIdCounter++}`;
      while (existingToolIds.has(toolId)) { // Ensure unique ID
          toolIdCounter++;
          toolId = `${toolIdCounter++}`;
      }
      const toolRow = Math.floor(toolIndex / toolsPerRow);
      const toolCol = toolIndex % toolsPerRow;
      const toolX = categoryX + (toolCol - (toolsPerRow - 1) / 2) * toolSpacingX;
      const toolY = categoryY + 150 + toolRow * toolSpacingY; // Start below category

      nodes.push({
        id: toolId,
        data: { label: tool.name, isTool: true, ...tool },
        position: { x: toolX, y: toolY },
        type: "default",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
          background: toolColor,
          color: "white", width: 150, textAlign: "center", fontSize: "12px",
          borderRadius: "5px", padding: "8px", border: "1px solid white",
        },
        zIndex: 10,
      });
    });
  });
  // Add back any dynamically added nodes not in the original data
  existingNodes.forEach(existingNode => {
      if (!nodes.find(n => n.id === existingNode.id)) {
          nodes.push(existingNode);
      }
  });
  return nodes;
};
// --- End Layout Calculation Logic ---

const nodeColor = (node) => {
  return node.style?.background || '#1E90FF';
};

// Initial layout calculation
const initialRadialNodes = calculateRadialLayout(aiToolsData);

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialRadialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [layoutMode, setLayoutMode] = useState('radial'); // 'radial' or 'grid'
  const { fitView } = useReactFlow();

  // State for Add Tool Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newToolName, setNewToolName] = useState('');
  const [newToolCategory, setNewToolCategory] = useState('');
  const [newToolDescription, setNewToolDescription] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeMouseEnter = useCallback((event, node) => {
    if (node.data && node.data.isTool && node.positionAbsolute && node.width && node.height) {
        setHoveredNode(node);
    }
  }, []);

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  const toggleLayout = useCallback(() => {
    const nextLayout = layoutMode === 'radial' ? 'grid' : 'radial';
    setLayoutMode(nextLayout);

    // Pass current nodes to preserve dynamically added ones
    const newNodes = nextLayout === 'grid' 
      ? calculateGridLayout(aiToolsData, nodes) 
      : calculateRadialLayout(aiToolsData, nodes);

    setNodes(newNodes);

    setTimeout(() => {
        fitView({ duration: 800 });
    }, 100);

  }, [layoutMode, setNodes, fitView, nodes]); // Added nodes dependency

  const handleAddTool = useCallback(() => {
    if (!newToolName || !newToolCategory || !newToolDescription) {
        alert("Please fill in all fields.");
        return;
    }

    // Find the category node
    const categoryNode = nodes.find(node => node.data.label?.toLowerCase() === newToolCategory.toLowerCase() && !node.data.isTool);

    if (!categoryNode) {
        alert(`Category "${newToolCategory}" not found. Please use an existing category.`);
        // TODO: Optionally, allow creating new categories
        return;
    }

    const newToolId = `tool-${Date.now()}`; // Simple unique ID for session
    const categoryPos = categoryNode.position;
    const numToolsInCategory = nodes.filter(n => edges.some(e => e.source === categoryNode.id && e.target === n.id)).length;

    // Basic positioning logic (can be improved based on layout mode)
    const newNodePosition = {
        x: categoryPos.x + (Math.random() - 0.5) * 400, // Random offset for now
        y: categoryPos.y + 150 + numToolsInCategory * 50, // Offset below category
    };

    const newNode = {
        id: newToolId,
        data: {
            label: newToolName,
            name: newToolName,
            description: newToolDescription,
            category: newToolCategory,
            isTool: true,
            // Add other default fields if needed
            useCases: [],
            features: [],
            pricingSummary: "N/A",
            websiteLink: "#",
            userSentiment: "N/A"
        },
        position: newNodePosition,
        type: 'default',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: toolColor,
            color: 'white',
            width: 150,
            textAlign: 'center',
            fontSize: '12px',
            borderRadius: '5px',
            padding: '8px',
            border: '1px solid white',
        },
        zIndex: 10,
    };

    const newEdge = {
        id: `e${categoryNode.id}-${newToolId}`,
        source: categoryNode.id,
        target: newToolId,
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: toolColor,
        },
        style: { stroke: toolColor, strokeWidth: 1.5 },
        zIndex: 1,
    };

    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat(newEdge));

    // Close modal and reset fields
    setIsModalOpen(false);
    setNewToolName('');
    setNewToolCategory('');
    setNewToolDescription('');

    // Optional: Fit view to include the new node
    setTimeout(() => fitView({ duration: 500 }), 100);

  }, [newToolName, newToolCategory, newToolDescription, nodes, edges, setNodes, setEdges, fitView]);

  useEffect(() => {
    // Effect for recalculating positions if needed, or other side effects
  }, [nodes]);

  return (
    <div style={{ height: '100vh', width: '100vw', background: '#f0f0f0', position: 'relative' }}>
      {/* Control Buttons */}  
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1001, display: 'flex', gap: '10px' }}>
        <Button onClick={toggleLayout}>
          Align: {layoutMode === 'radial' ? 'Grid' : 'Radial'}
        </Button>
        
        {/* Add Tool Button & Modal */}  
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Tool</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New AI Tool</DialogTitle>
              <DialogDescription>
                Enter the details for the new tool. It will be added to the map for this session.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input 
                  id="name" 
                  value={newToolName} 
                  onChange={(e) => setNewToolName(e.target.value)} 
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input 
                  id="category" 
                  placeholder="Enter an existing category name" 
                  value={newToolCategory} 
                  onChange={(e) => setNewToolCategory(e.target.value)} 
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input 
                  id="description" 
                  value={newToolDescription} 
                  onChange={(e) => setNewToolDescription(e.target.value)} 
                  className="col-span-3" 
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleAddTool}>Add Tool</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          fitView
          attributionPosition="bottom-left"
          minZoom={0.1}
        >
          <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
          <Controls />
          <Background color="#ddd" gap={20} size={1} />
        </ReactFlow>
        
        {/* Hover Panel */}  
        {hoveredNode && hoveredNode.data && hoveredNode.positionAbsolute && (
          <div style={{
            position: 'absolute',
            left: `${hoveredNode.positionAbsolute.x + hoveredNode.width / 2}px`,
            top: `${hoveredNode.positionAbsolute.y}px`,
            transform: `translate(-50%, calc(-100% - 10px))`,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '15px',
            borderRadius: '8px',
            maxWidth: '350px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 1000,
            color: '#333',
            fontSize: '14px',
            lineHeight: '1.6',
            border: '1px solid #ccc',
            pointerEvents: 'none',
            transition: 'opacity 0.1s ease-in-out',
            opacity: 1,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '10px', color: '#0056b3' }}>{hoveredNode.data.name}</h3>
            <p><strong>Description:</strong> {hoveredNode.data.description}</p>
            {hoveredNode.data.useCases && hoveredNode.data.useCases.length > 0 && (
              <p><strong>Use Cases:</strong> {hoveredNode.data.useCases.join(', ')}</p>
            )}
            {hoveredNode.data.features && hoveredNode.data.features.length > 0 && (
              <p><strong>Features:</strong> {hoveredNode.data.features.join(', ')}</p>
            )}
            <p><strong>Pricing:</strong> {hoveredNode.data.pricingSummary}</p>
            {hoveredNode.data.userSentiment && <p><strong>Sentiment:</strong> {hoveredNode.data.userSentiment}</p>}
            {hoveredNode.data.websiteLink && hoveredNode.data.websiteLink !== '#' && (
                <p><a href={hoveredNode.data.websiteLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Visit Website</a></p>
            )}
          </div>
        )}
      </ReactFlowProvider>
    </div>
  );
};

const MindMapWrapper = () => (
    <ReactFlowProvider>
        <MindMap />
    </ReactFlowProvider>
);

export default MindMapWrapper;

