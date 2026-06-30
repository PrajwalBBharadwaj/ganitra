import React from 'react';

export interface CoordinatePlaneProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showGrid?: boolean;
  showAxes?: boolean;
  showPoints?: boolean;
}

export function CoordinatePlane({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showGrid = true,
  showAxes = true,
  showPoints = true,
}: CoordinatePlaneProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Sample points
  const points = [
    { x: 100, y: 150 },
    { x: 200, y: 200 },
    { x: 300, y: 120 },
    { x: 150, y: 280 },
    { x: 250, y: 250 },
  ];

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
      {/* Grid */}
      {showGrid &&
        Array.from({ length: 9 }).map((_, i) => (
          <g key={`grid-${i}`}>
            <line x1={50 * (i + 1)} y1="0" x2={50 * (i + 1)} y2={viewBoxSize} stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" />
            <line x1="0" y1={50 * (i + 1)} x2={viewBoxSize} y2={50 * (i + 1)} stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" />
          </g>
        ))}

      {/* Axes */}
      {showAxes && (
        <>
          <line x1="0" y1={centerY} x2={viewBoxSize} y2={centerY} stroke={strokeColor} strokeOpacity={opacity * 0.7} strokeWidth="1.5" />
          <line x1={centerX} y1="0" x2={centerX} y2={viewBoxSize} stroke={strokeColor} strokeOpacity={opacity * 0.7} strokeWidth="1.5" />
        </>
      )}

      {/* Points */}
      {showPoints &&
        points.map((point, i) => (
          <g key={`point-${i}`}>
            <circle cx={point.x} cy={point.y} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.2} strokeWidth="1" />
            <circle cx={point.x} cy={point.y} r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
          </g>
        ))}

      {/* Label */}
      <text
        x={centerX + 10}
        y={viewBoxSize - 10}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
      >
        Coordinate Plane
      </text>
    </svg>
  );
}