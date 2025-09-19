import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Cube,type SolutionStep } from './Cube';
import { OrbitControls, Environment, Stats, ScrollControls } from '@react-three/drei';

export const RubiksCube = () => {
  // This array defines the sequence of moves to SOLVE the cube.
  // This will be used for the scroll animation.
  const solutionSteps: SolutionStep[] = [
    { face: 'right', clockwise: false },
    { face: 'front', clockwise: true },
    { face: 'bottom', clockwise: true },
    { face: 'left', clockwise: false },
    { face: 'back', clockwise: true },
    { face: 'top', clockwise: false },
    { face: 'right', clockwise: true },
    { face: 'front', clockwise: false },
  ];

  // This is the REVERSE of the solution. We will use this to
  // instantly set the initial SCRAMBLED state of the cube.
  const scrambleSteps: SolutionStep[] = solutionSteps
    .slice()
    .reverse()
    .map(step => ({
      ...step,
      clockwise: !step.clockwise,
    }));

  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Stats/>
      <Suspense>
        <Environment preset="forest" />
      </Suspense>
      <ScrollControls pages={solutionSteps.length} damping={0.50}>
        {/* Pass BOTH the scramble steps (for initial state) and solution steps (for animation) */}
        <Cube 
          scrambleSteps={scrambleSteps} 
          solutionSteps={solutionSteps} 
        />
      </ScrollControls>
      <OrbitControls target={[0, 0, 0]} enableZoom={false} />
    </Canvas>
  );
};