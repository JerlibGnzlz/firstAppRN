import { StyleSheet, Text, View } from "react-native";

export const FlexBox = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />

        </View>
    )
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "gray",
    },
    box1: {
        backgroundColor: "yellow",
        flex: 1,
    },

    box2: {
        backgroundColor: "blue",
        flex: 1,

    },
    box3: {
        backgroundColor: "red",
        flex: 1,
    },
    texto: {
        backgroundColor: "green",
    }
})
