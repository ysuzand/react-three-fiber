import { Text } from '@react-three/drei'

const Word = () => {  
    return (
        <Text
            castShadow
            position={[2, -2, 3]}
            anchorX="center"
            anchorY="bottom-baseline"
            color="white"
        >
            HELLO
        </Text>
    )
}

export default Word;