import { MagicCube } from '@/components/MagicCube/MagicCube'
import { RubiksCube } from '@/components/RubiksCube/RubiksCube'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='h-screen w-screen'>
      <RubiksCube />
      {/* <MagicCube/> */}
    </div>
  )
}
