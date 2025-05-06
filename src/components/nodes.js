import { Position } from '@xyflow/react';

// Sample data - THIS NEEDS TO BE POPULATED WITH THE FULL 100 TOOLS AND CATEGORIES
const aiToolsData = [
  {
    "category": "AI Chatbots & Assistants",
    "tools": [
      {
        "name": "ChatGPT (GPT-4o)",
        "description": "Leading conversational AI model by OpenAI, known for versatility, speed, and multimodal capabilities.",
        "useCases": ["Brainstorming", "Translation", "Coding", "Script Generation", "Data Analysis", "Image Analysis"],
        "features": ["Multimodal input (text, image)", "Context retention", "Integrated web search", "Operators (Pro)", "Fast response times"],
        "pricingSummary": "Free (limited GPT-4o), Plus ($20/month), Pro ($200/month)",
        "websiteLink": "https://chat.openai.com/",
        "userSentiment": "Highly popular, top performer on benchmarks."
      },
      {
        "name": "Claude (Sonnet 3.5)",
        "description": "Conversational AI by Anthropic, praised for coding precision, natural conversation flow.",
        "useCases": ["Coding", "Code Review", "Creative Writing", "General Conversation"],
        "features": ["Strong coding capabilities", "Pleasant conversational tone", "Large context window"],
        "pricingSummary": "Free (limited), Pro ($20/month)",
        "websiteLink": "https://claude.ai/",
        "userSentiment": "Excellent for coding, pleasant interaction."
      },
      {
        "name": "Gemini Advanced (1.5 Pro)",
        "description": "Google's advanced conversational AI, integrated with Google Workspace.",
        "useCases": ["Drafting emails", "Summarizing articles", "Image analysis", "Creative brainstorming"],
        "features": ["Google Workspace integration", "Multimodal input", "Large context window"],
        "pricingSummary": "Free (1.5 Flash), Advanced ($19.99/month)",
        "websiteLink": "https://gemini.google.com/",
        "userSentiment": "Seamless Google integration, good for creative tasks."
      }
    ]
  },
  {
    "category": "AI Video Generation",
    "tools": [
      {
        "name": "Synthesia",
        "description": "Leading AI video generator for creating realistic AI avatar videos from text.",
        "useCases": ["Training Videos", "Internal Communications", "Onboarding", "Marketing Videos"],
        "features": ["Realistic AI avatars (230+)", "140+ languages", "Customizable avatars", "Templates"],
        "pricingSummary": "Free Demo, Personal ($22.5/month+), Enterprise (Custom)",
        "websiteLink": "https://www.synthesia.io/",
        "userSentiment": "Excellent for corporate/training videos."
      },
      {
        "name": "Runway (Gen-4)",
        "description": "Advanced AI video generation and editing platform with creative capabilities.",
        "useCases": ["Creative Video Generation", "Video Editing", "Text-to-Video", "Image-to-Video"],
        "features": ["Gen-4 model", "Text/Image to Video", "Video to Video", "Motion Brush"],
        "pricingSummary": "Free (limited), Standard ($12/user/month+)",
        "websiteLink": "https://runwayml.com/",
        "userSentiment": "Powerful creative tool, versatile features."
      },
      {
        "name": "HeyGen",
        "description": "AI video platform specializing in avatar creation, voice cloning, and video translation.",
        "useCases": ["Marketing videos", "Sales outreach", "E-learning", "Video translation"],
        "features": ["Customizable avatars", "Voice cloning", "Video translation (lip sync)", "Templates"],
        "pricingSummary": "Free trial, Creator ($24/month+)",
        "websiteLink": "https://www.heygen.com/",
        "userSentiment": "Popular for realistic avatars and translation."
      }
    ]
  },
  {
    "category": "AI Image Generation",
    "tools": [
      {
        "name": "Midjourney (V7)",
        "description": "Highly popular AI image generator known for its artistic and imaginative visual style.",
        "useCases": ["Artistic imagery", "Fantasy/Sci-fi concepts", "Conceptual art"],
        "features": ["Unique artistic style", "High detail", "Prompt tuning", "Discord interface"],
        "pricingSummary": "Basic ($10/month+)",
        "websiteLink": "https://www.midjourney.com/",
        "userSentiment": "Top choice for artistic visuals."
      },
      {
        "name": "Adobe Firefly 3",
        "description": "Adobe's generative AI integrated into Creative Cloud, focused on commercially safe images.",
        "useCases": ["Image generation", "Text effects", "Generative fill/expand"],
        "features": ["Adobe app integration", "Commercially safe", "Generative Fill/Expand", "Style reference"],
        "pricingSummary": "Free (limited), Premium ($4.99/month+), Included in CC plans.",
        "websiteLink": "https://firefly.adobe.com/",
        "userSentiment": "Excellent integration, commercially safe."
      }
    ]
  }
  // ... Add many more categories and tools here ...
];

const initialNodes = [];
const nodeSpacingX = 250;
const nodeSpacingY = 150;
// const categorySpacingY = 400;
let categoryY = 100;
let toolIdCounter = 100; // Start tool IDs after category IDs

// Central Node
initialNodes.push({
  id: '0',
  data: { label: 'Top 100 AI Tools' },
  position: { x: 0, y: 0 },
  type: 'input', // Or a custom type for styling
  sourcePosition: Position.Bottom,
  style: { background: '#5D3FD3', color: 'white', width: 180, textAlign: 'center', fontSize: '18px', padding: '15px' }
});

aiToolsData.forEach((categoryData, categoryIndex) => {
  const categoryId = `${categoryIndex + 1}`;
  const categoryNode = {
    id: categoryId,
    data: { label: categoryData.category },
    position: { x: (categoryIndex - Math.floor(aiToolsData.length / 2)) * (nodeSpacingX * 2.5), y: categoryY },
    type: 'default', // Or a custom type
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: { background: '#FF8C00', color: 'white', width: 180, textAlign: 'center', fontWeight: 'bold' }
  };
  initialNodes.push(categoryNode);

  categoryData.tools.forEach((tool, toolIndex) => {
    const toolId = `${toolIdCounter++}`;
    const toolNode = {
      id: toolId,
      data: { label: tool.name, isTool: true, ...tool }, // Add isTool flag and all tool data
      position: { x: categoryNode.position.x + (toolIndex - Math.floor(categoryData.tools.length / 2)) * nodeSpacingX, y: categoryNode.position.y + nodeSpacingY },
      type: 'default', // Or a custom type for tool nodes
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: { background: '#1E90FF', color: 'white', width: 150, textAlign: 'center', fontSize: '12px' }
    };
    initialNodes.push(toolNode);
  });
});

export default initialNodes;

