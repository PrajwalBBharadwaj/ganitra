import React from 'react';

export interface MagicSquareProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  size?: number;
  showSum?: boolean;
}

export function MagicSquare({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  size = 3,
  showSum = true,
}: MagicSquareProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate a magic square (3x3)
  const generateMagicSquare = (n: number): number[][] => {
    if (n === 3) {
      return [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
      ];
    }
    // For other sizes, generate a simple pattern
    const square: number[][] = [];
    let counter = 1;
    for (let i = 0; i < n; i++) {
      const row: number[] = [];
      for (let j = 0; j < n; j++) {
        row.push(counter++);
      }
      square.push(row);
    }
    return square;
  };

  const magicSquare = generateMagicSquare(size);
  const cellSize = 50;
  const squareSize = size * cellSize;
  const startX = centerX - squareSize / 2;
  const startY = centerY - squareSize / 2;
  const magicSum = size === 3 ? 15 : magicSquare.flat().reduce((a, b) => a + b, 0) / size;

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
      {/* Grid cells */}
      {magicSquare.map((row, i) =>
        row.map((value, j) => (
          <g key={`cell-${i}-${j}`}>
            <rect
              x={startX + j * cellSize}
              y={startY + i * cellSize}
              width={cellSize - 2}
              height={cellSize - 2}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.6}
              strokeWidth="1"
            />
            <text
              x={startX + j * cellSize + cellSize / 2}
              y={startY + i * cellSize + cellSize / 2 + 5}
              fontFamily="Inter, sans-serif"
              fontSize="16"
              fill={strokeColor}
              fillOpacity={opacity * 1.5}
              fontWeight="600"
              textAnchor="middle"
            >
              {value}
            </text>
          </g>
        ))
      )}

      {/* Magic sum label */}
      {showSum && (
        <text
          x={centerX}
          y={startY + squareSize + 30}
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill={strokeColor}
          fillOpacity={opacity * 1.5}
          fontWeight="500"
          fontStyle="italic"
          textAnchor="middle"
        >
          Magic Sum = {magicSum}
        </text>
      )}

      {/* Label */}
      <text
        x={centerX}
        y={viewBoxSize - 15}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Magic Square
      </text>
    </svg>
  );
}