// Type declarations to fix TypeScript errors
declare module 'tailwindcss' {
  const tailwindcss: any;
  export = tailwindcss;
}

declare module 'tailwindcss-animate' {
  const tailwindcssAnimate: any;
  export = tailwindcssAnimate;
}

// Fix React import issues
declare module 'react' {
  import * as React from 'react';
  export = React;
}

// For component imports
declare module '@/components/*' {
  const component: any;
  export default component;
}

// Environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_VAPI_KEY?: string;
    }
  }
}
