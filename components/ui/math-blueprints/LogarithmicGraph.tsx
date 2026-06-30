import React from 'react';

export interface LogarithmicGraphProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showAxes?: boolean;
  base?: number;
}

export function LogarithmicGraph({
  width = 400,
  height = 400,
  strokeColor = '#10B981',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showAxes = true,
  base = 10,
}: LogarithmicGraphProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate logarithmic curve: y = log(x)
  const generateLogarithmic = () => {
    const points: string[] = [];
    const startX = 50;
    const endX = viewBoxSize - 50;
    const steps = 80;

    for (let i = 0; i <= steps; i++) {
      const x = startX + (i / steps) * (endX - startX);
      const normalizedX = (x - centerX) / 50;
      const logValue = Math.log(Math.abs(normalizedX) + 1) / Math.log(base);
      const y = centerY - 40 * logValue;

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

      {/* Logarithmic curve */}
      <path
        d={generateLogarithmic()}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Key points */}
      <circle cx={centerX + 50} cy={centerY - 40} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />
      <circle cx={centerX + 150} cy={centerY - 80} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />
      <circle cx={centerX + 250} cy={centerY - 110} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />

      {/* Label */}
      <text
        x={centerX + 10}
        y={centerY - 50}
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
      >
        y = log{base}(x)
      </text>
    </svg>
  );
}