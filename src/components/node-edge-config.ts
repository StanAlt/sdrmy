import { Position, MarkerType, Edge, Node } from "@xyflow/react";
import aiToolsData from "@/lib/data.json"; // Import the full data

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];
// const nodeSpacingX = 300; // Increased spacing for better layout
// const nodeSpacingY = 150;
const categoryAngleStep = (2 * Math.PI) / aiToolsData.length; // Distribute categories radially
const categoryRadius = 400; // Radius for category nodes
const toolRadiusStep = 100; // How much further out tools are from categories
let toolIdCounter = 100; // Start tool IDs after category IDs

// --- Color Palette (Example - can be refined) ---
const centerColor = "#5D3FD3"; // Purple
const categoryColors = [
  "#FF6347", // Tomato
  "#4682B4", // SteelBlue
  "#32CD32", // LimeGreen
  "#FFD700", // Gold
  "#6A5ACD", // SlateBlue
  "#FF4500", // OrangeRed
  "#20B2AA", // LightSeaGreen
  "#DA70D6", // Orchid
  "#00CED1", // DarkTurquoise
  "#FF8C00", // DarkOrange
];
const toolColor = "#1E90FF"; // DodgerBlue
const defaultLogo = "/generic-logo.png"; // Path to a generic logo in public folder

// --- Central Node ---
initialNodes.push({
  id: "0",
  data: { label: "Top AI Tools" },
  position: { x: 0, y: 0 },
  type: "input",
  sourcePosition: Position.Bottom, // Not strictly needed for radial, but good practice
  targetPosition: Position.Top,
  style: {
    background: centerColor,
    color: "white",
    width: 180,
    textAlign: "center",
    fontSize: "20px",
    padding: "20px",
    borderRadius: "50%", // Make it circular
    border: "3px solid white",
  },
  zIndex: 100, // Ensure it's above edges
} as Node);

// --- Category and Tool Nodes ---
aiToolsData.forEach((categoryData, categoryIndex) => {
  const categoryId = `${categoryIndex + 1}`;
  const angle = categoryIndex * categoryAngleStep;
  const categoryX = categoryRadius * Math.cos(angle);
  const categoryY = categoryRadius * Math.sin(angle);
  const categoryColor = categoryColors[categoryIndex % categoryColors.length];

  const categoryNode = {
    id: categoryId,
    data: { label: categoryData.category },
    position: { x: categoryX, y: categoryY },
    type: "default",
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: {
      background: categoryColor,
      color: "white",
      width: 180,
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: "10px",
      padding: "10px",
      border: "2px solid white",
    },
    zIndex: 50,
  } as Node;
  initialNodes.push(categoryNode);

  // Edge from Center to Category
  initialEdges.push({
    id: `e0-${categoryId}`,
    source: "0",
    target: categoryId,
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: categoryColor,
    },
    style: { stroke: categoryColor, strokeWidth: 2 },
    zIndex: 1,
  } as Edge);

  const toolAngleStep = (Math.PI / 8) / Math.max(1, categoryData.tools.length -1); // Smaller angle step for tools around category
  const toolStartAngle = angle - ( (categoryData.tools.length -1) * toolAngleStep / 2 );

  categoryData.tools.forEach((tool, toolIndex) => {
    const toolId = `${toolIdCounter++}`;
    const toolAngle = toolStartAngle + toolIndex * toolAngleStep;
    // const toolRadius = categoryRadius + toolRadiusStep + (toolIndex % 2) * 50; // Stagger radius slightly

    // Add logoUrl - Placeholder logic: try to guess based on name, else use default
    // In a real app, this URL would come from the data or an API
    let logoUrl = defaultLogo;
    if (tool.name.toLowerCase().includes("chatgpt")) logoUrl = "/logos/chatgpt.png";
    else if (tool.name.toLowerCase().includes("claude")) logoUrl = "/logos/claude.png";
    else if (tool.name.toLowerCase().includes("gemini")) logoUrl = "/logos/gemini.png";
    else if (tool.name.toLowerCase().includes("synthesia")) logoUrl = "/logos/synthesia.png";
    else if (tool.name.toLowerCase().includes("runway")) logoUrl = "/logos/runway.png";
    else if (tool.name.toLowerCase().includes("heygen")) logoUrl = "/logos/heygen.png";
    else if (tool.name.toLowerCase().includes("midjourney")) logoUrl = "/logos/midjourney.png";
    else if (tool.name.toLowerCase().includes("firefly")) logoUrl = "/logos/firefly.png";
    // ... add more specific logo checks or use a more robust lookup

    const toolNode = {
      id: toolId,
      // Use 'toolNode' type for custom rendering
      type: "toolNode", 
      data: { 
          label: tool.name, 
          isTool: true, 
          logoUrl: logoUrl, // Add logo URL to data
          ...tool 
      },
      position: {
        x: categoryX + (toolRadiusStep + (toolIndex % 3) * 60) * Math.cos(toolAngle), // Position tools around category
        y: categoryY + (toolRadiusStep + (toolIndex % 3) * 60) * Math.sin(toolAngle),
      },
      // Style might be handled within the custom node now
      style: {
        // background: toolColor, // Background might be part of custom node
        // color: "white",
        // width: 150, // Width might be set by custom node
        // textAlign: "center",
        // fontSize: "12px",
        borderRadius: "8px", // Keep border radius
        border: "1px solid #ccc", // Use a lighter border
        // padding: "8px", // Padding handled by custom node
      },
      zIndex: 10,
    } as Node;
    initialNodes.push(toolNode);

    // Edge from Category to Tool
    initialEdges.push({
      id: `e${categoryId}-${toolId}`,
      source: categoryId,
      target: toolId,
      type: "smoothstep",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: toolColor,
      },
      style: { stroke: toolColor, strokeWidth: 1.5 },
      zIndex: 1,
    } as Edge);
  });
});

export { initialNodes, initialEdges };
