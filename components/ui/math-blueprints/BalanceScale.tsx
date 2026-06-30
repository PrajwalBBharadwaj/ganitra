import React from 'react';

export interface BalanceScaleProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showEquation?: boolean;
}

export function BalanceScale({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  showEquation = true,
}: BalanceScaleProps) {
  const viewBoxSize = 400;
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
      {/* Base */}
      <rect
        x={centerX - 30}
        y={centerY + 120}
        width="60"
        height="10"
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity * 0.8}
        strokeWidth="1.5"
      />

      {/* Vertical pole */}
      <line
        x1={centerX}
        y1={centerY + 120}
        x2={centerX}
        y2={centerY + 40}
        stroke={strokeColor}
        strokeOpacity={opacity * 0.8}
        strokeWidth="2"
      />

      {/* Horizontal beam */}
      <line
        x1={centerX - 120}
        y1={centerY + 40}
        x2={centerX + 120}
        y2={centerY + 40}
        stroke={strokeColor}
        strokeOpacity={opacity * 0.8}
        strokeWidth="2"
      />

      {/* Left pan */}
      <g>
        <line x1={centerX - 100} y1={centerY + 40} x2={centerX - 100} y2={centerY + 80} stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
        <ellipse cx={centerX - 100} cy={centerY + 85} rx="40" ry="8" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
        {/* Weight */}
        <rect x={centerX - 110} y={centerY + 60} width="20" height="20" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="1" />
        <text x={centerX - 100} y={centerY + 75} fontFamily="Inter, sans-serif" fontSize="12" fill={strokeColor} fillOpacity={opacity * 1.5} fontWeight="600" textAnchor="middle">5</text>
      </g>

      {/* Right pan */}
      <g>
        <line x1={centerX + 100} y1={centerY + 40} x2={centerX + 100} y2={centerY + 80} stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
        <ellipse cx={centerX + 100} cy={centerY + 85} rx="40" ry="8" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
        {/* Weight */}
        <rect x={centerX + 90} y={centerY + 60} width="20" height="20" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="1" />
        <text x={centerX + 100} y={centerY + 75} fontFamily="Inter, sans-serif" fontSize="12" fill={strokeColor} fillOpacity={opacity * 1.5} fontWeight="600" textAnchor="middle">5</text>
      </g>

      {/* Fulcrum triangle */}
      <polygon
        points={`${centerX},${centerY + 120} ${centerX - 15},${centerY + 130} ${centerX + 15},${centerY + 130}`}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity * 0.8}
        strokeWidth="1.5"
      />

      {/* Equation label */}
      {showEquation && (
        <text
          x={centerX}
          y={centerY - 20}
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fill={strokeColor}
          fillOpacity={opacity * 1.5}
          fontWeight="500"
          fontStyle="italic"
          textAnchor="middle"
        >
          5 = 5
        </text>
      )}

      {/* Label */}
      <text
        x={centerX}
        y={viewBoxSize - 15}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Balance Scale
      </text>
    </svg>
  );
}