import React from 'react';

export interface GoldenSpiralProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  turns?: number;
  showCenter?: boolean;
  showGoldenRatio?: boolean;
}

export function GoldenSpiral({
  width = 400,
  height = 400,
  strokeColor = '#F59E0B',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  turns = 4,
  showCenter = true,
  showGoldenRatio = true,
}: GoldenSpiralProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const phi = 1.618033988749; // Golden ratio

  // Generate spiral path using golden ratio
  const generateSpiralPath = () => {
    const points: string[] = [];
    const maxRadius = 160;
    const totalPoints = turns * 50;

    for (let i = 0; i <= totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * turns * 2 * Math.PI;
      const radius = maxRadius * Math.pow(phi, -t * 1.5);

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

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
      {/* Golden spiral */}
      <path
        d={generateSpiralPath()}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={opacity}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Center point */}
      {showCenter && (
        <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.5} />
      )}

      {/* Golden ratio squares */}
      {showGoldenRatio &&
        Array.from({ length: turns }).map((_, i) => {
          const size = 160 / Math.pow(phi, i);
          const angle = (i * Math.PI) / 2;
          const x = centerX + (size / 2) * Math.cos(angle);
          const y = centerY + (size / 2) * Math.sin(angle);

          return (
            <rect
              key={`square-${i}`}
              x={x - size / 2}
              y={y - size / 2}
              width={size}
              height={size}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.4}
              strokeWidth="0.75"
              strokeDasharray="2 2"
            />
          );
        })}

      {/* Construction arcs */}
      {Array.from({ length: turns }).map((_, i) => {
        const radius = 160 / Math.pow(phi, i);
        const startAngle = (i * Math.PI) / 2;
        const endAngle = startAngle + Math.PI / 2;

        const x1 = centerX + radius * Math.cos(startAngle);
        const y1 = centerY + radius * Math.sin(startAngle);
        const x2 = centerX + radius * Math.cos(endAngle);
        const y2 = centerY + radius * Math.sin(endAngle);

        return (
          <path
            key={`arc-${i}`}
            d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.5}
            strokeWidth="0.75"
          />
        );
      })}

      {/* Phi label */}
      <text
        x={centerX + 170}
        y={centerY + 4}
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill={strokeColor}
        fillOpacity={opacity * 2}
        fontWeight="600"
      >
        φ = 1.618
      </text>
    </svg>
  );
}