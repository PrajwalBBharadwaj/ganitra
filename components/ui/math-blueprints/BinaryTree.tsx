import React from 'react';

export interface BinaryTreeProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  className?: string;
  depth?: number;
  showLabels?: boolean;
}

export function BinaryTree({
  width = 400,
  height = 400,
  strokeColor = '#06B6D4',
  opacity = 0.25,
  rotation = 0,
  scale = 1,
  className = '',
  depth = 3,
  showLabels = false,
}: BinaryTreeProps) {
  const viewBoxSize = 400;
  const centerX = viewBoxSize / 2;
  const startY = 60;
  const levelHeight = (viewBoxSize - startY - 40) / depth;

  // Generate tree structure
  const generateTree = () => {
    const nodes: Array<{ x: number; y: number; level: number; label: string }> = [];
    const connections: Array<{ from: { x: number; y: number }; to: { x: number; y: number } }> = [];

    const addNode = (x: number, y: number, level: number, label: string) => {
      nodes.push({ x, y, level, label });
      
      if (level < depth) {
        const spread = (viewBoxSize / Math.pow(2, level + 1)) * 0.8;
        const nextY = y + levelHeight;
        
        // Left child
        const leftX = x - spread;
        connections.push({ from: { x, y }, to: { x: leftX, y: nextY } });
        addNode(leftX, nextY, level + 1, label + '0');
        
        // Right child
        const rightX = x + spread;
        connections.push({ from: { x, y }, to: { x: rightX, y: nextY } });
        addNode(rightX, nextY, level + 1, label + '1');
      }
    };

    addNode(centerX, startY, 0, '');
    return { nodes, connections };
  };

  const { nodes, connections } = generateTree();

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
      {/* Connections */}
      {connections.map((conn, i) => (
        <line
          key={`conn-${i}`}
          x1={conn.from.x}
          y1={conn.from.y}
          x2={conn.to.x}
          y2={conn.to.y}
          stroke={strokeColor}
          strokeOpacity={opacity * 0.6}
          strokeWidth="1"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.level === 0 ? 5 : 3.5}
            fill="none"
            stroke={strokeColor}
            strokeOpacity={opacity * 1.2}
            strokeWidth="1.5"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.level === 0 ? 2.5 : 1.5}
            fill={strokeColor}
            fillOpacity={opacity * 0.8}
          />
          {showLabels && node.level > 0 && (
            <text
              x={node.x}
              y={node.y + 15}
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill={strokeColor}
              fillOpacity={opacity * 1.5}
              fontWeight="500"
              textAnchor="middle"
            >
              {node.label}
            </text>
          )}
        </g>
      ))}

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
        Binary Tree
      </text>
    </svg>
  );
}