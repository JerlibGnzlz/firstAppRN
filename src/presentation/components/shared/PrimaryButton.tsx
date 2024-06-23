import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text } from "react-native";


interface Props {
    label: string
    onPress?: () => void
    onLongPress?: () => void
}


export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {

    const [count, setCount] = useState(10)

    return (
        <>
            <Pressable
                onPress={() => onPress && onPress()}
                onLongPress={() => onLongPress && onLongPress()}
                style={({ pressed }) => [
                    styles.boton,
                    pressed && styles.botonPressed
                ]}
            >
                <Text style={styles.titulo}>{label}</Text>
            </Pressable>
        </>
    )
}


const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    boton: {
        backgroundColor: Platform.OS === "android" ? "#5856D6" : "",
        fontSize: 40,
        margin: 5,
        borderRadius: 5,
        padding: 5,
        width: 300,
        textAlign: 'center',
        fontWeight: '800'
    },
    botonPressed: {
        backgroundColor: "#323181",
    }
});