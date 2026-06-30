/**
 * Demo page showcasing all mathematical blueprint components
 * This file can be used to visually test all components
 */

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
} from './index';

export function MathBlueprintsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-primary">Mathematical Blueprint Graphics Library V2</h1>
        <p className="mb-8 text-lg text-text-secondary">35 components representing the full spectrum of mathematics</p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Grid & Axis Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">CoordinateGrid</h2>
            <div className="flex h-64 items-center justify-center">
              <CoordinateGrid strokeColor="#06B6D4" opacity={0.2} gridSize={50} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">CartesianAxes</h2>
            <div className="flex h-64 items-center justify-center">
              <CartesianAxes strokeColor="#06B6D4" opacity={0.3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">DotMatrix</h2>
            <div className="flex h-64 items-center justify-center">
              <DotMatrix dotColor="#7C3AED" opacity={0.2} spacing={30} />
            </div>
          </div>

          {/* Geometric Construction Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">CompassConstruction</h2>
            <div className="flex h-64 items-center justify-center">
              <CompassConstruction strokeColor="#06B6D4" opacity={0.25} arcCount={3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">EuclideanConstruction</h2>
            <div className="flex h-64 items-center justify-center">
              <EuclideanConstruction strokeColor="#7C3AED" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">CircleConstruction</h2>
            <div className="flex h-64 items-center justify-center">
              <CircleConstruction strokeColor="#06B6D4" opacity={0.25} circleCount={3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">TriangleConstruction</h2>
            <div className="flex h-64 items-center justify-center">
              <TriangleConstruction strokeColor="#7C3AED" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">PolygonConstruction (Hexagon)</h2>
            <div className="flex h-64 items-center justify-center">
              <PolygonConstruction sides={6} strokeColor="#7C3AED" opacity={0.25} />
            </div>
          </div>

          {/* Advanced Mathematical Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">GoldenRectangle</h2>
            <div className="flex h-64 items-center justify-center">
              <GoldenRectangle strokeColor="#F59E0B" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">GoldenSpiral</h2>
            <div className="flex h-64 items-center justify-center">
              <GoldenSpiral strokeColor="#F59E0B" opacity={0.3} turns={3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">FunctionGraph</h2>
            <div className="flex h-64 items-center justify-center">
              <FunctionGraph strokeColor="#10B981" opacity={0.35} amplitude={50} frequency={2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">ParabolaGraph</h2>
            <div className="flex h-64 items-center justify-center">
              <ParabolaGraph strokeColor="#10B981" opacity={0.35} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">ExponentialGraph</h2>
            <div className="flex h-64 items-center justify-center">
              <ExponentialGraph strokeColor="#10B981" opacity={0.35} base={2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">LogarithmicGraph</h2>
            <div className="flex h-64 items-center justify-center">
              <LogarithmicGraph strokeColor="#10B981" opacity={0.35} base={10} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">NumberSpiral</h2>
            <div className="flex h-64 items-center justify-center">
              <NumberSpiral strokeColor="#06B6D4" opacity={0.3} maxNumber={50} showLabels={true} />
            </div>
          </div>

          {/* Network & Graph Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">NodeNetwork</h2>
            <div className="flex h-64 items-center justify-center">
              <NodeNetwork strokeColor="#06B6D4" opacity={0.25} nodeCount={10} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">BinaryTree</h2>
            <div className="flex h-64 items-center justify-center">
              <BinaryTree strokeColor="#06B6D4" opacity={0.25} depth={3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">VennDiagram</h2>
            <div className="flex h-64 items-center justify-center">
              <VennDiagram strokeColor="#06B6D4" opacity={0.25} circleCount={2} />
            </div>
          </div>

          {/* Blueprint Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">BlueprintCircle</h2>
            <div className="flex h-64 items-center justify-center">
              <BlueprintCircle strokeColor="#7CC8DD" opacity={0.3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">BlueprintTriangle</h2>
            <div className="flex h-64 items-center justify-center">
              <BlueprintTriangle strokeColor="#7CC8DD" opacity={0.3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">BlueprintMesh</h2>
            <div className="flex h-64 items-center justify-center">
              <BlueprintMesh strokeColor="#7C3AED" opacity={0.25} gridSize={64} />
            </div>
          </div>

          {/* Numbers & Arithmetic Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">NumberRibbon</h2>
            <div className="flex h-64 items-center justify-center">
              <NumberRibbon numbers={[2, 5, 8, 13, 21, 34, 55, 89]} strokeColor="#06B6D4" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">ArithmeticPattern</h2>
            <div className="flex h-64 items-center justify-center">
              <ArithmeticPattern strokeColor="#06B6D4" opacity={0.2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">PrimePattern</h2>
            <div className="flex h-64 items-center justify-center">
              <PrimePattern strokeColor="#7C3AED" opacity={0.25} maxPrime={31} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">FibonacciPattern</h2>
            <div className="flex h-64 items-center justify-center">
              <FibonacciPattern strokeColor="#06B6D4" opacity={0.25} iterations={6} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">MultiplicationGrid</h2>
            <div className="flex h-64 items-center justify-center">
              <MultiplicationGrid strokeColor="#06B6D4" opacity={0.2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">NumberLine</h2>
            <div className="flex h-64 items-center justify-center">
              <NumberLine strokeColor="#06B6D4" opacity={0.3} min={-10} max={10} />
            </div>
          </div>

          {/* Algebra Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">EquationCloud</h2>
            <div className="flex h-64 items-center justify-center">
              <EquationCloud strokeColor="#7C3AED" opacity={0.2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">SymbolField</h2>
            <div className="flex h-64 items-center justify-center">
              <SymbolField strokeColor="#7C3AED" opacity={0.2} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">MatrixPattern</h2>
            <div className="flex h-64 items-center justify-center">
              <MatrixPattern strokeColor="#7C3AED" opacity={0.2} matrixSize={3} />
            </div>
          </div>

          {/* Mathematical Patterns Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">PascalTriangle</h2>
            <div className="flex h-64 items-center justify-center">
              <PascalTriangle strokeColor="#7C3AED" opacity={0.25} rows={6} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">MagicSquare</h2>
            <div className="flex h-64 items-center justify-center">
              <MagicSquare strokeColor="#7C3AED" opacity={0.25} size={3} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">HexagonalPattern</h2>
            <div className="flex h-64 items-center justify-center">
              <HexagonalPattern strokeColor="#7C3AED" opacity={0.2} />
            </div>
          </div>

          {/* Mathematical Objects Components */}
          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">FractionCircles</h2>
            <div className="flex h-64 items-center justify-center">
              <FractionCircles strokeColor="#06B6D4" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">IsometricCubes</h2>
            <div className="flex h-64 items-center justify-center">
              <IsometricCubes strokeColor="#06B6D4" opacity={0.25} cubeCount={5} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">BalanceScale</h2>
            <div className="flex h-64 items-center justify-center">
              <BalanceScale strokeColor="#06B6D4" opacity={0.25} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-6">
            <h2 className="mb-4 text-xl font-semibold text-text">CoordinatePlane</h2>
            <div className="flex h-64 items-center justify-center">
              <CoordinatePlane strokeColor="#06B6D4" opacity={0.3} />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border-2 border-discovery/30 bg-discovery/5 p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">Usage Example</h2>
          <pre className="overflow-x-auto rounded-lg bg-primary-dark p-4 text-sm text-white">
            <code>{`import { 
  CoordinateGrid, 
  BlueprintCircle, 
  EquationCloud 
} from '@/components/ui/math-blueprints';

// Layer multiple graphics for rich backgrounds
<div className="relative">
  <CoordinateGrid className="absolute inset-0" opacity={0.1} />
  <BlueprintCircle className="absolute -right-16 opacity-20" />
  <EquationCloud className="absolute inset-0 opacity-15" />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>`}</code>
          </pre>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-surface p-6">
            <h3 className="mb-2 text-lg font-semibold text-primary">35 Components</h3>
            <p className="text-sm text-text-secondary">Covering all branches of mathematics</p>
          </div>
          <div className="rounded-lg bg-surface p-6">
            <h3 className="mb-2 text-lg font-semibold text-primary">9 Categories</h3>
            <p className="text-sm text-text-secondary">From arithmetic to geometry, algebra to logic</p>
          </div>
          <div className="rounded-lg bg-surface p-6">
            <h3 className="mb-2 text-lg font-semibold text-primary">Fully Reusable</h3>
            <p className="text-sm text-text-secondary">Consistent props across all components</p>
          </div>
        </div>
      </div>
    </div>
  );
}