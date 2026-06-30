# Mathematical Blueprint Graphics Library

A reusable SVG component library for Ganitra's mathematical visual identity. These components create educational, geometric graphics that resemble Euclidean geometry notebooks, compass-and-ruler constructions, and engineering blueprints.

## Installation

All components are exported from the index file:

```tsx
import {
  CoordinateGrid,
  CartesianAxes,
  DotMatrix,
  CompassConstruction,
  EuclideanConstruction,
  CircleConstruction,
  TriangleConstruction,
  PolygonConstruction,
  GoldenRectangle,
  GoldenSpiral,
  NodeNetwork,
  FunctionGraph,
  BlueprintCircle,
  BlueprintTriangle,
  BlueprintMesh,
  NumberSpiral,
} from '@/components/ui/math-blueprints';
```

## Component Categories

### Grid & Axis Components

#### CoordinateGrid
A flexible coordinate grid with customizable spacing, axes, and tick marks.

```tsx
<CoordinateGrid
  width={400}
  height={400}
  strokeColor="#06B6D4"
  opacity={0.15}
  gridSize={50}
  showAxes={true}
  showTicks={true}
  className="absolute inset-0"
/>
```

**Props:**
- `width`, `height`: Dimensions (number or string)
- `strokeColor`: Grid line color
- `opacity`: Overall opacity (0-1)
- `rotation`: Rotation in degrees
- `scale`: Scale factor
- `className`: Additional CSS classes
- `gridSize`: Spacing between grid lines
- `showAxes`: Show center axes
- `showTicks`: Show tick marks
- `axisColor`, `gridColor`: Separate colors for axes and grid

#### CartesianAxes
Clean Cartesian coordinate axes with arrows and labels.

```tsx
<CartesianAxes
  strokeColor="#06B6D4"
  opacity={0.3}
  showArrows={true}
  showLabels={true}
/>
```

**Props:**
- `showArrows`: Show arrowheads at axis ends
- `showLabels`: Show x, y, and O labels
- `labelColor`: Color for axis labels

#### DotMatrix
Regular grid of dots for subtle background patterns.

```tsx
<DotMatrix
  dotColor="#7C3AED"
  opacity={0.15}
  dotSize={1.5}
  spacing={40}
/>
```

**Props:**
- `dotSize`: Radius of each dot
- `spacing`: Distance between dots
- `dotColor`: Color of dots

### Geometric Construction Components

#### CompassConstruction
Compass arcs radiating from a center point.

```tsx
<CompassConstruction
  strokeColor="#06B6D4"
  opacity={0.2}
  arcCount={3}
  showArcs={true}
  showCenter={true}
/>
```

**Props:**
- `arcCount`: Number of arcs to draw
- `showArcs`: Toggle arc visibility
- `showCenter`: Show center point

#### EuclideanConstruction
Classic Euclidean geometry construction with intersecting circles and triangle.

```tsx
<EuclideanConstruction
  strokeColor="#7C3AED"
  opacity={0.2}
  showLabels={true}
  showConstructionLines={true}
/>
```

**Props:**
- `showLabels`: Show vertex labels (A, B, C, O)
- `showConstructionLines`: Show dashed construction lines

#### CircleConstruction
Concentric circles with intersection points and tangent lines.

```tsx
<CircleConstruction
  strokeColor="#06B6D4"
  opacity={0.2}
  circleCount={3}
  showIntersections={true}
  showCenter={true}
/>
```

**Props:**
- `circleCount`: Number of concentric circles
- `showIntersections`: Show intersection points
- `showCenter`: Show center point

#### TriangleConstruction
Triangle with altitudes, medians, and circumcircle.

```tsx
<TriangleConstruction
  strokeColor="#7C3AED"
  opacity={0.2}
  showLabels={true}
  showAltitudes={true}
  showMedians={false}
/>
```

**Props:**
- `showLabels`: Show vertex labels (A, B, C)
- `showAltitudes`: Show altitude lines
- `showMedians`: Show median lines

#### PolygonConstruction
Regular polygon with configurable number of sides.

```tsx
<PolygonConstruction
  sides={6} // Hexagon
  strokeColor="#7C3AED"
  opacity={0.2}
  radius={140}
  showLabels={true}
  showDiagonals={false}
/>
```

**Props:**
- `sides`: Number of sides (3+)
- `radius`: Distance from center to vertices
- `showLabels`: Show vertex labels (A, B, C, ...)
- `showDiagonals`: Show diagonals from first vertex

### Advanced Mathematical Components

#### GoldenRectangle
Golden ratio rectangle with spiral and nested squares.

```tsx
<GoldenRectangle
  strokeColor="#F59E0B"
  opacity={0.2}
  showSpiral={true}
  showSquares={true}
  iterations={4}
/>
```

**Props:**
- `showSpiral`: Show golden spiral curve
- `showSquares`: Show nested squares
- `iterations`: Number of nested squares

#### GoldenSpiral
Pure golden spiral with construction arcs.

```tsx
<GoldenSpiral
  strokeColor="#F59E0B"
  opacity={0.25}
  turns={4}
  showCenter={true}
  showGoldenRatio={true}
/>
```

**Props:**
- `turns`: Number of spiral turns
- `showCenter`: Show center point
- `showGoldenRatio`: Show golden ratio squares

#### FunctionGraph
Sine wave function visualization.

```tsx
<FunctionGraph
  strokeColor="#10B981"
  opacity={0.3}
  amplitude={60}
  frequency={2}
  phase={0}
  showGrid={false}
  showAxes={true}
/>
```

**Props:**
- `amplitude`: Wave amplitude
- `frequency`: Number of wave cycles
- `phase`: Phase offset
- `showGrid`: Show background grid
- `showAxes`: Show coordinate axes

#### NumberSpiral
Archimedean spiral with numbered points.

```tsx
<NumberSpiral
  strokeColor="#06B6D4"
  opacity={0.3}
  maxNumber={100}
  showLabels={false}
/>
```

**Props:**
- `maxNumber`: Maximum number to plot
- `showLabels`: Show number labels at key points
- `labelColor`: Color for number labels

### Network & Graph Components

#### NodeNetwork
Network graph with nodes and connections.

```tsx
<NodeNetwork
  strokeColor="#06B6D4"
  opacity={0.2}
  nodeCount={8}
  connectionDistance={150}
  showLabels={false}
/>
```

**Props:**
- `nodeCount`: Number of nodes
- `connectionDistance`: Max distance for connections
- `showLabels`: Show node labels (A, B, C, ...)

### Blueprint Components

Rich, detailed graphics for prominent visual elements.

#### BlueprintCircle
Complex circle construction with squares, diagonals, and compass marks.

```tsx
<BlueprintCircle
  strokeColor="#7CC8DD"
  opacity={0.25}
  showSquare={true}
  showDiagonals={true}
  showCompassMarks={true}
  circleCount={4}
/>
```

**Props:**
- `showSquare`: Show square construction
- `showDiagonals`: Show diagonal lines
- `showCompassMarks`: Show compass point marks
- `circleCount`: Number of concentric circles

#### BlueprintTriangle
Detailed triangle with construction circles, arcs, and marks.

```tsx
<BlueprintTriangle
  strokeColor="#7CC8DD"
  opacity={0.25}
  showArcs={true}
  showDiagonals={true}
  showConstructionMarks={true}
/>
```

**Props:**
- `showArcs`: Show compass arcs
- `showDiagonals`: Show diagonal construction lines
- `showConstructionMarks`: Show vertex and intersection marks

#### BlueprintMesh
Geometric mesh grid with nodes and connections.

```tsx
<BlueprintMesh
  strokeColor="#7C3AED"
  opacity={0.2}
  gridSize={64}
  showNodes={true}
  showConnections={true}
/>
```

**Props:**
- `gridSize`: Spacing between grid points
- `showNodes`: Show node points
- `showConnections`: Show connection lines

## Common Props

All components accept these standard props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number \| string` | `400` | SVG width |
| `height` | `number \| string` | `400` | SVG height |
| `strokeColor` | `string` | varies | Primary stroke color |
| `opacity` | `number` | `0.2` | Overall opacity (0-1) |
| `rotation` | `number` | `0` | Rotation in degrees |
| `scale` | `number` | `1` | Scale factor |
| `className` | `string` | `''` | Additional CSS classes |

## Usage Examples

### Background Pattern
```tsx
<div className="relative">
  <CoordinateGrid
    className="absolute inset-0 h-full w-full"
    opacity={0.1}
    gridSize={40}
  />
  <div className="relative z-10">
    {/* Content here */}
  </div>
</div>
```

### Section Accent
```tsx
<section className="relative overflow-hidden py-16">
  <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-[0.24] lg:block lg:h-[600px]">
    <BlueprintCircle className="h-full w-auto" />
  </div>
  {/* Section content */}
</section>
```

### Card Background
```tsx
<Card>
  <DotMatrix
    className="absolute inset-0 h-full w-full"
    dotColor="#7C3AED"
    opacity={0.1}
    spacing={30}
  />
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

### Hero Visual
```tsx
<div className="hidden lg:block lg:w-3/5">
  <HeroIllustration className="h-full w-full" />
</div>
```

## Design Principles

1. **Educational, not decorative**: Every graphic should communicate mathematics
2. **Blueprint aesthetic**: Resemble compass-and-ruler constructions
3. **Low opacity**: Typically 3-20% opacity for backgrounds
4. **Clean vector lines**: Consistent stroke widths and geometric precision
5. **Reusable props**: Same component works in multiple contexts
6. **No raster images**: All graphics are inline SVG

## Color Usage

Follow the Ganitra design system:

- **Discovery (Cyan)**: `#06B6D4` - Visual learning, grids, axes
- **Insight (Violet)**: `#7C3AED` - Understanding, networks, meshes
- **Application (Amber)**: `#F59E0B` - Golden ratio, spirals
- **Success (Emerald)**: `#10B981` - Function graphs, curves

## Performance

- All components use optimized SVG paths
- Minimal DOM elements through efficient React rendering
- No external dependencies
- Tree-shakeable exports

## Accessibility

- All decorative graphics should have `aria-hidden="true"`
- Meaningful graphics should include descriptive `title` and `desc` elements
- Respect `prefers-reduced-motion` for any animations
- Ensure sufficient color contrast when opacity > 20%

## Migration from MathGraphics.tsx

The old `MathGraphics.tsx` components are being replaced by this library. Update imports:

```tsx
// Old
import { BlueprintCircle, BlueprintTriangle } from '@/components/ui/MathGraphics';

// New
import { BlueprintCircle, BlueprintTriangle } from '@/components/ui/math-blueprints';
```

## Contributing

When adding new components:

1. Follow the standard prop interface
2. Use 400x400 viewBox for consistency
3. Include TypeScript interfaces
4. Export from index.ts
5. Document in this README
6. Follow the blueprint aesthetic
7. Make it educational, not decorative