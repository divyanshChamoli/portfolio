import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Cube } from './Cube'
import { OrbitControls, Environment, Stats } from '@react-three/drei'

export const RubiksCube = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Stats/>
      <Suspense>
        <Environment preset="forest" />
      </Suspense>
      <Cube />
      <OrbitControls target={[0, 0, 0]} />
      <Stats />
    </Canvas>
  )
}
