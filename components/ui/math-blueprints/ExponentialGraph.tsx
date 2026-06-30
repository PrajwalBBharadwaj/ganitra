import React from 'react';

export interface ExponentialGraphProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showAxes?: boolean;
  base?: number;
  showAsymptote?: boolean;
}

export function ExponentialGraph({
  width = 400,
  height = 400,
  strokeColor = '#10B981',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  showAxes = true,
  base = 2,
  showAsymptote = true,
}: ExponentialGraphProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate exponential curve: y = a * b^x
  const generateExponential = () => {
    const points: string[] = [];
    const startX = 40;
    const endX = viewBoxSize - 40;
    const steps = 80;

    for (let i = 0; i <= steps; i++) {
      const x = startX + (i / steps) * (endX - startX);
      const normalizedX = (x - centerX) / 100;
      const y = centerY - 30 * Math.pow(base, normalizedX);

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

      {/* Asymptote line */}
      {showAsymptote && (
        <line
          x1={centerX}
          y1={viewBoxSize - 40}
          x2={viewBoxSize - 40}
          y2={viewBoxSize - 40}
          stroke={strokeColor}
          strokeOpacity={opacity * 0.3}
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      )}

      {/* Exponential curve */}
      <path
        d={generateExponential()}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Key points */}
      <circle cx={centerX} cy={centerY - 30} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />
      <circle cx={centerX + 100} cy={centerY - 60} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />
      <circle cx={centerX - 100} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />

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
        y = {base}^x
      </text>
    </svg>
  );
}