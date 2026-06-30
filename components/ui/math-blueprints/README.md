# Mathematical Blueprint Graphics Library V2

A comprehensive reusable SVG component library for Ganitra's mathematical visual identity. This library represents the entire mathematical ecosystem—from arithmetic to algebra, geometry to logic, patterns to functions.

## Installation

All components are exported from the index file:

```tsx
import {
  // Grid & Axis
  CoordinateGrid,
  CartesianAxes,
  DotMatrix,
  
  // Geometric Construction
  CompassConstruction,
  EuclideanConstruction,
  CircleConstruction,
  TriangleConstruction,
  PolygonConstruction,
  
  // Advanced Mathematics
  GoldenRectangle,
  GoldenSpiral,
  FunctionGraph,
  NumberSpiral,
  ParabolaGraph,
  ExponentialGraph,
  LogarithmicGraph,
  
  // Networks & Logic
  NodeNetwork,
  BinaryTree,
  VennDiagram,
  
  // Blueprint Components
  BlueprintCircle,
  BlueprintTriangle,
  BlueprintMesh,
  
  // Numbers & Arithmetic
  NumberRibbon,
  ArithmeticPattern,
  PrimePattern,
  FibonacciPattern,
  MultiplicationGrid,
  NumberLine,
  
  // Algebra
  EquationCloud,
  SymbolField,
  MatrixPattern,
  
  // Mathematical Patterns
  PascalTriangle,
  MagicSquare,
  HexagonalPattern,
  
  // Mathematical Objects
  FractionCircles,
  IsometricCubes,
  BalanceScale,
  CoordinatePlane,
} from '@/components/ui/math-blueprints';
```

## Component Categories

### Grid & Axis Components

#### CoordinateGrid
Flexible coordinate grid with customizable spacing, axes, and tick marks.

```tsx
<CoordinateGrid
  width={400}
  height={400}
  strokeColor="#06B6D4"
  opacity={0.15}
  gridSize={50}
  showAxes={true}
  showTicks={true}
/>
```

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

#### EuclideanConstruction
Classic Euclidean geometry with intersecting circles and triangle.

```tsx
<EuclideanConstruction
  strokeColor="#7C3AED"
  opacity={0.2}
  showLabels={true}
  showConstructionLines={true}
/>
```

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

#### ParabolaGraph
Parabolic curve y = ax².

```tsx
<ParabolaGraph
  strokeColor="#10B981"
  opacity={0.3}
  showAxes={true}
  showVertex={true}
  a={0.01}
/>
```

#### ExponentialGraph
Exponential curve y = b^x.

```tsx
<ExponentialGraph
  strokeColor="#10B981"
  opacity={0.3}
  base={2}
  showAxes={true}
  showAsymptote={true}
/>
```

#### LogarithmicGraph
Logarithmic curve y = log_b(x).

```tsx
<LogarithmicGraph
  strokeColor="#10B981"
  opacity={0.3}
  base={10}
  showAxes={true}
/>
```

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

#### BinaryTree
Binary tree structure for computer science concepts.

```tsx
<BinaryTree
  strokeColor="#06B6D4"
  opacity={0.25}
  depth={3}
  showLabels={false}
/>
```

#### VennDiagram
Set theory visualization (2 or 3 circles).

```tsx
<VennDiagram
  strokeColor="#06B6D4"
  opacity={0.25}
  circleCount={2} // or 3
  showLabels={true}
/>
```

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

### Numbers & Arithmetic Components

#### NumberRibbon
Columns of beautiful numbers (e.g., Fibonacci sequence).

```tsx
<NumberRibbon
  numbers={[2, 5, 8, 13, 21, 34, 55, 89]}
  strokeColor="#06B6D4"
  opacity={0.25}
  columns={2}
  showLabels={true}
/>
```

#### ArithmeticPattern
Scattered arithmetic expressions.

```tsx
<ArithmeticPattern
  expressions={[
    '8 × 7 = 56',
    '15 + 18 = 33',
    '64 ÷ 8 = 8',
    '9² = 81'
  ]}
  strokeColor="#06B6D4"
  opacity={0.2}
/>
```

#### PrimePattern
Prime numbers arranged artistically in a circle.

```tsx
<PrimePattern
  strokeColor="#7C3AED"
  opacity={0.25}
  maxPrime={31}
  showLabels={true}
/>
```

#### FibonacciPattern
Fibonacci sequence with spiral visualization.

```tsx
<FibonacciPattern
  strokeColor="#06B6D4"
  opacity={0.25}
  iterations={8}
  showSpiral={true}
  showSequence={true}
/>
```

#### MultiplicationGrid
Scattered multiplication facts.

```tsx
<MultiplicationGrid
  strokeColor="#06B6D4"
  opacity={0.2}
  showProducts={true}
/>
```

#### NumberLine
Number line with ticks and labels.

```tsx
<NumberLine
  strokeColor="#06B6D4"
  opacity={0.3}
  min={-10}
  max={10}
  showLabels={true}
  showTicks={true}
/>
```

### Algebra Components

#### EquationCloud
Scattered mathematical equations and symbols.

```tsx
<EquationCloud
  equations={[
    'x² + y² = r²',
    'a² + b² = c²',
    'y = mx + c',
    'f(x)',
    'Σ', 'π', '√', '∞', '∫'
  ]}
  strokeColor="#7C3AED"
  opacity={0.2}
/>
```

#### SymbolField
Floating mathematical symbols with connecting network.

```tsx
<SymbolField
  symbols={['π', 'Σ', '∫', '√', '≈', '≤', '≥', '∞', 'Δ', 'α', 'β', 'θ']}
  strokeColor="#7C3AED"
  opacity={0.2}
/>
```

#### MatrixPattern
Small matrix with brackets and values.

```tsx
<MatrixPattern
  strokeColor="#7C3AED"
  opacity={0.2}
  matrixSize={3}
  showBrackets={true}
/>
```

### Mathematical Patterns Components

#### PascalTriangle
Pascal's triangle with binomial coefficients.

```tsx
<PascalTriangle
  strokeColor="#7C3AED"
  opacity={0.25}
  rows={8}
  showNumbers={true}
/>
```

#### MagicSquare
Magic square grid (3x3 classic).

```tsx
<MagicSquare
  strokeColor="#7C3AED"
  opacity={0.25}
  size={3}
  showSum={true}
/>
```

#### HexagonalPattern
Hexagonal grid pattern.

```tsx
<HexagonalPattern
  strokeColor="#7C3AED"
  opacity={0.2}
  showDots={true}
  showConnections={true}
/>
```

### Mathematical Objects Components

#### FractionCircles
Pie chart circles showing fractions.

```tsx
<FractionCircles
  strokeColor="#06B6D4"
  opacity={0.25}
  showFractions={true}
/>
```

#### IsometricCubes
Isometric cube projections.

```tsx
<IsometricCubes
  strokeColor="#06B6D4"
  opacity={0.25}
  cubeCount={5}
/>
```

#### BalanceScale
Balance scale for equation visualization.

```tsx
<BalanceScale
  strokeColor="#06B6D4"
  opacity={0.25}
  showEquation={true}
/>
```

#### CoordinatePlane
Full coordinate plane with grid and sample points.

```tsx
<CoordinatePlane
  strokeColor="#06B6D4"
  opacity={0.3}
  showGrid={true}
  showAxes={true}
  showPoints={true}
/>
```

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

### Layered Background (Hero Section)
```tsx
<div className="relative">
  <CoordinateGrid className="absolute inset-0" opacity={0.1} />
  <BlueprintCircle className="absolute -right-16 opacity-20" />
  <EquationCloud className="absolute inset-0 opacity-15" />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</div>
```

### Section Accent
```tsx
<section className="relative overflow-hidden py-16">
  <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 opacity-[0.24] lg:block">
    <FibonacciPattern strokeColor="#06B6D4" className="h-[600px] w-auto" />
  </div>
  {/* Section content */}
</section>
```

### Card Background Pattern
```tsx
<Card>
  <DotMatrix className="absolute inset-0" dotColor="#7C3AED" opacity={0.1} spacing={30} />
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

## Design Principles

1. **Educational, not decorative**: Every graphic should communicate mathematics
2. **Blueprint aesthetic**: Resemble compass-and-ruler constructions
3. **Low opacity**: Typically 3-20% opacity for backgrounds
4. **Clean vector lines**: Consistent stroke widths and geometric precision
5. **Reusable props**: Same component works in multiple contexts
6. **No raster images**: All graphics are inline SVG
7. **Comprehensive coverage**: Represents all branches of mathematics

## Color Usage

Follow the Ganitra design system:

- **Discovery (Cyan)**: `#06B6D4` - Visual learning, grids, axes, numbers
- **Insight (Violet)**: `#7C3AED` - Understanding, algebra, patterns
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
8. Represent a specific branch of mathematics

## Component Count

**Total: 35 components**

- Grid & Axis: 3 components
- Geometric Construction: 5 components
- Advanced Mathematics: 7 components
- Network & Graph: 3 components
- Blueprint: 3 components
- Numbers & Arithmetic: 6 components
- Algebra: 3 components
- Mathematical Patterns: 3 components
- Mathematical Objects: 4 components

This library now represents the full spectrum of mathematics, making Ganitra's visual identity truly comprehensive and distinctive.