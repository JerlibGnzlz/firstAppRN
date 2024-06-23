import { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { PrimaryButton } from '../components';




export const Contador = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo1}>{count}</Text>

            <PrimaryButton
                label="Incrementar"
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />


            <PrimaryButton
                label="Decrementar"
                onPress={() => setCount(count - 1)}
                onLongPress={() => setCount(0)}

            />
        </View >
    )
};


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    // titulo: {
    //     textAlign: 'center',
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // },
    titulo1: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: '900',
        color: "black"
    },
});