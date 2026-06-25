/**
 * Reusable mathematical SVG graphics system.
 * All SVGs are decorative, low-opacity, and feel like geometry notebook sketches.
 */

/* Coordinate grid */
export function CoordinateGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <line
            x1={50 * (i + 1)}
            y1="0"
            x2={50 * (i + 1)}
            y2="400"
            stroke="#06B6D4"
            strokeOpacity="0.12"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1={50 * (i + 1)}
            x2="400"
            y2={50 * (i + 1)}
            stroke="#06B6D4"
            strokeOpacity="0.12"
            strokeWidth="0.5"
          />
        </g>
      ))}
      {/* Axes */}
      <line x1="200" y1="0" x2="200" y2="400" stroke="#06B6D4" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="0" y1="200" x2="400" y2="200" stroke="#06B6D4" strokeOpacity="0.25" strokeWidth="1" />
      {/* Tick marks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`tick-${i}`}>
          <line x1={50 * (i + 1)} y1="196" x2={50 * (i + 1)} y2="204" stroke="#06B6D4" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="196" y1={50 * (i + 1)} x2="204" y2={50 * (i + 1)} stroke="#06B6D4" strokeOpacity="0.3" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

/* Dot matrix */
export function DotMatrix({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 * (col + 1)}
            cy={40 * (row + 1)}
            r="1.5"
            fill="#7C3AED"
            fillOpacity="0.15"
          />
        ))
      )}
    </svg>
  );
}

/* Intersecting circles */
export function IntersectingCircles({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="160" cy="200" r="100" fill="none" stroke="#06B6D4" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="240" cy="200" r="100" fill="none" stroke="#7C3AED" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="200" cy="140" r="100" fill="none" stroke="#F59E0B" strokeOpacity="0.15" strokeWidth="1" />
      {/* Intersection dots */}
      <circle cx="200" cy="200" r="3" fill="#06B6D4" fillOpacity="0.4" />
      <circle cx="160" cy="200" r="2.5" fill="#7C3AED" fillOpacity="0.35" />
      <circle cx="240" cy="200" r="2.5" fill="#F59E0B" fillOpacity="0.35" />
    </svg>
  );
}

/* Triangle construction */
export function TriangleConstruction({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main triangle */}
      <polygon
        points="200,60 340,320 60,320"
        fill="none"
        stroke="#7C3AED"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      {/* Altitude */}
      <line x1="200" y1="60" x2="200" y2="320" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="4 4" />
      {/* Base construction lines */}
      <line x1="60" y1="320" x2="340" y2="320" stroke="#06B6D4" strokeOpacity="0.12" strokeWidth="0.5" />
      {/* Vertex dots */}
      <circle cx="200" cy="60" r="3" fill="#F59E0B" fillOpacity="0.5" />
      <circle cx="340" cy="320" r="3" fill="#F59E0B" fillOpacity="0.5" />
      <circle cx="60" cy="320" r="3" fill="#F59E0B" fillOpacity="0.5" />
      <circle cx="200" cy="320" r="2.5" fill="#06B6D4" fillOpacity="0.4" />
    </svg>
  );
}

/* Geometric mesh */
export function GeometricMesh({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => {
          const x = 40 + col * 64;
          const y = 40 + row * 64;
          return (
            <g key={`node-${row}-${col}`}>
              <circle cx={x} cy={y} r="2" fill="#7C3AED" fillOpacity="0.2" />
              {col < 5 && (
                <line x1={x} y1={y} x2={x + 64} y2={y} stroke="#7C3AED" strokeOpacity="0.1" strokeWidth="0.5" />
              )}
              {row < 5 && (
                <line x1={x} y1={y} x2={x} y2={y + 64} stroke="#7C3AED" strokeOpacity="0.1" strokeWidth="0.5" />
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}

/* Concentric circles */
export function ConcentricCircles({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[160, 120, 80, 40].map((r, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="#06B6D4"
          strokeOpacity={0.08 + i * 0.03}
          strokeWidth="0.75"
        />
      ))}
      <circle cx="200" cy="200" r="4" fill="#06B6D4" fillOpacity="0.3" />
    </svg>
  );
}

/* Hexagon watermark */
export function HexagonWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="200,40 340,120 340,280 200,360 60,280 60,120"
        fill="none"
        stroke="#7C3AED"
        strokeOpacity="0.06"
        strokeWidth="1"
      />
      <polygon
        points="200,100 280,150 280,250 200,300 120,250 120,150"
        fill="none"
        stroke="#06B6D4"
        strokeOpacity="0.05"
        strokeWidth="0.75"
      />
    </svg>
  );
}

/* Compass / ruler icon for Apply card */
export function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="2" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 6 L28 12 L24 10 L20 12 Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

/* Eye icon for See card */
export function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="16" ry="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <line x1="8" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="32" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

/* Node graph icon for Understand card */
export function NodeGraphIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="18" x2="14" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="24" y1="18" x2="34" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="14" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="24" cy="14" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="14" cy="34" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="34" cy="34" r="1.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}