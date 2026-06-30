import React from 'react';

export interface IsometricCubesProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  cubeCount?: number;
}

export function IsometricCubes({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  cubeCount = 5,
}: IsometricCubesProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate isometric cube positions
  const cubes = Array.from({ length: cubeCount }, (_, i) => {
    const angle = (i * 2 * Math.PI) / cubeCount;
    const radius = 80 + (i % 2) * 40;
    return {
      x: centerX + radius * Math.cos(angle) * 0.7,
      y: centerY + radius * Math.sin(angle) * 0.5,
      size: 25 + (i % 3) * 10,
    };
  });

  // Draw isometric cube
  const drawCube = (x: number, y: number, size: number) => {
    const h = size * Math.sqrt(3) / 2;
    
    return (
      <g key={`cube-${x}-${y}`}>
        {/* Top face */}
        <polygon
          points={`${x},${y - h} ${x + size},${y - h / 2} ${x},${y} ${x - size},${y - h / 2}`}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 0.8}
          strokeWidth="1"
        />
        {/* Left face */}
        <polygon
          points={`${x - size},${y - h / 2} ${x},${y} ${x},${y + h} ${x - size},${y + h / 2}`}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 0.6}
          strokeWidth="1"
        />
        {/* Right face */}
        <polygon
          points={`${x + size},${y - h / 2} ${x},${y} ${x},${y + h} ${x + size},${y + h / 2}`}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={opacity * 0.4}
          strokeWidth="1"
        />
      </g>
    );
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
      {/* Isometric cubes */}
      {cubes.map((cube, i) => drawCube(cube.x, cube.y, cube.size))}

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
        Isometric Cubes
      </text>
    </svg>
  );
}