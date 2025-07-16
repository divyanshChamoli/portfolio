import TextBox from '../assets/text-box.svg'
import Icon1 from '../assets/icon/icon1.png'
import Icon2 from '../assets/icon/icon2.png'
import Icon3 from '../assets/icon/icon3.jpg'
import Icon4 from '../assets/icon/icon4.jpg'
import Icon5 from '../assets/icon/icon5.jpg'
import Icon6 from '../assets/icon/icon6.jpg'
import Icon7 from '../assets/icon/icon7.jpg'
import Icon8 from '../assets/icon/icon8.jpg'
import Icon9 from '../assets/icon/icon9.jpg'
import Icon10 from '../assets/icon/icon10.jpg'
import Icon11 from '../assets/icon/icon11.jpg'
import Icon12 from '../assets/icon/icon12.jpg'
import Icon13 from '../assets/icon/icon13.jpg'
import Icon14 from '../assets/icon/icon14.jpg'
import Icon15 from '../assets/icon/icon15.png'
// import Icon16 from '../assets/icon/icon16.png'
// import Icon17 from '../assets/icon/icon17.png'
// import Icon18 from '../assets/icon/icon18.png'
import Icon19 from '../assets/icon/icon19.png'
import Icon20 from '../assets/icon/icon20.png'

const imagePositions = [
  { src: Icon1, top: 12, left: 3, depth: 50 }, // Top Left
  { src: Icon2, top: -1, left: 12, depth: 50 }, // Top Left
  { src: Icon3, top: 11, left: 87, depth: 50 }, // Top Right
  { src: Icon4, top: 31, left: 32, depth: 30 }, // Middle Left, TAILWIND
  { src: Icon5, top: 42, left: 93, depth: 50 }, // Middle Right
  { src: Icon8, top: 53, left: -0.5, depth: 10 }, // Middle Left
  { src: Icon7, top: -2, left: 28, depth: 50 }, // Bottom Left
  { src: Icon6, top: 57, left: 28, depth: 55 }, // Bottom Right
  { src: Icon9, top: 75, left: 90, depth: 50 }, // Bottom Right
  { src: Icon10, top: 92, left: 32, depth: 10 }, // Bottom Right
  { src: Icon11, top: -2, left: 78, depth: 10 }, // Top Right
  { src: Icon12, top: -5, left: 57, depth: 50 }, // Bottom Left
  { src: Icon13, top: 18, left: 19, depth: 20 }, // Middle Right
  { src: Icon14, top: 7, left: 45, depth: 30 }, // Bottom Left
  { src: Icon15, top: 8, left: 68, depth: 30 }, // Bottom Right
  // { src: Icon16, top: 85, left: 5, depth: 40 }, // Bottom Left Area
  // { src: Icon17, top: 78, left: 15, depth: 35 }, // Bottom Left Area
  // { src: Icon18, top: 65, left: 8, depth: 45 }, // Bottom Left Area
  { src: Icon19, top: 82, left: 17, depth: 20 }, // Bottom Left Area
  { src: Icon20, top: 52, left: 11, depth: 45 }, // Bottom Left Area
]

export const Home = () => {
  return (
    <div className="relative h-[396px] w-[1584px] overflow-hidden flex justify-center items-center flex-col gap-4 bg-[url(./src/assets/matrix.jpg)] bg-cover bg-center">
      {/* <div className=" z-20 absolute bottom-0 sm:left-10 left-35 translate-y-1/3 rounded-full sm:size-[350px] size-[400px] bg-[url(./src/assets/pic.png)] bg-cover bg-center "></div> */}

      {/* <div className="absolute inset-0 bg-black/70" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      <div className="pb-8 w-full h-full z-0 flex flex-col justify-end items-end ">
        <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 w-full h-full ">
          {imagePositions.map((position, index) => (
            <img
              key={index}
              src={position.src}
              alt={`icon-${index + 1}`}
              className="absolute w-[50px]"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `scale(${1 + position.depth / 100})`,
              }}
            />
          ))}
        </div>

        <div className=" w-3/4 flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-[76px] font-pixel-grid-medium text-white  ">
              {' '}
              Divyansh Chamoli{' '}
            </h1>
            <h2 className="text-[48px] font-pixel-grid-bold text-white">
              {' '}
              Full Stack Developer{' '}
            </h2>
          </div>
          <div className={` relative h-fit w-fit  `}>
            <img src={TextBox} alt="bg" className=" w-[740px]" />
            <p className="w-11/12 text-[18px]  font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white ">
              The most important skill for a computer scientist is problem
              solving ~ Bill Gates
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// const colors = ['#00132D', '#02498A', '#1BA7FF']
