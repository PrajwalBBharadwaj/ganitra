import React from 'react';

export interface BlueprintCircleProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showSquare?: boolean;
  showDiagonals?: boolean;
  showCompassMarks?: boolean;
  circleCount?: number;
}

export function BlueprintCircle({
  width = 400,
  height = 400,
  strokeColor = '#7CC8DD',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  showSquare = true,
  showDiagonals = true,
  showCompassMarks = true,
  circleCount = 4,
}: BlueprintCircleProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  const radii = [170, 130, 80, 40];

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
      {/* Concentric circles */}
      {radii.slice(0, circleCount).map((r, i) => (
        <circle
          key={`circle-${i}`}
          cx={centerX}
          cy={centerY}
          r={r}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity - i * 0.04}
          strokeWidth={1.5 - i * 0.25}
        />
      ))}

      {/* Square construction */}
      {showSquare && (
        <>
          <rect x="70" y="70" width="260" height="260" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.7} strokeWidth="1" />
          <rect x="110" y="110" width="180" height="180" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
        </>
      )}

      {/* Diagonal construction lines */}
      {showDiagonals && (
        <>
          <line x1="70" y1="70" x2="330" y2="330" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="330" y1="70" x2="70" y2="330" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="70" y1="200" x2="330" y2="200" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1="200" y1="70" x2="200" y2="330" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
        </>
      )}

      {/* Tangent lines */}
      <line x1="70" y1="130" x2="330" y2="130" stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" strokeDasharray="3 4" />
      <line x1="70" y1="270" x2="330" y2="270" stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" strokeDasharray="3 4" />
      <line x1="130" y1="70" x2="130" y2="330" stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" strokeDasharray="3 4" />
      <line x1="270" y1="70" x2="270" y2="330" stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" strokeDasharray="3 4" />

      {/* Compass marks */}
      {showCompassMarks && (
        <>
          <circle cx="200" cy="30" r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="1" />
          <circle cx="200" cy="370" r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="1" />
          <circle cx="30" cy="200" r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="1" />
          <circle cx="370" cy="200" r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity} strokeWidth="1" />
          <circle cx="90" cy="90" r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
          <circle cx="310" cy="90" r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
          <circle cx="90" cy="310" r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
          <circle cx="310" cy="310" r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="0.75" />
        </>
      )}

      {/* Subtle triangle construction */}
      <polygon points="200,70 330,200 200,330 70,200" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />

      {/* Node points */}
      <circle cx={centerX} cy={centerY} r="5" fill={strokeColor} fillOpacity={opacity * 1.2} />
      <circle cx="200" cy="70" r="3" fill={strokeColor} fillOpacity={opacity} />
      <circle cx="330" cy="200" r="3" fill={strokeColor} fillOpacity={opacity} />
      <circle cx="200" cy="330" r="3" fill={strokeColor} fillOpacity={opacity} />
      <circle cx="70" cy="200" r="3" fill={strokeColor} fillOpacity={opacity} />

      {/* Intersection points */}
      <circle cx="200" cy="130" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
      <circle cx="200" cy="270" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
      <circle cx="130" cy="200" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
      <circle cx="270" cy="200" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
    </svg>
  );
}