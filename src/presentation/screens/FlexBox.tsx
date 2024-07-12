import { StyleSheet, Text, View } from "react-native";

export const FlexBox = () => {
    return (



        <View style={styles.contenedor}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexWrap: "wrap",
        gap: 10
    },

    box: {
        // flex: 1,
        height: 100,
        width: 100,
    },
    box1: {
        backgroundColor: "yellow",

    },

    box2: {
        backgroundColor: "blue",

    },
    box3: {
        // alignSelf: "center",
        backgroundColor: "red",


    },

})
