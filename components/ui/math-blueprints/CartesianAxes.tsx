import React from 'react';

export interface CartesianAxesProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showArrows?: boolean;
  showLabels?: boolean;
  labelColor?: string;
}

export function CartesianAxes({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showArrows = true,
  showLabels = true,
  labelColor = '#06B6D4',
}: CartesianAxesProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const arrowSize = 8;

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
      {/* X-axis */}
      <line
        x1="20"
        y1={centerY}
        x2={viewBoxSize - 20}
        y2={centerY}
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Y-axis */}
      <line
        x1={centerX}
        y1="20"
        x2={centerX}
        y2={viewBoxSize - 20}
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Arrows */}
      {showArrows && (
        <>
          {/* X-axis arrow */}
          <polygon
            points={`${viewBoxSize - 20},${centerY} ${viewBoxSize - 20 - arrowSize},${centerY - arrowSize / 2} ${viewBoxSize - 20 - arrowSize},${centerY + arrowSize / 2}`}
            fill={strokeColor}
            fillOpacity={opacity}
          />
          {/* Y-axis arrow */}
          <polygon
            points={`${centerX},20 ${centerX - arrowSize / 2},${20 + arrowSize} ${centerX + arrowSize / 2},${20 + arrowSize}`}
            fill={strokeColor}
            fillOpacity={opacity}
          />
        </>
      )}

      {/* Labels */}
      {showLabels && (
        <>
          <text
            x={viewBoxSize - 15}
            y={centerY + 5}
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill={labelColor}
            fillOpacity={opacity * 1.5}
            fontWeight="500"
          >
            x
          </text>
          <text
            x={centerX + 5}
            y="25"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fill={labelColor}
            fillOpacity={opacity * 1.5}
            fontWeight="500"
          >
            y
          </text>
          <text
            x={centerX - 8}
            y={centerY + 15}
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill={labelColor}
            fillOpacity={opacity * 1.2}
          >
            O
          </text>
        </>
      )}

      {/* Tick marks */}
      {Array.from({ length: 8 }).map((_, i) => {
        const pos = 50 * (i + 1);
        if (pos >= viewBoxSize - 20) return null;
        return (
          <g key={`tick-${i}`}>
            <line
              x1={pos}
              y1={centerY - 3}
              x2={pos}
              y2={centerY + 3}
              stroke={strokeColor}
              strokeOpacity={opacity * 0.8}
              strokeWidth="1"
            />
            <line
              x1={centerX - 3}
              y1={pos}
              x2={centerX + 3}
              y2={pos}
              stroke={strokeColor}
              strokeOpacity={opacity * 0.8}
              strokeWidth="1"
            />
          </g>
        );
      })}
    </svg>
  );
}