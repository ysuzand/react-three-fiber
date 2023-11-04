const Sphere = ({x, y, z}: {x?: number; y?: number; z?: number}) => {
	return (
		<mesh castShadow position={[x ?? 0, y ?? 0, z ?? 0]}>
			<sphereGeometry args={[0.8, 25, 25]} />
			<meshPhysicalMaterial roughness={0.1} color='#fff' />
		</mesh>
	)
}

export default Sphere;