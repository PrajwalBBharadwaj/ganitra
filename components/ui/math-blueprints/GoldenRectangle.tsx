import React from 'react';

export interface GoldenRectangleProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showSpiral?: boolean;
  showSquares?: boolean;
  iterations?: number;
}

export function GoldenRectangle({
  width = 400,
  height = 400,
  strokeColor = '#F59E0B',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  showSpiral = true,
  showSquares = true,
  iterations = 4,
}: GoldenRectangleProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const phi = 1.618033988749; // Golden ratio

  // Golden rectangle dimensions
  const baseWidth = 200;
  const baseHeight = baseWidth / phi;

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
      {/* Main golden rectangle */}
      <rect
        x={centerX - baseWidth / 2}
        y={centerY - baseHeight / 2}
        width={baseWidth}
        height={baseHeight}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Nested squares */}
      {showSquares &&
        Array.from({ length: iterations }).map((_, i) => {
          const size = baseWidth / Math.pow(phi, i);
          const offset = (baseWidth - size) / 2;
          return (
            <rect
              key={`square-${i}`}
              x={centerX - size / 2}
              y={centerY - size / 2}
              width={size}
              height={size}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * (1 - i * 0.15)}
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          );
        })}

      {/* Golden spiral approximation */}
      {showSpiral && (
        <path
          d={`M ${centerX} ${centerY}
              Q ${centerX + baseWidth * 0.3} ${centerY - baseHeight * 0.2} ${centerX + baseWidth * 0.4} ${centerY - baseHeight * 0.4}
              Q ${centerX + baseWidth * 0.5} ${centerY - baseHeight * 0.6} ${centerX + baseWidth * 0.3} ${centerY - baseHeight * 0.7}
              Q ${centerX + baseWidth * 0.1} ${centerY - baseHeight * 0.8} ${centerX - baseWidth * 0.1} ${centerY - baseHeight * 0.6}
              Q ${centerX - baseWidth * 0.2} ${centerY - baseHeight * 0.4} ${centerX - baseWidth * 0.1} ${centerY - baseHeight * 0.2}
              Q ${centerX} ${centerY} ${centerX + baseWidth * 0.1} ${centerY + baseHeight * 0.1}`}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 1.3}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      )}

      {/* Diagonal construction line */}
      <line
        x1={centerX - baseWidth / 2}
        y1={centerY - baseHeight / 2}
        x2={centerX + baseWidth / 2}
        y2={centerY + baseHeight / 2}
        stroke={strokeColor}
        strokeOpacity={opacity * 0.6}
        strokeWidth="0.75"
        strokeDasharray="3 3"
      />

      {/* Corner marks */}
      <circle cx={centerX - baseWidth / 2} cy={centerY - baseHeight / 2} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={centerX + baseWidth / 2} cy={centerY - baseHeight / 2} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={centerX + baseWidth / 2} cy={centerY + baseHeight / 2} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx={centerX - baseWidth / 2} cy={centerY + baseHeight / 2} r="2.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />

      {/* Phi label */}
      <text
        x={centerX + baseWidth / 2 + 10}
        y={centerY + 4}
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill={strokeColor}
        fillOpacity={opacity * 2}
        fontWeight="600"
      >
        φ
      </text>
    </svg>
  );
}