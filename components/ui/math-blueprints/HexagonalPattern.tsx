import React from 'react';

export interface HexagonalPatternProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showDots?: boolean;
  showConnections?: boolean;
}

export function HexagonalPattern({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  showDots = true,
  showConnections = true,
}: HexagonalPatternProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate hexagonal grid
  const hexRadius = 30;
  const hexHeight = hexRadius * Math.sqrt(3);
  const nodes: Array<{ x: number; y: number }> = [];

  for (let row = -3; row <= 3; row++) {
    for (let col = -3; col <= 3; col++) {
      const x = centerX + col * hexRadius * 1.5;
      const y = centerY + row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
      
      if (x > 40 && x < viewBoxSize - 40 && y > 40 && y < viewBoxSize - 40) {
        nodes.push({ x, y });
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
      {/* Hexagonal connections */}
      {showConnections &&
        nodes.map((node, i) =>
          nodes.slice(i + 1).map((other, j) => {
            const dx = other.x - node.x;
            const dy = other.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connect nearby nodes (hexagonal neighbors)
            if (distance < hexRadius * 1.2) {
              return (
                <line
                  key={`conn-${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={other.x}
                  y2={other.y}
                  stroke={strokeColor}
                  strokeOpacity={opacity * 0.5}
                  strokeWidth="0.5"
                />
              );
            }
            return null;
          })
        )}

      {/* Hexagonal nodes */}
      {showDots &&
        nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="2.5"
            fill={strokeColor}
            fillOpacity={opacity * 0.8}
          />
        ))}

      {/* Center highlight */}
      <circle cx={centerX} cy={centerY} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={centerX} cy={centerY} r="2" fill={strokeColor} fillOpacity={opacity * 1.2} />
    </svg>
  );
}