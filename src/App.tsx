import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Three from '@/components/Three'
import './App.css'

function App() {
  return (
    <>
      <Canvas id="canvas" shadows>
        <Suspense>
         <Three />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
