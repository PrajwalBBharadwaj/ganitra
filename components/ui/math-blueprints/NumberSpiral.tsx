import React from 'react';

export interface NumberSpiralProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  maxNumber?: number;
  showLabels?: boolean;
  labelColor?: string;
}

export function NumberSpiral({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.3,
  rotation = 0,
  scale = 1,
  className = '',
  maxNumber = 100,
  showLabels = false,
  labelColor = '#06B6D4',
}: NumberSpiralProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate spiral points using Archimedean spiral
  const generateSpiralPoints = () => {
    const points: Array<{ x: number; y: number; num: number }> = [];
    const maxRadius = 160;
    const totalPoints = maxNumber;

    for (let i = 1; i <= totalPoints; i++) {
      const angle = i * 0.5; // Angle increment
      const radius = (i / totalPoints) * maxRadius;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      points.push({ x, y, num: i });
    }

    return points;
  };

  const points = generateSpiralPoints();

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
      {/* Spiral path */}
      <path
        d={points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ')}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity * 0.6}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Number points */}
      {points.map((point, i) => {
        // Show labels for key numbers (perfect squares, multiples of 10, etc.)
        const showLabel = showLabels && (point.num % 10 === 0 || point.num === 1 || Number.isInteger(Math.sqrt(point.num)));

        return (
          <g key={`point-${i}`}>
            <circle
              cx={point.x}
              cy={point.y}
              r={point.num % 10 === 0 ? 2.5 : 1.5}
              fill={strokeColor}
              fillOpacity={point.num % 10 === 0 ? opacity * 1.5 : opacity}
            />
            {showLabel && (
              <text
                x={point.x + 4}
                y={point.y + 3}
                fontFamily="Inter, sans-serif"
                fontSize="9"
                fill={labelColor}
                fillOpacity={opacity * 2}
                fontWeight="500"
              >
                {point.num}
              </text>
            )}
          </g>
        );
      })}

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />

      {/* Spiral label */}
      <text
        x={centerX + 10}
        y={centerY - 10}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
      >
        Ulam spiral
      </text>
    </svg>
  );
}