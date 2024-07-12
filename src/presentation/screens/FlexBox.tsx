import { StyleSheet, Text, View } from "react-native";

export const FlexBox = () => {
    return (
        <View style={styles.contenedor}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
        </View>
    )
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",


    },

    box: {
        height: 80,
        width: 80
    },
    box1: {
        backgroundColor: "yellow"
    },

    box2: {
        backgroundColor: "blue"

    },
    box3: {
        backgroundColor: "red"
    },
    texto: {
        backgroundColor: "green",
    }
})
