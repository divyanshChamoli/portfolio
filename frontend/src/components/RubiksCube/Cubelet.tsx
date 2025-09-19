import * as THREE from 'three';

// Define a type for a single color side configuration
type ColorSide = [number, number, string];

const colorSides: ColorSide[] = [
  [0, 1, 'darkorange'], // right
  [0, -1, 'red'],       // left
  [1, 1, 'white'],      // top
  [1, -1, 'yellow'],    // bottom
  [2, 1, 'green'],      // front
  [2, -1, 'blue'],      // back
];

interface CubeletProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
}

export const Cubelet = ({ position, geometry }: CubeletProps) => {
  return (
    <mesh position={position} geometry={geometry}>
      {[...Array(6).keys()].map((i) => {
        const [axisIndex, direction, color] = colorSides[i];
        
        // Determine if this side of the cubelet should be colored
        // The check `Math.round(position[axisIndex])` handles potential floating point inaccuracies
        const isFace = Math.round(position[axisIndex]) === direction;

        return (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            color={isFace ? color : 'black'}
          />
        );
      })}
    </mesh>
  );
};