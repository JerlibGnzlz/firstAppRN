import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';




export const Contador = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo1}>{count}</Text>

            <Pressable
                onPress={() => setCount(count + 1)}
                onLongPress={() => { setCount(0) }}
                style={({ pressed }) => [
                    styles.boton,
                    pressed && styles.botonPressed
                ]}
            >
                <Text style={styles.titulo}>Incrementar</Text>
            </Pressable>

            <Pressable
                onPress={() => setCount(count - 1)}

                onLongPress={() => { setCount(0) }}
                style={({ pressed }) => [
                    styles.boton,
                    pressed && styles.botonPressed
                ]}
            >
                <Text style={styles.titulo}>Descrementar</Text>
            </Pressable>
        </View >
    )
};


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    titulo1: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: '900',
        color: "black"
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