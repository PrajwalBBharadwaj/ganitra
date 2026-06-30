import React from 'react';

export interface BlueprintMeshProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  gridSize?: number;
  showNodes?: boolean;
  showConnections?: boolean;
}

export function BlueprintMesh({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  gridSize = 64,
  showNodes = true,
  showConnections = true,
}: BlueprintMeshProps) {
  const viewBoxSize = 400;
  const cols = Math.floor(viewBoxSize / gridSize);
  const rows = Math.floor(viewBoxSize / gridSize);

  // Generate grid nodes
  const nodes = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      x: gridSize / 2 + col * gridSize,
      y: gridSize / 2 + row * gridSize,
    }))
  ).flat();

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
      {showConnections &&
        nodes.map((node, i) => {
          // Connect to right neighbor
          if ((i + 1) % cols !== 0 && i + 1 < nodes.length) {
            const right = nodes[i + 1];
            return (
              <line
                key={`h-${i}`}
                x1={node.x}
                y1={node.y}
                x2={right.x}
                y2={right.y}
                stroke={strokeColor}
                strokeOpacity={opacity * 0.6}
                strokeWidth="0.5"
              />
            );
          }
          // Connect to bottom neighbor
          if (i + cols < nodes.length) {
            const bottom = nodes[i + cols];
            return (
              <line
                key={`v-${i}`}
                x1={node.x}
                y1={node.y}
                x2={bottom.x}
                y2={bottom.y}
                stroke={strokeColor}
                strokeOpacity={opacity * 0.6}
                strokeWidth="0.5"
              />
            );
          }
          return null;
        })}

      {/* Nodes */}
      {showNodes &&
        nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="2"
            fill={strokeColor}
            fillOpacity={opacity * 0.8}
          />
        ))}

      {/* Highlight center nodes */}
      <circle cx={viewBoxSize / 2} cy={viewBoxSize / 2} r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={viewBoxSize / 2} cy={viewBoxSize / 2} r="1.5" fill={strokeColor} fillOpacity={opacity * 1.2} />
    </svg>
  );
}