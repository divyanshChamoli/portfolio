import TextBox from '../assets/text-box.png'
import Icon1 from '../assets/icon1.png'

export const Home = () => {
  return (
    <div className="relative h-[396px] w-[1584px] overflow-hidden flex justify-around items-center flex-col gap-4 bg-[url(./src/assets/matrix.jpg)] bg-cover bg-center">
      <div className="w-full h-full backdrop-blur-[4px] flex flex-col justify-around items-center">
        <div className=' -z-10 absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-80'>
            <img
                src={Icon1}
                alt="pixel-art"
                className=" absolute w-[100px] top-10 left-50"
            />
        </div>

        <div className=" flex flex-col justify-center items-center gap-4 ">
          <h1 className=" text-[72px] font-pixel-grid-medium text-white ">
            {' '}
            Divyansh Chamoli{' '}
          </h1>
          <h2 className=" text-[40px] font-pixel-grid-bold text-white ">
            {' '}
            Full Stack Developer{' '}
          </h2>
        </div>
        <div className="relative h-fit w-fit backdrop-blur-sm bg-[#003153]  ">
          <img src={TextBox} alt="bg" className=" h-[100px] w-[600px]" />
          <p className=" w-11/12 text-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-pixel-grid-bold text-white">
            " The most important skill for a computer scientist is problem
            solving " ~ Bill Gates
          </p>
        </div>
      </div>
    </div>
  )
}
