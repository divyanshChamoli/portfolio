import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { Cubelet } from './Cubelet'
import { Buttons } from './Buttons'
import type { Group } from 'three'
import JEASINGS from 'jeasings'

export const Cube = () => {
  const ref = useRef<Group>(null)

  const roundedBoxGeometry = useMemo(() => {
    return new RoundedBoxGeometry(1, 1, 1, 3, 0.1)
  }, [])

  useFrame(() => {
    JEASINGS.update()
  })

  return (
    <>
      <group ref={ref}>
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
      <Buttons cubeGroup={ref} />
    </>
  )
}
