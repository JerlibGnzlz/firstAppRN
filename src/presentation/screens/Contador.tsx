import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';




export const Contador = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>{count}</Text>

            <Pressable
                onPress={() => setCount(count + count)}
            // onLongPress={() => { setCount(0) }}
            >
                <Text>+1</Text>
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
        fontSize: 50,
        fontWeight: 'bold',
    },
});