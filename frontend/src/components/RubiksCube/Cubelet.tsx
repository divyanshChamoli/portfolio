import type { BufferGeometry } from 'three'

interface colorSide {
  0: number
  1: number
  2: string
}

const colorSides: colorSide[] = [
  [0, 1, 'darkorange'],
  [0, -1, 'red'],
  [1, 1, 'white'],
  [1, -1, 'yellow'],
  [2, 1, 'green'],
  [2, -1, 'blue'],
]

interface CubeletProps {
  position: [number, number, number]
  geometry: BufferGeometry
}

export const Cubelet = ({ position, geometry }: CubeletProps) => {
  return (
    <>
      <mesh position={position} geometry={geometry}>
        {[...Array(6).keys()].map((i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            color={
              position[colorSides[i][0]] === colorSides[i][1]
                ? colorSides[i][2]
                : `black`
            }
          />
        ))}
      </mesh>
    </>
  )
}
