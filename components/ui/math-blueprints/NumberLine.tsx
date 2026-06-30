import React from 'react';

export interface NumberLineProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  min?: number;
  max?: number;
  showLabels?: boolean;
  showTicks?: boolean;
}

export function NumberLine({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  min = -10,
  max = 10,
  showLabels = true,
  showTicks = true,
}: NumberLineProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const lineLength = 300;
  const startX = centerX - lineLength / 2;
  const endX = centerX + lineLength / 2;

  const range = max - min;
  const tickSpacing = lineLength / range;

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
      {/* Main line */}
      <line
        x1={startX}
        y1={centerY}
        x2={endX}
        y2={centerY}
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="2"
      />

      {/* Arrow heads */}
      <polygon
        points={`${endX},${centerY} ${endX - 8},${centerY - 4} ${endX - 8},${centerY + 4}`}
        fill={strokeColor}
        fillOpacity={opacity}
      />
      <polygon
        points={`${startX},${centerY} ${startX + 8},${centerY - 4} ${startX + 8},${centerY + 4}`}
        fill={strokeColor}
        fillOpacity={opacity}
      />

      {/* Ticks and labels */}
      {showTicks &&
        Array.from({ length: range + 1 }).map((_, i) => {
          const value = min + i;
          const x = startX + i * tickSpacing;
          const isMajor = value % 5 === 0;

          return (
            <g key={`tick-${i}`}>
              <line
                x1={x}
                y1={centerY - (isMajor ? 8 : 5)}
                x2={x}
                y2={centerY + (isMajor ? 8 : 5)}
                stroke={strokeColor}
                strokeOpacity={opacity * (isMajor ? 1.2 : 0.7)}
                strokeWidth={isMajor ? 1.5 : 1}
              />
              {showLabels && isMajor && (
                <text
                  x={x}
                  y={centerY + 22}
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill={strokeColor}
                  fillOpacity={opacity * 1.5}
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {value}
                </text>
              )}
            </g>
          );
        })}

      {/* Zero highlight */}
      <circle cx={centerX} cy={centerY} r="4" fill={strokeColor} fillOpacity={opacity * 1.5} />
    </svg>
  );
}