import React from 'react';

export interface BlueprintTriangleProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showArcs?: boolean;
  showDiagonals?: boolean;
  showConstructionMarks?: boolean;
}

export function BlueprintTriangle({
  width = 400,
  height = 400,
  strokeColor = '#7CC8DD',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  showArcs = true,
  showDiagonals = true,
  showConstructionMarks = true,
}: BlueprintTriangleProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Triangle vertices
  const top = { x: 200, y: 60 };
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
      {/* Construction circles */}
      <circle cx={centerX} cy={centerY} r="150" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.7} strokeWidth="1.5" />
      <circle cx={centerX} cy={centerY} r="100" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1.25" />
      <circle cx={centerX} cy={centerY} r="50" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="1" />

      {/* Main triangle */}
      <polygon
        points={`${top.x},${top.y} ${right.x},${right.y} ${left.x},${left.y}`}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Intersecting diagonals */}
      {showDiagonals && (
        <>
          <line x1={top.x} y1={top.y} x2={top.x} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.7} strokeWidth="1" strokeDasharray="4 4" />
          <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1={top.x} y1={top.y} x2={left.x + (right.x - left.x) * 0.3} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.4} strokeWidth="0.75" strokeDasharray="3 4" />
          <line x1={top.x} y1={top.y} x2={left.x + (right.x - left.x) * 0.7} y2={right.y} stroke={strokeColor} strokeOpacity={opacity * 0.4} strokeWidth="0.75" strokeDasharray="3 4" />
        </>
      )}

      {/* Compass arcs */}
      {showArcs && (
        <>
          <path d={`M ${top.x} ${top.y} A 140 140 0 0 1 ${right.x} ${centerY}`} fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
          <path d={`M ${left.x} ${centerY} A 140 140 0 0 1 ${top.x} ${top.y}`} fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
          <path d={`M ${top.x} ${top.y} A 140 140 0 0 0 ${left.x} ${centerY}`} fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <path d={`M ${right.x} ${centerY} A 140 140 0 0 0 ${top.x} ${top.y}`} fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
        </>
      )}

      {/* Construction marks */}
      {showConstructionMarks && (
        <>
          <circle cx={top.x} cy={top.y} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
          <circle cx={right.x} cy={right.y} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
          <circle cx={left.x} cy={left.y} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
          <circle cx={top.x} cy={right.y} r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.2} strokeWidth="0.75" />
          <circle cx={left.x + (right.x - left.x) * 0.3} cy={right.y} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="0.75" />
          <circle cx={left.x + (right.x - left.x) * 0.7} cy={right.y} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="0.75" />
        </>
      )}

      {/* Midpoint marks */}
      <circle cx={top.x} cy={190} r="2" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.5" />
      <circle cx={top.x} cy={210} r="2" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.5" />

      {/* Node points */}
      <circle cx={centerX} cy={centerY} r="5" fill={strokeColor} fillOpacity={opacity * 1.2} />
      <circle cx={top.x} cy={top.y} r="3" fill={strokeColor} fillOpacity={opacity} />
      <circle cx={right.x} cy={right.y} r="3" fill={strokeColor} fillOpacity={opacity} />
      <circle cx={left.x} cy={left.y} r="3" fill={strokeColor} fillOpacity={opacity} />

      {/* Intersection points */}
      <circle cx={top.x} cy={130} r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
      <circle cx={top.x + 70} cy={centerY} r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
      <circle cx={top.x} cy={270} r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
      <circle cx={top.x - 70} cy={centerY} r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
    </svg>
  );
}