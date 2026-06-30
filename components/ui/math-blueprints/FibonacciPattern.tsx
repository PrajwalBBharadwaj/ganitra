import React from 'react';

export interface FibonacciPatternProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  iterations?: number;
  showSpiral?: boolean;
  showSequence?: boolean;
}

export function FibonacciPattern({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  iterations = 8,
  showSpiral = true,
  showSequence = true,
}: FibonacciPatternProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate Fibonacci sequence
  const fibonacci: number[] = [1, 1];
  for (let i = 2; i < iterations; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  // Calculate squares
  const squares = fibonacci.map((num, i) => {
    const size = Math.min(num * 8, 120);
    return { num, size, index: i };
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
      {/* Fibonacci squares arranged in spiral pattern */}
      {squares.map((square, i) => {
        const angle = (i * Math.PI) / 2;
        const x = centerX + (square.size / 2) * Math.cos(angle);
        const y = centerY + (square.size / 2) * Math.sin(angle);

        return (
          <rect
            key={`square-${i}`}
            x={x - square.size / 2}
            y={y - square.size / 2}
            width={square.size}
            height={square.size}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * (1 - i * 0.08)}
            strokeWidth="1"
          />
        );
      })}

      {/* Fibonacci spiral */}
      {showSpiral && (
        <path
          d={`M ${centerX} ${centerY}
              Q ${centerX + 40} ${centerY - 20} ${centerX + 60} ${centerY - 40}
              Q ${centerX + 80} ${centerY - 80} ${centerX + 40} ${centerY - 100}
              Q ${centerX} ${centerY - 120} ${centerX - 20} ${centerY - 80}
              Q ${centerX - 40} ${centerY - 40} ${centerX - 20} ${centerY - 20}
              Q ${centerX} ${centerY} ${centerX + 10} ${centerY + 10}`}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 1.3}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      )}

      {/* Sequence numbers */}
      {showSequence && fibonacci.slice(0, 6).map((num, i) => {
        const angle = (i * Math.PI) / 2;
        const size = Math.min(num * 8, 120);
        const x = centerX + (size / 2) * Math.cos(angle);
        const y = centerY + (size / 2) * Math.sin(angle);

        return (
          <text
            key={`num-${i}`}
            x={x}
            y={y + 4}
            fontFamily="Inter, sans-serif"
            fontSize="9"
            fill={strokeColor}
            fillOpacity={opacity * 1.5}
            fontWeight="600"
            textAnchor="middle"
          >
            {num}
          </text>
        );
      })}

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />

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
        Fibonacci Sequence
      </text>
    </svg>
  );
}