import { Home } from '@/components/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-[url(./src/assets/matrix.jpg)] bg-contain bg-center ">
      <div className="absolute top-0 w-screen h-screen backdrop-blur-xs "></div>
      <Home />
    </div>
  )
}
