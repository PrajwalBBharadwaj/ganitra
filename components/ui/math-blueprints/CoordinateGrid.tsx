import React from 'react';

export interface CoordinateGridProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  gridSize?: number;
  showAxes?: boolean;
  showTicks?: boolean;
  axisColor?: string;
  gridColor?: string;
}

export function CoordinateGrid({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.15,
  rotation = 0,
  scale = 1,
  className = '',
  gridSize = 50,
  showAxes = true,
  showTicks = true,
  axisColor = '#06B6D4',
  gridColor = '#06B6D4',
}: CoordinateGridProps) {
  const viewBoxSize = 400;
  const gridCount = Math.floor(viewBoxSize / gridSize);
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

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
      {/* Grid lines */}
      {Array.from({ length: gridCount + 1 }).map((_, i) => {
        const pos = i * gridSize;
        return (
          <g key={`grid-${i}`}>
            <line
              x1={pos}
              y1="0"
              x2={pos}
              y2={viewBoxSize}
              stroke={gridColor}
              strokeOpacity={opacity * 0.7}
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1={pos}
              x2={viewBoxSize}
              y2={pos}
              stroke={gridColor}
              strokeOpacity={opacity * 0.7}
              strokeWidth="0.5"
            />
          </g>
        );
      })}

      {/* Axes */}
      {showAxes && (
        <>
          <line
            x1={centerX}
            y1="0"
            x2={centerX}
            y2={viewBoxSize}
            stroke={axisColor}
            strokeOpacity={opacity}
            strokeWidth="1"
          />
          <line
            x1="0"
            y1={centerY}
            x2={viewBoxSize}
            y2={centerY}
            stroke={axisColor}
            strokeOpacity={opacity}
            strokeWidth="1"
          />
        </>
      )}

      {/* Tick marks */}
      {showTicks &&
        Array.from({ length: gridCount - 1 }).map((_, i) => {
          const pos = gridSize * (i + 1);
          return (
            <g key={`tick-${i}`}>
              <line
                x1={pos}
                y1={centerY - 4}
                x2={pos}
                y2={centerY + 4}
                stroke={axisColor}
                strokeOpacity={opacity * 1.2}
                strokeWidth="1"
              />
              <line
                x1={centerX - 4}
                y1={pos}
                x2={centerX + 4}
                y2={pos}
                stroke={axisColor}
                strokeOpacity={opacity * 1.2}
                strokeWidth="1"
              />
            </g>
          );
        })}
    </svg>
  );
}