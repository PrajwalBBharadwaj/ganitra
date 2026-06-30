import React from 'react';

export interface CircleConstructionProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  circleCount?: number;
  showIntersections?: boolean;
  showCenter?: boolean;
}

export function CircleConstruction({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  circleCount = 3,
  showIntersections = true,
  showCenter = true,
}: CircleConstructionProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  const circles = [
    { cx: 200, cy: 200, r: 150 },
    { cx: 200, cy: 200, r: 100 },
    { cx: 200, cy: 200, r: 50 },
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
      {/* Concentric circles */}
      {circles.slice(0, circleCount).map((circle, i) => (
        <circle
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity - i * 0.04}
          strokeWidth="1"
        />
      ))}

      {/* Center point */}
      {showCenter && (
        <>
          <circle cx={centerX} cy={centerY} r="4" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1.5" />
          <circle cx={centerX} cy={centerY} r="2" fill={strokeColor} fillOpacity={opacity * 1.2} />
        </>
      )}

      {/* Intersection points */}
      {showIntersections && (
        <>
          <circle cx="200" cy="50" r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
          <circle cx="200" cy="350" r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
          <circle cx="50" cy="200" r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
          <circle cx="350" cy="200" r="2.5" fill={strokeColor} fillOpacity={opacity * 0.9} />
          <circle cx="200" cy="100" r="2" fill={strokeColor} fillOpacity={opacity * 0.7} />
          <circle cx="200" cy="300" r="2" fill={strokeColor} fillOpacity={opacity * 0.7} />
          <circle cx="100" cy="200" r="2" fill={strokeColor} fillOpacity={opacity * 0.7} />
          <circle cx="300" cy="200" r="2" fill={strokeColor} fillOpacity={opacity * 0.7} />
        </>
      )}

      {/* Tangent lines */}
      <line x1="50" y1="200" x2="350" y2="200" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
      <line x1="200" y1="50" x2="200" y2="350" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />

      {/* Compass marks */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x = centerX + 150 * Math.cos(angle);
        const y = centerY + 150 * Math.sin(angle);
        return (
          <circle
            key={`compass-${i}`}
            cx={x}
            cy={y}
            r="2"
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.6}
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}