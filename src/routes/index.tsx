import { Home } from '@/components/Home'
import { createFileRoute } from '@tanstack/react-router'
import Bg from '../assets/matrix.jpg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      className=" w-screen h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 w-screen h-screen backdrop-blur-xs "></div>
      <Home />
    </div>
  )
}
