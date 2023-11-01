const Plate = () => {
	return (
		<mesh rotation={[-1, 0, 0]}>
			<circleGeometry args={[3, 80]}/>
			<meshPhongMaterial color="#bab6b6" />
		</mesh>
	);
}

export default Plate;