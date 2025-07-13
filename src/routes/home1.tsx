import { createFileRoute } from '@tanstack/react-router'
import TextBox from '../assets/text-box.png'
import { createImagePositions, home1Positions, getScaleFactor, type IconSetType } from '../utils/imageUtils'
import { useState } from 'react'

export const Route = createFileRoute('/home1')({
  component: RouteComponent,
})

function RouteComponent() {
  const [iconType, setIconType] = useState<IconSetType>('regular')
  const imagePositions = createImagePositions(home1Positions, iconType)

  return (
    <div className="relative h-[396px] w-[1584px] overflow-hidden flex justify-around items-center flex-col gap-4 bg-[url(./src/assets/matrix.jpg)] bg-cover bg-center">
      <div className="w-full h-full z-0 flex flex-col justify-around items-center">
        <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-80">
          {imagePositions.map((position, index) => (
            <img
              key={index}
              src={position.src}
              alt={`icon-${index + 1}`}
              className="absolute w-[50px]"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: getScaleFactor(position.depth),
              }}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[72px] font-pixel-grid-medium text-white">
            {' '}
            Divyansh Chamoli{' '}
          </h1>
          <h2 className="text-[40px] font-pixel-grid-bold text-white">
            {' '}
            Full Stack Developer{' '}
          </h2>
        </div>
        <div className="relative h-fit w-fit bg-[#003153]">
          <img src={TextBox} alt="bg" className="h-[100px] w-[600px]" />
          <p className="w-11/12 text-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-pixel-grid-bold text-white">
            " The most important skill for a computer scientist is problem
            solving " ~ Bill Gates
          </p>
        </div>

        {/* Icon set switcher */}
        <button
          onClick={() => setIconType(prev => prev === 'regular' ? 'pixel' : 'regular')}
          className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded hover:bg-black/70 transition-colors"
        >
          Switch to {iconType === 'regular' ? 'Pixel' : 'Regular'} Icons
        </button>
      </div>
    </div>
  )
}
