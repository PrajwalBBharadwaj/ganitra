import React from 'react';

export interface VennDiagramProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  circleCount?: 2 | 3;
  showLabels?: boolean;
}

export function VennDiagram({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  circleCount = 2,
  showLabels = true,
}: VennDiagramProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const radius = 100;

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
      {circleCount === 2 ? (
        <>
          {/* Two-circle Venn diagram */}
          <circle
            cx={centerX - radius / 2}
            cy={centerY}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity}
            strokeWidth="1.5"
          />
          <circle
            cx={centerX + radius / 2}
            cy={centerY}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity}
            strokeWidth="1.5"
          />

          {/* Labels */}
          {showLabels && (
            <>
              <text
                x={centerX - radius / 2 - 20}
                y={centerY - 20}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.8}
                fontWeight="600"
                textAnchor="middle"
              >
                A
              </text>
              <text
                x={centerX + radius / 2 + 20}
                y={centerY - 20}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.8}
                fontWeight="600"
                textAnchor="middle"
              >
                B
              </text>
              <text
                x={centerX}
                y={centerY + 5}
                fontFamily="Inter, sans-serif"
                fontSize="11"
                fill={strokeColor}
                fillOpacity={opacity * 1.5}
                fontWeight="500"
                textAnchor="middle"
                fontStyle="italic"
              >
                A ∩ B
              </text>
            </>
          )}

          {/* Intersection highlight */}
          <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />
        </>
      ) : (
        <>
          {/* Three-circle Venn diagram */}
          <circle
            cx={centerX - radius / 2}
            cy={centerY - radius / 4}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity}
            strokeWidth="1.5"
          />
          <circle
            cx={centerX + radius / 2}
            cy={centerY - radius / 4}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity}
            strokeWidth="1.5"
          />
          <circle
            cx={centerX}
            cy={centerY + radius / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity}
            strokeWidth="1.5"
          />

          {/* Labels */}
          {showLabels && (
            <>
              <text
                x={centerX - radius / 2 - 20}
                y={centerY - radius / 4 - 20}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.8}
                fontWeight="600"
                textAnchor="middle"
              >
                A
              </text>
              <text
                x={centerX + radius / 2 + 20}
                y={centerY - radius / 4 - 20}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.8}
                fontWeight="600"
                textAnchor="middle"
              >
                B
              </text>
              <text
                x={centerX}
                y={centerY + radius / 2 + 30}
                fontFamily="Inter, sans-serif"
                fontSize="12"
                fill={strokeColor}
                fillOpacity={opacity * 1.8}
                fontWeight="600"
                textAnchor="middle"
              >
                C
              </text>
            </>
          )}

          {/* Center intersection point */}
          <circle cx={centerX} cy={centerY} r="3" fill={strokeColor} fillOpacity={opacity * 1.2} />
        </>
      )}

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
        Venn Diagram
      </text>
    </svg>
  );
}