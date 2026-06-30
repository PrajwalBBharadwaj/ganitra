import React from 'react';

export interface NumberRibbonProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  numbers?: number[];
  columns?: number;
  showLabels?: boolean;
}

export function NumberRibbon({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  numbers = [2, 5, 8, 13, 21, 34, 55, 89],
  columns = 2,
  showLabels = true,
}: NumberRibbonProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;

  const colWidth = viewBoxSize / (columns + 1);
  const rowHeight = viewBoxSize / (numbers.length + 2);

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
      {/* Numbers arranged in columns */}
      {numbers.map((num, i) => {
        const col = i % columns;
        const row = Math.floor(i / columns);
        const x = colWidth * (col + 1);
        const y = rowHeight * (row + 1.5);

        return (
          <g key={`number-${i}`}>
            <circle cx={x} cy={y} r="3" fill="none" stroke={strokeColor} strokeOpacity={opacity * 0.6} strokeWidth="0.75" />
            {showLabels && (
              <text
                x={x}
                y={y + 4}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.5}
                fontWeight="500"
                textAnchor="middle"
              >
                {num}
              </text>
            )}
          </g>
        );
      })}

      {/* Connecting lines between consecutive numbers */}
      {numbers.slice(0, -1).map((_, i) => {
        const col1 = i % columns;
        const row1 = Math.floor(i / columns);
        const col2 = (i + 1) % columns;
        const row2 = Math.floor((i + 1) / columns);
        
        const x1 = colWidth * (col1 + 1);
        const y1 = rowHeight * (row1 + 1.5);
        const x2 = colWidth * (col2 + 1);
        const y2 = rowHeight * (row2 + 1.5);

        return (
          <line
            key={`line-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeColor}
            strokeOpacity={opacity * 0.3}
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        );
      })}
    </svg>
  );
}