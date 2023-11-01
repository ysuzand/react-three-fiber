const Sphere = ({args}: {args?: [radius?: number | undefined, widthSegments?: number | undefined, heightSegments?: number | undefined, phiStart?: number | undefined, phiLength?: number | undefined, thetaStart?: number | undefined, thetaLength?: number | undefined] | undefined}) => {
	return (
		<mesh position={[1.5, 1, 0]}>
			<sphereGeometry args={args ?? [0.8, 25, 25]} />
			<meshPhysicalMaterial roughness={0.1} color='#fff' />
		</mesh>
	)
}

export default Sphere;