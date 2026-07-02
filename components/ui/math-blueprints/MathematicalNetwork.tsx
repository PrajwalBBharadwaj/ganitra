'use client';

import React, { useState, useEffect, useMemo } from 'react';

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
  cluster: number;
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
  cluster: number;
};

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
  const viewBoxSize = 1000;

  const mathSymbols = useMemo(
    () => ['π', 'Σ', '∫', '√', '≈', '≤', '≥', '∞', 'Δ', 'α', 'β', 'θ', 'λ', 'μ', 'σ', '∂', '∇', '∈', '∉', '⊂'],
    []
  );

  /**
   * Divide space into 3 conceptual clusters:
   * 0 = Algebra (left)
   * 1 = Geometry (center)
   * 2 = Calculus / Insight (right)
   */
  const generateNodes = useMemo<Node[]>(() => {
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const cluster = i % 3;

      const baseX =
        cluster === 0 ? Math.random() * 350 :
        cluster === 1 ? 250 + Math.random() * 500 :
        650 + Math.random() * 350;

      const x = baseX;
      const y = Math.random() * viewBoxSize;

      nodes.push({
        x,
        y,
        cluster,
        pulseOffset: (i * 0.37) % (Math.PI * 2),
        isAccent: cluster === 2 && i % 7 === 0,
      });
    }

    return nodes;
  }, [nodeCount]);

  /**
   * Stable connections: only local + structured links
   * No randomness in render phase
   */
  const generateConnections = useMemo<Connection[]>(() => {
    const connections: Connection[] = [];
    const maxDistance = 140;

    for (let i = 0; i < generateNodes.length; i++) {
      for (let j = i + 1; j < generateNodes.length; j++) {
        const a = generateNodes[i];
        const b = generateNodes[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const sameCluster = a.cluster === b.cluster;

          connections.push({
            from: { x: a.x, y: a.y },
            to: { x: b.x, y: b.y },
            brightness: sameCluster ? 0.9 : 0.4,
            seed: (i * 31 + j * 17) % 1000,
            isAccent: a.isAccent || b.isAccent,
          });
        }
      }
    }

    return connections;
  }, [generateNodes]);

  const generateSymbols = useMemo<Symbol[]>(() => {
    const symbols: Symbol[] = [];

    for (let i = 0; i < symbolCount; i++) {
      const cluster = i % 3;

      const x =
        cluster === 0 ? Math.random() * 350 :
        cluster === 1 ? 250 + Math.random() * 500 :
        650 + Math.random() * 350;

      symbols.push({
        x,
        y: Math.random() * viewBoxSize,
        char: mathSymbols[i % mathSymbols.length],
        cluster,
      });
    }

    return symbols;
  }, [symbolCount, mathSymbols]);

  const [time, setTime] = useState(0);

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
      {/* Soft gradient depth */}
      <defs>
        <radialGradient id="networkGradient" cx="70%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accentColor} stopOpacity={opacity * 1.2} />
          <stop offset="100%" stopColor={strokeColor} stopOpacity={opacity * 0.4} />
        </radialGradient>
      </defs>

      {/* CONNECTIONS */}
      {generateConnections.map((conn, i) => {
        const wave = 0.7 + 0.3 * Math.sin(time + conn.seed * 0.01);
        const opacityVal = opacity * conn.brightness * wave;

        const color = conn.isAccent ? accentColor : strokeColor;

        return (
          <line
            key={`c-${i}`}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={color}
            strokeOpacity={opacityVal}
            strokeWidth={conn.isAccent ? 0.8 : 0.5}
          />
        );
      })}

      {/* NODES */}
      {generateNodes.map((node, i) => {
        const pulse = 0.85 + 0.15 * Math.sin(time * 0.5 + node.pulseOffset);
        const color = node.isAccent ? accentColor : strokeColor;

        return (
          <g key={`n-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={2.3}
              fill="none"
              stroke={color}
              strokeOpacity={opacity * 1.4 * pulse}
              strokeWidth="0.7"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={1.1}
              fill={color}
              fillOpacity={opacity * 2 * pulse}
            />
          </g>
        );
      })}

      {/* SYMBOLS */}
      {generateSymbols.map((s, i) => (
        <text
          key={`s-${i}`}
          x={s.x}
          y={s.y}
          fontSize="14"
          fontWeight="500"
          fill={strokeColor}
          fillOpacity={opacity * 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {s.char}
        </text>
      ))}
    </svg>
  );
}