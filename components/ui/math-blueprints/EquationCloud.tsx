import React from 'react';

export interface EquationCloudProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  equations?: string[];
}

export function EquationCloud({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  equations = [
    'x² + y² = r²',
    'a² + b² = c²',
    '(a + b)²',
    'y = mx + c',
    'f(x)',
    'Σ',
    'π',
    '√',
    '∞',
    '∫',
    'Δ',
    'θ',
  ],
}: EquationCloudProps) {
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
      {/* Scattered equations */}
      {equations.map((eq, i) => {
        // Use golden angle for natural distribution
        const angle = i * 2.39996; // Golden angle in radians
        const radius = 60 + (i * 13) % 100;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <text
            key={`eq-${i}`}
            x={x}
            y={y}
            fontFamily="Inter, sans-serif"
            fontSize={eq.length > 5 ? '10' : '12'}
            fill={strokeColor}
            fillOpacity={opacity * (0.7 + (i % 4) * 0.1)}
            fontWeight="500"
            textAnchor="middle"
            fontStyle="italic"
          >
            {eq}
          </text>
        );
      })}

      {/* Subtle connecting lines */}
      {equations.slice(0, 6).map((_, i) => {
        const angle1 = i * 2.39996;
        const angle2 = (i + 1) * 2.39996;
        const radius1 = 60 + (i * 13) % 100;
        const radius2 = 60 + ((i + 1) * 13) % 100;
        
        const x1 = centerX + radius1 * Math.cos(angle1);
        const y1 = centerY + radius1 * Math.sin(angle1);
        const x2 = centerX + radius2 * Math.cos(angle2);
        const y2 = centerY + radius2 * Math.sin(angle2);

        return (
          <line
            key={`line-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeColor}
            strokeOpacity={opacity * 0.2}
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        );
      })}
    </svg>
  );
}