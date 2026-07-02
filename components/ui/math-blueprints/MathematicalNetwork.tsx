'use client';

import React, { useState, useEffect } from 'react';

export interface MathematicalNetworkProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  accentColor?: string;
  opacity?: number;
  className?: string;
  nodeCount?: number;
  symbolCount?: number;
}

type Node = {
  x: number;
  y: number;
  pulseOffset: number;
  isAccent: boolean;
};

type Connection = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  brightness: number;
  seed: number;
  isAccent: boolean;
};

type Symbol = {
  x: number;
  y: number;
  char: string;
};

// Seeded random number generator for deterministic rendering
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function MathematicalNetwork({
  width = '100%',
  height = '100%',
  strokeColor = '#64748B',
  accentColor = '#06B6D4',
  opacity = 0.6,
  className = '',
  nodeCount = 120,
  symbolCount = 15,
}: MathematicalNetworkProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [time, setTime] = useState(0);
  
  const viewBoxSize = 1000;
  const mathSymbols = ['π', 'Σ', '∫', '√', '≈', '≤', '≥', '∞', 'Δ', 'α', 'β', 'θ', 'λ', 'μ', 'σ', '∂', '∇', '∈', '∉', '⊂'];

  // Generate deterministic data on mount
  useEffect(() => {
    const generatedNodes: Node[] = [];
    const generatedConnections: Connection[] = [];
    const generatedSymbols: Symbol[] = [];
  
    // --- DENSER NODE FIELD ---
    const adjustedNodeCount = Math.floor(nodeCount * 1.4);
  
    const minDist = 55; // key parameter: spreads local clustering

    for (let i = 0; i < adjustedNodeCount; i++) {
      let x = 0;
      let y = 0;
    
      let attempts = 0;
      let valid = false;
    
      while (!valid && attempts < 10) {
        const r1 = seededRandom(i * 17 + attempts * 11 + 1);
        const r2 = seededRandom(i * 17 + attempts * 11 + 2);
        const r3 = seededRandom(i * 17 + 3);
    
        x = r1 * viewBoxSize;
        y = r2 * viewBoxSize;
    
        valid = true;
    
        // check spacing vs existing nodes
        for (let j = 0; j < generatedNodes.length; j++) {
          const dx = x - generatedNodes[j].x;
          const dy = y - generatedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
    
          if (dist < minDist) {
            valid = false;
            break;
          }
        }
    
        attempts++;
      }
    
      generatedNodes.push({
        x,
        y,
        pulseOffset: seededRandom(i * 999) * Math.PI * 2,
        isAccent: seededRandom(i * 77) < 0.08,
      });
    }
  
    // --- CONNECTIONS (DENSER + GUARANTEED LINKS) ---
    const connectionDistance = 160; // increased slightly
    const baseThreshold = 0.28;     // increased probability
  
    // normal probabilistic connections
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        const r = seededRandom(i * 999 + j * 17);
  
        if (distance < connectionDistance && r < baseThreshold) {
          generatedConnections.push({
            from: generatedNodes[i],
            to: generatedNodes[j],
            brightness: 0.4 + seededRandom(i + j) * 0.6,
            seed: (i * 31 + j * 17) % 1000,
            isAccent: generatedNodes[i].isAccent || generatedNodes[j].isAccent,
          });
        }
      }
    }
  
    // --- GUARANTEE: each node connects to its nearest neighbor ---
    for (let i = 0; i < generatedNodes.length; i++) {
      let nearestIndex = -1;
      let nearestDist = Infinity;
  
      for (let j = 0; j < generatedNodes.length; j++) {
        if (i === j) continue;
  
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const dist = dx * dx + dy * dy;
  
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestIndex = j;
        }
      }
  
      if (nearestIndex !== -1) {
        generatedConnections.push({
          from: generatedNodes[i],
          to: generatedNodes[nearestIndex],
          brightness: 0.7,
          seed: i * 1000 + nearestIndex,
          isAccent:
            generatedNodes[i].isAccent || generatedNodes[nearestIndex].isAccent,
        });
      }
    }
  
    // --- SYMBOLS (unchanged but slightly denser feel) ---
    for (let i = 0; i < symbolCount; i++) {
      generatedSymbols.push({
        x: seededRandom(i * 33 + 100) * viewBoxSize,
        y: seededRandom(i * 33 + 200) * viewBoxSize,
        char: mathSymbols[
          Math.floor(seededRandom(i * 33 + 300) * mathSymbols.length)
        ],
      });
    }
  
    setNodes(generatedNodes);
    setConnections(generatedConnections);
    setSymbols(generatedSymbols);
  }, [nodeCount, symbolCount]);
  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.02);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0 }}
    >
      <defs>
        <radialGradient id="networkGradient" cx="70%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accentColor} stopOpacity={opacity * 1.2} />
          <stop offset="100%" stopColor={strokeColor} stopOpacity={opacity * 0.4} />
        </radialGradient>
      </defs>

      {/* Connection lines with subtle brightness animation */}
      {connections.map((conn, i) => {
        const wave = 0.7 + 0.3 * Math.sin(time + conn.seed * 0.01);
        const lineOpacity = opacity * conn.brightness * wave;
        const color = conn.isAccent ? accentColor : strokeColor;
        
        return (
          <line
            key={`connection-${i}`}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={color}
            strokeOpacity={lineOpacity}
            strokeWidth={conn.isAccent ? 0.8 : 0.5}
          />
        );
      })}

      {/* Nodes with subtle pulsing animation */}
      {nodes.map((node, i) => {
        const pulse = 0.85 + 0.15 * Math.sin(time * 0.5 + node.pulseOffset);
        const nodeOpacity = opacity * 1.4 * pulse;
        const color = node.isAccent ? accentColor : strokeColor;
        
        return (
          <g key={`node-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r="2.3"
              fill="none"
              stroke={color}
              strokeOpacity={nodeOpacity}
              strokeWidth="0.7"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="1.1"
              fill={color}
              fillOpacity={nodeOpacity * 1.2}
            />
          </g>
        );
      })}

      {/* Scattered mathematical symbols */}
      {symbols.map((symbol, i) => (
        <text
          key={`symbol-${i}`}
          x={symbol.x}
          y={symbol.y}
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="500"
          fill={strokeColor}
          fillOpacity={opacity * 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {symbol.char}
        </text>
      ))}

      {/* Occasional coordinate points */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 100 + (i % 4) * 200;
        const y = 100 + Math.floor(i / 4) * 800;
        
        return (
          <g key={`coord-${i}`}>
            <circle cx={x} cy={y} r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 2} strokeWidth="0.5" />
            <circle cx={x} cy={y} r="1" fill={strokeColor} fillOpacity={opacity * 3} />
          </g>
        );
      })}
    </svg>
  );
}