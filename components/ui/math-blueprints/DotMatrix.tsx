import React from 'react';

export interface DotMatrixProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  dotSize?: number;
  spacing?: number;
  dotColor?: string;
}

export function DotMatrix({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.15,
  rotation = 0,
  scale = 1,
  className = '',
  dotSize = 1.5,
  spacing = 40,
  dotColor = '#7C3AED',
}: DotMatrixProps) {
  const viewBoxSize = 400;
  const cols = Math.floor(viewBoxSize / spacing);
  const rows = Math.floor(viewBoxSize / spacing);

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
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={spacing * (col + 0.5)}
            cy={spacing * (row + 0.5)}
            r={dotSize}
            fill={dotColor}
            fillOpacity={opacity}
          />
        ))
      )}
    </svg>
  );
}