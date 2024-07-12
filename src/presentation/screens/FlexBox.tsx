import { StyleSheet, Text, View } from "react-native";

export const FlexBox = () => {
    return (



        <View style={styles.contenedor}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
        </View >
    )
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "gray",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // flexWrap: "wrap",
        // gap: 40
    },

    box: {
        // flex: 1,
        height: 100,
        // width: 100,
        borderColor: "white",
        borderWidth: 4
    },
    box1: {
        // flex: 1,
        backgroundColor: "yellow",
        width: 100,

        // alignSelf: "center"

    },

    box2: {
        // flex: 1,
        backgroundColor: "blue",
        width: 100,

        // alignSelf: "center",
        // left: 100,
        // bottom: -400


    },
    box3: {
        // flex: 1,
        backgroundColor: "red",
        alignSelf: "stretch",
        // width: 100
        // top: 150


    },

})
