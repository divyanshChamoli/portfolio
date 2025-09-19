import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Cubelet } from './Cubelet';
import { useScroll } from '@react-three/drei';
import gsap from 'gsap';

// --- Type definitions (no changes here) ---
type FaceName = 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
type Axis = 'x' | 'y' | 'z';

export interface SolutionStep {
  face: FaceName;
  clockwise: boolean;
}

interface CubeProps {
  scrambleSteps: SolutionStep[]; // For setting the initial state
  solutionSteps: SolutionStep[]; // For the scroll animation
}

interface RotationConfig {
  axis: Axis;
  limit: number;
  multiplier: number;
}

const rotationMap: Record<FaceName, RotationConfig> = {
  front: { axis: 'z', limit: 0.5, multiplier: -1 },
  back: { axis: 'z', limit: -0.5, multiplier: 1 },
  right: { axis: 'x', limit: 0.5, multiplier: -1 },
  left: { axis: 'x', limit: -0.5, multiplier: 1 },
  top: { axis: 'y', limit: 0.5, multiplier: -1 },
  bottom: { axis: 'y', limit: -0.5, multiplier: 1 },
};

// --- Utility functions (no changes here) ---
const resetCubeGroup = (cubeGroup: THREE.Group | null, rotationGroup: THREE.Group | null) => {
  if (!cubeGroup || !rotationGroup) return;
  rotationGroup.children.slice().reverse().forEach(c => cubeGroup.attach(c));
  rotationGroup.quaternion.set(0, 0, 0, 1);
};

const attachToRotationGroup = (cubeGroup: THREE.Group | null, rotationGroup: THREE.Group | null, axis: Axis, limit: number) => {
  if (!cubeGroup || !rotationGroup) return;
  const childrenToMove = cubeGroup.children.slice().reverse().filter(c => {
    const pos = c.position as THREE.Vector3;
    return limit < 0 ? pos[axis] < limit : pos[axis] > limit;
  });
  childrenToMove.forEach(c => rotationGroup.attach(c));
};


export const Cube = ({ scrambleSteps, solutionSteps }: CubeProps) => {
  const cubeGroupRef = useRef<THREE.Group>(null);
  const rotationGroupRef = useRef<THREE.Group>(null);
  const timeline = useRef<gsap.core.Timeline>(null);
  const scroll = useScroll();

  const roundedBoxGeometry = useMemo(() => {
    return new RoundedBoxGeometry(1, 1, 1, 3, 0.1);
  }, []);

  useLayoutEffect(() => {
    const cubeGroup = cubeGroupRef.current;
    const rotationGroup = rotationGroupRef.current;
    if (!cubeGroup || !rotationGroup) return;

    // --- 1. SET INITIAL SCRAMBLED STATE (New Logic) ---
    // Apply the scramble steps instantly without animation.
    scrambleSteps.forEach(step => {
      const config = rotationMap[step.face];
      const directionMultiplier = step.clockwise ? 1 : -1;
      const rotationAmount = (Math.PI / 2) * config.multiplier * directionMultiplier;
      
      // Perform the rotation synchronously
      resetCubeGroup(cubeGroup, rotationGroup);
      attachToRotationGroup(cubeGroup, rotationGroup, config.axis, config.limit);
      rotationGroup.rotation[config.axis] = rotationAmount;
      // Update matrices to apply the transform immediately
      rotationGroup.updateMatrixWorld(true); 
      // Reset group which "bakes" the new positions onto the cubelets
      resetCubeGroup(cubeGroup, rotationGroup);
    });


    // --- 2. BUILD THE SOLVING ANIMATION TIMELINE (Existing Logic) ---
    timeline.current = gsap.timeline({ paused: true });

    solutionSteps.forEach(step => {
      const config = rotationMap[step.face];
      const directionMultiplier = step.clockwise ? 1 : -1;
      const rotationAmount = (Math.PI / 2) * config.multiplier * directionMultiplier;

      timeline.current?.call(() => {
        resetCubeGroup(cubeGroup, rotationGroup);
        attachToRotationGroup(cubeGroup, rotationGroup, config.axis, config.limit);
      });

      timeline.current?.to(rotationGroup.rotation, {
        [config.axis]: `+=${rotationAmount}`,
        duration: 1,
        ease: 'none',
      });
    });

    timeline.current?.call(() => {
      resetCubeGroup(cubeGroup, rotationGroup);
    });

    return () => {
      timeline.current?.kill();
    };
  }, [scrambleSteps, solutionSteps]);

  useFrame(() => {
    if (timeline.current) {
      timeline.current.progress(scroll.offset);
    }
  });

  return (
    <>
      <group ref={cubeGroupRef}>
        {[...Array(3).keys()].map((x) =>
          [...Array(3).keys()].map((y) =>
            [...Array(3).keys()].map((z) => (
              <Cubelet
                key={x + y * 3 + z * 9}
                position={[x - 1, y - 1, z - 1]}
                geometry={roundedBoxGeometry}
              />
            )),
          ),
        )}
      </group>
      <group ref={rotationGroupRef} />
    </>
  );
};