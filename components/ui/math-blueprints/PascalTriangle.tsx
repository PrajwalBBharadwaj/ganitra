import React from 'react';

export interface PascalTriangleProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  rows?: number;
  showNumbers?: boolean;
}

export function PascalTriangle({
  width = 400,
  height = 400,
  strokeColor = '#7C3AED',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  rows = 8,
  showNumbers = true,
}: PascalTriangleProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const startY = 50;

  // Generate Pascal's triangle
  const generatePascalTriangle = (numRows: number): number[][] => {
    const triangle: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      const row: number[] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
      triangle.push(row);
    }
    return triangle;
  };

  const triangle = generatePascalTriangle(rows);
  const rowHeight = (viewBoxSize - startY - 40) / rows;
  const nodeRadius = 3;

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
      {/* Triangle nodes and connections */}
      {triangle.map((row, i) => {
        const y = startY + i * rowHeight;
        const rowWidth = row.length * 20;
        const startX = centerX - rowWidth / 2;

        return (
          <g key={`row-${i}`}>
            {row.map((value, j) => {
              const x = startX + j * 20 + 10;

              return (
                <g key={`node-${i}-${j}`}>
                  {/* Node */}
                  <circle
                    cx={x}
                    cy={y}
                    r={nodeRadius}
                    fill={strokeColor}
                    fillOpacity={opacity * (0.6 + (value / 20) * 0.4)}
                  />

                  {/* Number label */}
                  {showNumbers && (
                    <text
                      x={x}
                      y={y + 12}
                      fontFamily="Inter, sans-serif"
                      fontSize="9"
                      fill={strokeColor}
                      fillOpacity={opacity * 1.5}
                      fontWeight="500"
                      textAnchor="middle"
                    >
                      {value}
                    </text>
                  )}

                  {/* Connection to parent nodes */}
                  {i > 0 && (
                    <>
                      {j < row.length - 1 && (
                        <line
                          x1={x}
                          y1={y}
                          x2={startX + (j) * 20 + 10 - 10}
                          y2={y - rowHeight}
                          stroke={strokeColor}
                          strokeOpacity={opacity * 0.4}
                          strokeWidth="0.5"
                        />
                      )}
                      {j > 0 && (
                        <line
                          x1={x}
                          y1={y}
                          x2={startX + (j - 1) * 20 + 10 + 10}
                          y2={y - rowHeight}
                          stroke={strokeColor}
                          strokeOpacity={opacity * 0.4}
                          strokeWidth="0.5"
                        />
                      )}
                    </>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}

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
        Pascal's Triangle
      </text>
    </svg>
  );
}