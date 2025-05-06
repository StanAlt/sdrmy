// src/components/VapiDemo.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Vapi from '@vapi-ai/web';
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button

// Define the props for the component, including the VAPI Public Key
interface VapiDemoProps {
  vapiKey: string;
  assistantId?: string; // Optional: Use a specific assistant ID
  assistantConfig?: any; // Optional: Use inline assistant config
}

const VapiDemo: React.FC<VapiDemoProps> = ({ vapiKey, assistantId, assistantConfig }) => {
  const [vapiInstance, setVapiInstance] = useState<any>(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [assistantStatus, setAssistantStatus] = useState('Inactive'); // e.g., Inactive, Connecting, Active, Speaking, Listening

  // Initialize Vapi instance
  useEffect(() => {
    if (vapiKey) {
      const vapi = new Vapi(vapiKey);
      setVapiInstance(vapi);

      // Setup event listeners
      vapi.on('call-start', () => {
        console.log('VAPI Call has started');
        setIsSessionActive(true);
        setAssistantStatus('Connected');
      });

      vapi.on('call-end', () => {
        console.log('VAPI Call has ended');
        setIsSessionActive(false);
        setAssistantStatus('Inactive');
      });

      vapi.on('speech-start', () => {
        console.log('VAPI Assistant speech started');
        setAssistantStatus('Speaking');
      });

      vapi.on('speech-end', () => {
        console.log('VAPI Assistant speech ended');
        // Could transition to 'Listening' or back to 'Connected' depending on flow
        if (isSessionActive) {
          setAssistantStatus('Connected'); // Or Listening?
        }
      });

      vapi.on('volume-level', (level) => {
        // console.log(`VAPI Assistant volume level: ${level}`);
        // Could use this for UI feedback
      });

      vapi.on('message', (message) => {
        console.log('VAPI Message:', message);
        // Handle specific message types if needed (e.g., function calls, transcripts)
      });

      vapi.on('error', (error) => {
        console.error('VAPI Error:', error);
        setIsSessionActive(false);
        setAssistantStatus('Error');
      });

      // Cleanup function to remove listeners and stop call if component unmounts
      return () => {
        vapi.stop();
        // Consider removing listeners explicitly if the SDK doesn't handle it
      };
    } else {
      console.warn('VAPI Public Key is missing.');
      setAssistantStatus('Error: Missing Key');
    }
  }, [vapiKey, isSessionActive]); // Added isSessionActive to dependencies

  const startCall = useCallback(async () => {
    if (!vapiInstance) return;
    setAssistantStatus('Connecting...');
    try {
      const callOptions = assistantId ? assistantId : assistantConfig;
      if (!callOptions) {
        console.error('Either assistantId or assistantConfig must be provided.');
        setAssistantStatus('Error: No Assistant Config');
        return;
      }
      await vapiInstance.start(callOptions);
    } catch (error) {
      console.error('Failed to start VAPI call:', error);
      setAssistantStatus('Error: Failed to Start');
    }
  }, [vapiInstance, assistantId, assistantConfig]);

  const stopCall = useCallback(() => {
    if (!vapiInstance) return;
    setAssistantStatus('Disconnecting...');
    vapiInstance.stop();
  }, [vapiInstance]);

  const toggleMute = useCallback(() => {
    if (!vapiInstance) return;
    const newMutedState = !isMuted;
    vapiInstance.setMuted(newMutedState);
    setIsMuted(newMutedState);
  }, [vapiInstance, isMuted]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg bg-white shadow">
      <p className="text-lg font-medium">Status: <span className={`font-bold ${assistantStatus.startsWith('Error') ? 'text-red-600' : 'text-sd-army-blue'}`}>{assistantStatus}</span></p>
      
      {!isSessionActive ? (
        <Button onClick={startCall} disabled={!vapiKey || assistantStatus === 'Connecting...' || assistantStatus.startsWith('Error')}>
          {assistantStatus === 'Connecting...' ? 'Connecting...' : 'Start Demo Call'}
        </Button>
      ) : (
        <div className="flex gap-4">
          <Button onClick={stopCall} variant="destructive">
            Stop Call
          </Button>
          <Button onClick={toggleMute} variant="secondary">
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        </div>
      )}
      {!vapiKey && <p className="text-sm text-red-500">VAPI Public Key not provided.</p>}
    </div>
  );
};

export default VapiDemo;

