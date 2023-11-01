const Light = () => {
return (
	<>
    <ambientLight args={["#ffffff", 0.75]}/>
		<directionalLight args={["#ffffff", 1]} position={[0, 0, 1]} />
		<spotLight args={["#ffffff", 0.5]} position={[-1, 0, 0.75]} />
	</>
)
}

export default Light;