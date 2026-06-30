import React from 'react';

export interface EuclideanConstructionProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showLabels?: boolean;
  showConstructionLines?: boolean;
}

export function EuclideanConstruction({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  showLabels = true,
  showConstructionLines = true,
}: EuclideanConstructionProps) {
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
      {/* Construction circles */}
      <circle cx="150" cy="200" r="120" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="1" />
      <circle cx="250" cy="200" r="120" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.8} strokeWidth="1" />
      <circle cx="200" cy="140" r="120" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="0.75" />

      {/* Intersection triangle */}
      <polygon
        points="200,80 310,280 90,280"
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />

      {/* Construction lines */}
      {showConstructionLines && (
        <>
          <line x1="200" y1="80" x2="200" y2="280" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="90" y1="280" x2="310" y2="280" stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="0.75" />
          <line x1="200" y1="80" x2="150" y2="200" stroke={strokeColor} strokeOpacity={opacity * 0.4} strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="200" y1="80" x2="250" y2="200" stroke={strokeColor} strokeOpacity={opacity * 0.4} strokeWidth="0.5" strokeDasharray="3 3" />
        </>
      )}

      {/* Vertex labels */}
      {showLabels && (
        <>
          <text x="205" y="75" fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">A</text>
          <text x="315" y="285" fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">B</text>
          <text x="75" y="285" fontFamily="Inter, sans-serif" fontSize="11" fill={strokeColor} fillOpacity={opacity * 2} fontWeight="600">C</text>
          <text x="205" y="205" fontFamily="Inter, sans-serif" fontSize="10" fill={strokeColor} fillOpacity={opacity * 1.5}>O</text>
        </>
      )}

      {/* Construction marks */}
      <circle cx="200" cy="80" r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx="310" cy="280" r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx="90" cy="280" r="3.5" fill="none" stroke={strokeColor} strokeOpacity={opacity * 1.5} strokeWidth="1" />
      <circle cx="200" cy="200" r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />
      <circle cx="150" cy="200" r="2.5" fill={strokeColor} fillOpacity={opacity} />
      <circle cx="250" cy="200" r="2.5" fill={strokeColor} fillOpacity={opacity} />

      {/* Intersection points */}
      <circle cx="200" cy="140" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
      <circle cx="175" cy="240" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
      <circle cx="225" cy="240" r="2" fill={strokeColor} fillOpacity={opacity * 0.8} />
    </svg>
  );
}