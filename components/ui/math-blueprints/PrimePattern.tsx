import React from 'react';

export interface PrimePatternProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  maxPrime?: number;
  showLabels?: boolean;
}

export function PrimePattern({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  maxPrime = 31,
  showLabels = true,
}: PrimePatternProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate prime numbers
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primes: number[] = [];
  for (let i = 2; i <= maxPrime; i++) {
    if (isPrime(i)) primes.push(i);
  }

  // Arrange primes in a circular pattern
  const radius = 140;
  const primeElements = primes.map((prime, i) => {
    const angle = (i * 2 * Math.PI) / primes.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { prime, x, y, angle };
  });

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
      {/* Connecting circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity * 0.4}
        strokeWidth="0.75"
        strokeDasharray="3 3"
      />

      {/* Prime numbers */}
      {primeElements.map(({ prime, x, y }, i) => (
        <g key={`prime-${i}`}>
          <circle
            cx={x}
            cy={y}
            r="4"
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 1.2}
            strokeWidth="1"
          />
          <circle
            cx={x}
            cy={y}
            r="2"
            fill={strokeColor}
            fillOpacity={opacity * 0.8}
          />
          {showLabels && (
            <text
              x={x}
              y={y + 5}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill={strokeColor}
              fillOpacity={opacity * 1.8}
              fontWeight="600"
              textAnchor="middle"
            >
              {prime}
            </text>
          )}
        </g>
      ))}

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />

      {/* Label */}
      <text
        x={centerX}
        y={centerY + radius + 25}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Prime Numbers
      </text>
    </svg>
  );
}