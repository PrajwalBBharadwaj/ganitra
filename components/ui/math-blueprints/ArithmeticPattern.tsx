import React from 'react';

export interface ArithmeticPatternProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  expressions?: string[];
}

export function ArithmeticPattern({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  expressions = [
    '8 × 7 = 56',
    '15 + 18 = 33',
    '64 ÷ 8 = 8',
    '9² = 81',
    '12 - 5 = 7',
    '3 × 12 = 36',
  ],
}: ArithmeticPatternProps) {
  const viewBoxSize = 400;

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
      {/* Scattered arithmetic expressions */}
      {expressions.map((expr, i) => {
        const angle = (i * 2 * Math.PI) / expressions.length;
        const radius = 100 + (i % 2) * 60;
        const x = viewBoxSize / 2 + radius * Math.cos(angle);
        const y = viewBoxSize / 2 + radius * Math.sin(angle);

        return (
          <text
            key={`expr-${i}`}
            x={x}
            y={y}
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fill={strokeColor}
            fillOpacity={opacity * (0.8 + (i % 3) * 0.2)}
            fontWeight="500"
            textAnchor="middle"
            fontStyle="italic"
          >
            {expr}
          </text>
        );
      })}

      {/* Subtle decorative circles around expressions */}
      {expressions.map((_, i) => {
        const angle = (i * 2 * Math.PI) / expressions.length;
        const radius = 100 + (i % 2) * 60;
        const x = viewBoxSize / 2 + radius * Math.cos(angle);
        const y = viewBoxSize / 2 + radius * Math.sin(angle);

        return (
          <circle
            key={`circle-${i}`}
            cx={x}
            cy={y}
            r="25"
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.3}
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        );
      })}
    </svg>
  );
}