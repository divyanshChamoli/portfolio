import { useRef } from 'react'
import { useControls, button } from 'leva'
import type { Group } from 'three/examples/jsm/libs/tween.module.js'
import { rotate } from '@/utils'

interface ButtonsProps {
  cubeGroup: React.RefObject<Group>
}

export function Buttons({ cubeGroup }: ButtonsProps) {
  const rotationGroup = useRef<Group>(null)

  useControls('Cube', {
    'Left CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1)
    }),
    'Left CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1)
    }),
    'Right CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1)
    }),
    'Right CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1)
    }),
    'Back CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1)
    }),
    'Back CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1)
    }),
    'Front CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1)
    }),
    'Front CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1)
    }),
    'Top CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1)
    }),
    'Top CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1)
    }),
    'Bottom CW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1)
    }),
    'Bottom CCW': button(() => {
      rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1)
    }),
  })

  return (
    <>
      <group ref={rotationGroup} />
    </>
  )
}
