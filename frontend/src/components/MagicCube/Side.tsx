import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF, MeshPortalMaterial, Environment } from '@react-three/drei'
import { useControls } from 'leva'
import type { GLTFResult } from '@/Aobox-transformed'
// Make sure this path is correct

interface SideProps {
  rotation?: [number, number, number]
  bg?: string
  children: React.ReactNode
  index: number
}

export const Side = React.memo(({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }: SideProps) => {
  const mesh = useRef<THREE.Mesh>(null)

  const {
    worldUnits,
    blur,
    resolution: resolutionArray,
  } = useControls({
    worldUnits: false,
    blur: { value: 0, min: 0, max: 1 },
    resolution: [1080, 1080],
  })

  // Apply the same 'as unknown as' fix here as well
  const { nodes } = useGLTF('/aobox-transformed.glb') as unknown as GLTFResult

  const resolution = useMemo(
    () => new THREE.Vector2(...resolutionArray),
    [resolutionArray],
  )

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += delta
    }
  })

  return (
    <MeshPortalMaterial
      worldUnits={worldUnits}
      attach={`material-${index}`}
      blur={blur}
      // FIX 4: Cast the resolution prop to 'any' to bypass the complex type issue
      resolution={resolution as any}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          // FIX 3: Cast the material to MeshStandardMaterial to safely access aoMap
          aoMap={(nodes.Cube.material as THREE.MeshStandardMaterial).aoMap}
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={2}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize-width={256} // <-- Add this
          shadow-mapSize-height={256} // <-- Add this
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>

      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  )
})
