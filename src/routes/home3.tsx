import { createFileRoute } from '@tanstack/react-router'
import { createImagePositions, home3Positions, getScaleFactor, type IconSetType } from '../utils/imageUtils'
import { useState } from 'react'

export const Route = createFileRoute('/home3')({
  component: RouteComponent,
})

function RouteComponent() {
  const [iconType, setIconType] = useState<IconSetType>('regular')
  const imagePositions = createImagePositions(home3Positions, iconType)

  return (
    // The main container remains the same, with the background image
    <div className="relative h-[396px] w-[1584px] overflow-hidden bg-[url(./src/assets/matrix.jpg)] bg-cover bg-center">
      {/* Gradient overlay for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

      {/* Content container above the overlay */}
      <div className="relative z-10 w-full h-full">
        {/* Icons */}
        <div>
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

        {/* Main Heading & Subheading */}
        <div className="flex h-full flex-col justify-center items-center gap-4">
          <h1 className="text-[72px] font-pixel-grid-medium text-white drop-shadow-2xl">
            Divyansh Chamoli
          </h1>
          <h2 className="text-[40px] font-pixel-grid-bold text-white drop-shadow-md">
            Full Stack Developer
          </h2>
        </div>

        {/* Minimized Quote */}
        <p className="absolute bottom-3 right-4 max-w-xs text-right text-xs font-pixel-grid-bold text-gray-300 drop-shadow-sm">
          "The most important skill for a computer scientist is problem solving"
          ~ Bill Gates
        </p>

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
