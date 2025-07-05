import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <div className=' pl-20 pt-20 '>
    <p className=' text-[60px] font-press-start '> Divyansh Chamoli </p>
    <p className=' text-[60px] font-pixel-grid-semibold '> Divyansh Chamoli </p>
    <p className=' text-[60px] font-pixel-grid-medium '> Divyansh Chamoli </p>
    <p className=' text-[60px] font-pixel-grid-bold '> Divyansh Chamoli </p>
    <p className=' text-[60px] font-pixel-grid-bold '> Journey through the </p>
  </div>
}
