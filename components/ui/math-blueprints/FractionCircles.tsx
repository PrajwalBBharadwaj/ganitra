import React from 'react';

export interface FractionCirclesProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  showFractions?: boolean;
}

export function FractionCircles({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  showFractions = true,
}: FractionCirclesProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Fraction circles (pie charts showing fractions)
  const fractions = [
    { value: 0.25, label: '1/4', color: '#06B6D4' },
    { value: 0.5, label: '1/2', color: '#7C3AED' },
    { value: 0.75, label: '3/4', color: '#F59E0B' },
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
      {/* Fraction circles */}
      {fractions.map((fraction, i) => {
        const x = centerX + (i - 1) * 120;
        const y = centerY;
        const radius = 50;

        return (
          <g key={`fraction-${i}`}>
            {/* Background circle */}
            <circle
              cx={x}
              cy={y}
              r={radius}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.6}
              strokeWidth="1.5"
            />

            {/* Filled portion */}
            <path
              d={`M ${x} ${y} L ${x} ${y - radius} A ${radius} ${radius} 0 0 1 ${x + radius * Math.sin(fraction.value * 2 * Math.PI)} ${y - radius * Math.cos(fraction.value * 2 * Math.PI)} Z`}
              fill={fraction.color}
              fillOpacity={opacity * 0.4}
              stroke="none"
            />

            {/* Division lines */}
            {Array.from({ length: 4 }).map((_, j) => {
              const angle = (j * Math.PI) / 2;
              return (
                <line
                  key={`line-${j}`}
                  x1={x}
                  y1={y}
                  x2={x + radius * Math.cos(angle)}
                  y2={y + radius * Math.sin(angle)}
                  stroke={strokeColor}
                  strokeOpacity={opacity * 0.5}
                  strokeWidth="0.75"
                />
              );
            })}

            {/* Label */}
            {showFractions && (
              <text
                x={x}
                y={y + radius + 20}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.5}
                fontWeight="600"
                textAnchor="middle"
              >
                {fraction.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Label */}
      <text
        x={centerX}
        y={viewBoxSize - 20}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Fraction Circles
      </text>
    </svg>
  );
}