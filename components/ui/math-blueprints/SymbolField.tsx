import React from 'react';

export interface SymbolFieldProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  symbols?: string[];
}

export function SymbolField({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  symbols = ['π', 'Σ', '∫', '√', '≈', '≤', '≥', '∞', 'Δ', 'α', 'β', 'θ', 'λ', 'μ', 'σ'],
}: SymbolFieldProps) {
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
      {/* Floating mathematical symbols */}
      {symbols.map((symbol, i) => {
        // Distribute symbols in a scattered pattern
        const angle = (i * 2.39996); // Golden angle
        const radius = 80 + (i * 17) % 120;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <g key={`symbol-${i}`}>
            <circle
              cx={x}
              cy={y}
              r="12"
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.3}
              strokeWidth="0.5"
            />
            <text
              x={x}
              y={y + 5}
              fontFamily="Inter, sans-serif"
              fontSize="16"
              fill={strokeColor}
              fillOpacity={opacity * 1.3}
              fontWeight="500"
              textAnchor="middle"
            >
              {symbol}
            </text>
          </g>
        );
      })}

      {/* Subtle connecting network */}
      {symbols.slice(0, 8).map((_, i) => {
        const angle1 = i * 2.39996;
        const angle2 = ((i + 1) % symbols.length) * 2.39996;
        const radius1 = 80 + (i * 17) % 120;
        const radius2 = 80 + (((i + 1) % symbols.length) * 17) % 120;
        
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
            strokeOpacity={opacity * 0.15}
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        );
      })}
    </svg>
  );
}