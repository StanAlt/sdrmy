// src/components/ToolNode.tsx
"use client";

import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const ToolNode = ({ data }) => {
  const logoSize = 24; // Size of the logo image

  return (
    <div style={{
      padding: '10px',
      borderRadius: '8px',
      background: '#1E90FF', // Default tool color
      color: 'white',
      border: '1px solid #ccc',
      textAlign: 'center',
      minWidth: '150px', // Ensure minimum width
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px' // Space between logo and label
    }}>
      {/* Input handle (target) */}
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
      
      {/* Logo placeholder - using SVG instead of image */}
      <div style={{ width: logoSize, height: logoSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={logoSize} height={logoSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#FFC107" />
          <path d="M7 12H17" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 7V17" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Label */}
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
        {data.label}
      </div>
      
      {/* Output handle (source) */}
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
  );
};

export default memo(ToolNode);

