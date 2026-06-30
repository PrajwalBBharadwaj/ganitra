import React from 'react';

export interface PolygonConstructionProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  sides?: number;
  radius?: number;
  showLabels?: boolean;
  showDiagonals?: boolean;
}

export function PolygonConstruction({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  sides = 6,
  radius = 140,
  showLabels = true,
  showDiagonals = false,
}: PolygonConstructionProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Calculate polygon vertices
  const vertices = Array.from({ length: sides }, (_, i) => {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      label: String.fromCharCode(65 + i), // A, B, C, D, ...
    };
  });

  const polygonPoints = vertices.map(v => `${v.x},${v.y}`).join(' ');

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
      {/* Circumcircle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity * 0.5}
        strokeWidth="0.75"
      />

      {/* Main polygon */}
      <polygon
        points={polygonPoints}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Diagonals from first vertex */}
      {showDiagonals &&
        vertices.slice(2).map((v, i) => (
          <line
            key={`diagonal-${i}`}
            x1={vertices[0].x}
            y1={vertices[0].y}
            x2={v.x}
            y2={v.y}
            stroke={strokeColor}
            strokeOpacity={opacity * 0.4}
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        ))}

      {/* Vertex labels */}
      {showLabels &&
        vertices.map((v, i) => (
          <text
            key={`label-${i}`}
            x={v.x + (v.x > centerX ? 8 : -8)}
            y={v.y + (v.y > centerY ? 4 : -4)}
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill={strokeColor}
            fillOpacity={opacity * 2}
            fontWeight="600"
            textAnchor={v.x > centerX ? 'start' : 'end'}
          >
            {v.label}
          </text>
        ))}

      {/* Vertex marks */}
      {vertices.map((v, i) => (
        <circle
          key={`vertex-${i}`}
          cx={v.x}
          cy={v.y}
          r="3"
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 1.5}
          strokeWidth="1"
        />
      ))}

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="2.5" fill={strokeColor} fillOpacity={opacity * 1.2} />
    </svg>
  );
}