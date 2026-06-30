import React from 'react';

export interface CompassConstructionProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showArcs?: boolean;
  showCenter?: boolean;
  arcCount?: number;
}

export function CompassConstruction({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  showArcs = true,
  showCenter = true,
  arcCount = 3,
}: CompassConstructionProps) {
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
      {/* Compass arcs */}
      {showArcs &&
        Array.from({ length: arcCount }).map((_, i) => {
          const radius = 60 + i * 50;
          const startAngle = (i * Math.PI) / 4;
          const endAngle = startAngle + Math.PI * 1.5;
          const x1 = centerX + radius * Math.cos(startAngle);
          const y1 = centerY + radius * Math.sin(startAngle);
          const x2 = centerX + radius * Math.cos(endAngle);
          const y2 = centerY + radius * Math.sin(endAngle);
          const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

          return (
            <path
              key={`arc-${i}`}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity - i * 0.03}
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })}

      {/* Center point */}
      {showCenter && (
        <>
          <circle cx={centerX} cy={centerY} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1.5" />
          <circle cx={centerX} cy={centerY} r="2" fill={strokeColor} fillOpacity={opacity * 1.2} />
        </>
      )}

      {/* Construction marks */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 6;
        const x = centerX + 150 * Math.cos(angle);
        const y = centerY + 150 * Math.sin(angle);
        return (
          <circle
            key={`mark-${i}`}
            cx={x}
            cy={y}
            r="2.5"
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.8}
            strokeWidth="0.75"
          />
        );
      })}

      {/* Radius lines */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * Math.PI) / 2 + Math.PI / 4;
        const x = centerX + 120 * Math.cos(angle);
        const y = centerY + 120 * Math.sin(angle);
        return (
          <line
            key={`radius-${i}`}
            x1={centerX}
            y1={centerY}
            x2={x}
            y2={y}
            stroke={strokeColor}
            strokeOpacity={opacity * 0.5}
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        );
      })}
    </svg>
  );
}