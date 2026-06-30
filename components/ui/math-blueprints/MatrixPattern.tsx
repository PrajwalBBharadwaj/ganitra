import React from 'react';

export interface MatrixPatternProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  matrixSize?: number;
  showBrackets?: boolean;
}

export function MatrixPattern({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.2,
  rotation = 0,
  scale = 1,
  className = '',
  matrixSize = 3,
  showBrackets = true,
}: MatrixPatternProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  // Generate random matrix values
  const generateMatrix = (size: number): number[][] => {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.floor(Math.random() * 10))
    );
  };

  const matrix = generateMatrix(matrixSize);
  const cellSize = 30;
  const matrixWidth = matrixSize * cellSize;
  const matrixHeight = matrixSize * cellSize;
  const startX = centerX - matrixWidth / 2;
  const startY = centerY - matrixHeight / 2;

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
      {/* Matrix brackets */}
      {showBrackets && (
        <>
          {/* Left bracket */}
          <path
            d={`M ${startX - 10} ${startY - 5} L ${startX - 15} ${startY - 5} L ${startX - 15} ${startY + matrixHeight + 5} L ${startX - 10} ${startY + matrixHeight + 5}`}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.8}
            strokeWidth="1.5"
          />
          {/* Right bracket */}
          <path
            d={`M ${startX + matrixWidth + 10} ${startY - 5} L ${startX + matrixWidth + 15} ${startY - 5} L ${startX + matrixWidth + 15} ${startY + matrixHeight + 5} L ${startX + matrixWidth + 10} ${startY + matrixHeight + 5}`}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 0.8}
            strokeWidth="1.5"
          />
        </>
      )}

      {/* Matrix cells */}
      {matrix.map((row, i) =>
        row.map((value, j) => (
          <g key={`cell-${i}-${j}`}>
            <rect
              x={startX + j * cellSize}
              y={startY + i * cellSize}
              width={cellSize - 2}
              height={cellSize - 2}
              fill="none"
              stroke={strokeColor}
              strokeOpacity={opacity * 0.5}
              strokeWidth="0.75"
            />
            <text
              x={startX + j * cellSize + cellSize / 2}
              y={startY + i * cellSize + cellSize / 2 + 4}
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill={strokeColor}
              fillOpacity={opacity * 1.5}
              fontWeight="500"
              textAnchor="middle"
            >
              {value}
            </text>
          </g>
        ))
      )}

      {/* Label */}
      <text
        x={centerX}
        y={startY + matrixHeight + 35}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill={strokeColor}
        fillOpacity={opacity * 1.5}
        fontWeight="500"
        fontStyle="italic"
        textAnchor="middle"
      >
        Matrix
      </text>
    </svg>
  );
}