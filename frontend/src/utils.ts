import JEASINGS from 'jeasings'

export const resetCubeGroup = (cubeGroup: any, rotationGroup: any) => {
  rotationGroup.children
    .slice()
    .reverse()
    .forEach(function (c: any) {
      cubeGroup.attach(c)
    })
  rotationGroup.quaternion.set(0, 0, 0, 1)
}

export const attachToRotationGroup = (
  cubeGroup: any,
  rotationGroup: any,
  axis: string,
  limit: any,
) => {
  cubeGroup.children
    .slice()
    .reverse()
    .filter(function (c: any) {
      return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
    })
    .forEach(function (c: any) {
      rotationGroup.attach(c)
    })
}

export const animateRotationGroup = (
  rotationGroup: any,
  axis: string,
  multiplier: number,
) => {
  new JEASINGS.JEasing(rotationGroup.rotation)
    .to(
      {
        [axis]: rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier,
      },
      250,
    )
    .easing(JEASINGS.Cubic.InOut)
    .start()
}

export const rotate = (
  cubeGroup: any,
  rotationGroup: any,
  axis: string,
  limit: any,
  multiplier: number,
) => {
  if (!JEASINGS.getLength()) {
    resetCubeGroup(cubeGroup, rotationGroup)
    attachToRotationGroup(cubeGroup, rotationGroup, axis, limit)
    animateRotationGroup(rotationGroup, axis, multiplier)
  }
}
