import React from 'react';

export interface ParabolaGraphProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showAxes?: boolean;
  showVertex?: boolean;
  a?: number;
}

export function ParabolaGraph({
  width = 400,
  height = 400,
  strokeColor = '#10B981',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showAxes = true,
  showVertex = true,
  a = 0.01,
}: ParabolaGraphProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate parabola path: y = ax²
  const generateParabola = () => {
    const points: string[] = [];
    const startX = 40;
    const endX = viewBoxSize - 40;
    const steps = 80;

    for (let i = 0; i <= steps; i++) {
      const x = startX + (i / steps) * (endX - startX);
      const normalizedX = x - centerX;
      const y = centerY + a * normalizedX * normalizedX;

      if (i === 0) {
        points.push(`M ${x} ${y}`);
      } else {
        points.push(`L ${x} ${y}`);
      }
    }

    return points.join(' ');
  };

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
      {/* Axes */}
      {showAxes && (
        <>
          <line x1="0" y1={centerY} x2={viewBoxSize} y2={centerY} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="1" />
          <line x1={centerX} y1="0" x2={centerX} y2={viewBoxSize} stroke={strokeColor} strokeOpacity={opacity * 0.5} strokeWidth="1" />
        </>
      )}

      {/* Parabola curve */}
      <path
        d={generateParabola()}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vertex point */}
      {showVertex && (
        <circle cx={centerX} cy={centerY} r="4" fill={strokeColor} fillOpacity={opacity * 1.5} />
      )}

      {/* Label */}
      <text
        x={centerX + 10}
        y={centerY - 20}
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
      >
        y = ax²
      </text>
    </svg>
  );
}