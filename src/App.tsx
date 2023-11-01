import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Sphere from '@/components/Sphere'
import Plate from './components/Plate'
import Light from './components/Light'
import './App.css'


function App() {

  return (
    <>
      <Canvas id="canvas">
        <Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <OrbitControls />
          <Sphere />
          <Plate />
          <Light />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
