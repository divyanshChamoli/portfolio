import { createFileRoute } from '@tanstack/react-router'
import TextBox from '../assets/text-box.png'
import { createImagePositions, home2Positions, getScaleFactor, type IconSetType } from '../utils/imageUtils'
import { useState } from 'react'

export const Route = createFileRoute('/home2')({
  component: RouteComponent,
})

function RouteComponent() {
  const [iconType, setIconType] = useState<IconSetType>('regular')
  const imagePositions = createImagePositions(home2Positions, iconType)

  return (
    <div className="relative h-[396px] w-[1584px] overflow-hidden flex justify-center items-center bg-[url(./src/assets/matrix.jpg)] bg-cover bg-center">
      {/* Icon Layer - Lower opacity to reduce visual clutter */}
      <div className="absolute inset-0 opacity-80 z-0">
        {imagePositions.map((position, index) => (
          <img
            key={index}
            src={position.src}
            alt={`icon-${index + 1}`}
            className="absolute w-[48px]"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              transform: getScaleFactor(position.depth, true),
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col justify-center items-center text-center gap-4">
        {/* Name */}
        <h1 className="text-[76px] font-pixel-grid-medium text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
          Divyansh Chamoli
        </h1>

        {/* Title */}
        <h2 className="text-[48px] font-pixel-grid-bold text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
          Full Stack Developer
        </h2>

        {/* Quote Section */}
        <div className="relative w-[650px] h-[110px] mt-4">
          <img
            src={TextBox}
            alt="text-box background"
            className="absolute top-0 left-0 w-full h-full"
          />
          <p className="absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-[20px] font-pixel-grid-bold text-white leading-snug tracking-wide">
            " The most important skill for a computer scientist is problem
            solving " ~ Bill Gates
          </p>
        </div>
      </div>

      {/* Icon set switcher */}
      <button
        onClick={() => setIconType(prev => prev === 'regular' ? 'pixel' : 'regular')}
        className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded hover:bg-black/70 transition-colors"
      >
        Switch to {iconType === 'regular' ? 'Pixel' : 'Regular'} Icons
      </button>
    </div>
  )
}