import React from 'react';

export interface NodeNetworkProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
  showLabels?: boolean;
}

export function NodeNetwork({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  nodeCount = 8,
  connectionDistance = 150,
  showLabels = false,
}: NodeNetworkProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate random but consistent node positions
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i * 2 * Math.PI) / nodeCount;
    const radius = 80 + (i % 3) * 40;
    return {
      x: centerX + radius * Math.cos(angle + (i * 0.5)),
      y: centerY + radius * Math.sin(angle + (i * 0.5)),
      label: String.fromCharCode(65 + i),
    };
  });

  // Generate connections between nearby nodes
  const connections: Array<{ from: number; to: number }> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < connectionDistance) {
        connections.push({ from: i, to: j });
      }
    }
  }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'center center',
      }}
    >
      {/* Connections */}
      {connections.map((conn, i) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const lineOpacity = opacity * (1 - distance / connectionDistance);

        return (
          <line
            key={`connection-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={strokeColor}
            strokeOpacity={lineOpacity}
            strokeWidth="0.75"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 1.5}
            strokeWidth="1"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="2"
            fill={strokeColor}
            fillOpacity={opacity * 1.2}
          />
          {showLabels && (
            <text
              x={node.x + 8}
              y={node.y + 3}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill={strokeColor}
              fillOpacity={opacity * 2}
              fontWeight="600"
            >
              {node.label}
            </text>
          )}
        </g>
      ))}

      {/* Center hub */}
      <circle cx={centerX} cy={centerY} r="5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1.5" />
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.3} />
    </svg>
  );
}