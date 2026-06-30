/**
 * Demo page showcasing all mathematical blueprint components
 * This file can be used to visually test all components
 */

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
} from './index';

export function MathBlueprintsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-primary">Mathematical Blueprint Graphics Library</h1>
        
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
        </div>

        <div className="mt-12 rounded-lg border-2 border-discovery/30 bg-discovery/5 p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">Usage Example</h2>
          <pre className="overflow-x-auto rounded-lg bg-primary-dark p-4 text-sm text-white">
            <code>{`import { BlueprintCircle } from '@/components/ui/math-blueprints';

<BlueprintCircle
  strokeColor="#7CC8DD"
  opacity={0.25}
  className="absolute inset-0 h-full w-full"
  showSquare={true}
  showDiagonals={true}
  showCompassMarks={true}
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}