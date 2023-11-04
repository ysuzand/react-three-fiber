const Plate = () => {
	return (
		<mesh receiveShadow rotation={[0, 0, 0]}>
			<planeGeometry args={[30, 20]}/>
			<meshPhongMaterial color="#bab6b6" />
		</mesh>
	);
}

export default Plate;