import React from 'react';

export interface FunctionGraphProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showGrid?: boolean;
  showAxes?: boolean;
  amplitude?: number;
  frequency?: number;
  phase?: number;
}

export function FunctionGraph({
  width = 400,
  height = 400,
  strokeColor = '#10B981',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showGrid = false,
  showAxes = true,
  amplitude = 60,
  frequency = 2,
  phase = 0,
}: FunctionGraphProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate sine wave path
  const generateWavePath = () => {
    const points: string[] = [];
    const startX = 40;
    const endX = viewBoxSize - 40;
    const steps = 100;

    for (let i = 0; i <= steps; i++) {
      const x = startX + (i / steps) * (endX - startX);
      const normalizedX = (i / steps) * frequency * 2 * Math.PI + phase;
      const y = centerY - amplitude * Math.sin(normalizedX);

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
      {/* Grid */}
      {showGrid &&
        Array.from({ length: 9 }).map((_, i) => (
          <g key={`grid-${i}`}>
            <line x1={50 * (i + 1)} y1="0" x2={50 * (i + 1)} y2={viewBoxSize} stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" />
            <line x1="0" y1={50 * (i + 1)} x2={viewBoxSize} y2={50 * (i + 1)} stroke={strokeColor} strokeOpacity={opacity * 0.3} strokeWidth="0.5" />
          </g>
        ))}

      {/* Axes */}
      {showAxes && (
        <>
          <line x1="0" y1={centerY} x2={viewBoxSize} y2={centerY} stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
          <line x1={centerX} y1="0" x2={centerX} y2={viewBoxSize} stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="1" />
        </>
      )}

      {/* Function curve */}
      <path
        d={generateWavePath()}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Key points on curve */}
      {Array.from({ length: frequency * 2 }).map((_, i) => {
        const x = 40 + (i / (frequency * 2)) * (viewBoxSize - 80);
        const normalizedX = (i / (frequency * 2)) * frequency * 2 * Math.PI + phase;
        const y = centerY - amplitude * Math.sin(normalizedX);

        return (
          <circle
            key={`point-${i}`}
            cx={x}
            cy={y}
            r="2.5"
            fill={strokeColor}
            fillOpacity={opacity * 1.5}
          />
        );
      })}

      {/* Function label */}
      <text
        x={centerX + 10}
        y={centerY - amplitude - 10}
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
      >
        f(x) = sin(x)
      </text>
    </svg>
  );
}