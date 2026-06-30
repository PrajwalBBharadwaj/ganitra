import React from 'react';

export interface TriangleConstructionProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showLabels?: boolean;
  showAltitudes?: boolean;
  showMedians?: boolean;
}

export function TriangleConstruction({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  showLabels = true,
  showAltitudes = true,
  showMedians = false,
}: TriangleConstructionProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Triangle vertices
  const top = { x: 200, y: 80 };
  const right = { x: 340, y: 320 };
  const left = { x: 60, y: 320 };

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
      {/* Main triangle */}
      <polygon
        points={`${top.x},${top.y} ${right.x},${right.y} ${left.x},${left.y}`}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Altitudes */}
      {showAltitudes && (
        <>
          <line x1={top.x} y1={top.y} x2={top.x} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1={top.x} y1={top.y} x2={left.x + (right.x - left.x) * 0.3} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.4} strokeWidth="0.75" strokeDasharray="3 3" />
        </>
      )}

      {/* Medians */}
      {showMedians && (
        <>
          <line x1={top.x} y1={top.y} x2={(left.x + right.x) / 2} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1={left.x} y1={left.y} x2={(top.x + right.x) / 2} y2={(top.y + right.y) / 2} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1={right.x} y1={right.y} x2={(top.x + left.x) / 2} y2={(top.y + left.y) / 2} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
        </>
      )}

      {/* Circumcircle */}
      <circle cx={centerX} cy={centerY} r="140" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />

      {/* Vertex labels */}
      {showLabels && (
        <>
          <text x={top.x + 8} y={top.y - 8} fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">A</text>
          <text x={right.x + 8} y={right.y + 4} fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">B</text>
          <text x={left.x - 18} y={left.y + 4} fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">C</text>
        </>
      )}

      {/* Construction marks */}
      <circle cx={top.x} cy={top.y} r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={right.x} cy={right.y} r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={left.x} cy={left.y} r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />

      {/* Centroid */}
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />

      {/* Midpoint marks */}
      <circle cx={(left.x + right.x) / 2} cy={right.y} r="2" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
      <circle cx={(top.x + right.x) / 2} cy={(top.y + right.y) / 2} r="2" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
      <circle cx={(top.x + left.x) / 2} cy={(top.y + left.y) / 2} r="2" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
    </svg>
  );
}