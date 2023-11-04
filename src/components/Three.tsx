import { useFrame } from '@react-three/fiber'
import { PresentationControls, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { getRadianByAngle } from '@/util'
import Box from '@/components/Box'
import Sphere from '@/components/Sphere'
import Plate from '@/components/Plate'
import Word from '@/components/Text'

const Three = () => {

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, -30, 5]}/>
			<OrbitControls makeDefault />
			<ambientLight args={["#ffffff", 0.75]}/>
			<directionalLight castShadow args={["#ffffff", 2]} position={[1, -1, 6]} />
			<PresentationControls
				polar={[-Math.PI / 2, Math.PI / 2]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
			<Sphere z={5}/>
			{[...Array(5).keys()].map(n => <Box key={n} x={-(n * 2) + 2} y={4} height={(n + 1) * 2}/>)}
			<Box x={0} y={2} height={3}/>
			<Box x={2} y={2} height={2}/>
			<Box x={4} y={2} height={1}/>
			<Word />
			<Plate />
			</PresentationControls>
		</>
	)
}

export default Three;