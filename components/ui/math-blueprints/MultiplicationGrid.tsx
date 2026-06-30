import React from 'react';

export interface MultiplicationGridProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  maxNumber?: number;
  showProducts?: boolean;
}

export function MultiplicationGrid({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  maxNumber = 12,
  showProducts = true,
}: MultiplicationGridProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Select a few multiplication facts to display
  const facts = [
    { a: 6, b: 7, product: 42 },
    { a: 8, b: 9, product: 72 },
    { a: 12, b: 4, product: 48 },
    { a: 7, b: 8, product: 56 },
    { a: 9, b: 6, product: 54 },
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
      {/* Multiplication facts scattered */}
      {facts.map((fact, i) => {
        const angle = (i * 2 * Math.PI) / facts.length;
        const radius = 100;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <g key={`fact-${i}`}>
            <circle
              cx={x}
              cy={y}
              r="30"
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.4}
              strokeWidth="0.75"
              strokeDasharray="2 2"
            />
            <text
              x={x}
              y={y - 5}
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill={strokeColor}
              fillOpacity={opacity * 1.3}
              fontWeight="500"
              textAnchor="middle"
            >
              {fact.a} × {fact.b}
            </text>
            {showProducts && (
              <text
                x={x}
                y={y + 10}
                fontFamily="Inter, sans-serif"
                fontSize="13"
                fill={strokeColor}
                fillOpacity={opacity * 1.6}
                fontWeight="600"
                textAnchor="middle"
              >
                = {fact.product}
              </text>
            )}
          </g>
        );
      })}

      {/* Label */}
      <text
        x={centerX}
        y={centerY + 160}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Multiplication Table
      </text>
    </svg>
  );
}