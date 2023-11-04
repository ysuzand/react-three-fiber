const Box = ({x, y, z, height}: {x?: number; y?: number; z?: number; height?: number}) => {
	return (
		<mesh castShadow receiveShadow position={[x ?? 0, y ?? 0, z || height && height/2 || 0]}>
			<boxGeometry args={[1, 1, height ?? 1]}/>
			<meshPhysicalMaterial roughness={0} color='#fff' />
		</mesh>
	)
}

export default Box;