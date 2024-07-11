import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export const PosicionScreen = () => {
    return (
        <View style={styles.contenedor}>
            <View
                style={styles.firstBox}
            />
            <View

                style={styles.secondBox}

            />

            <View
                style={styles.tercerBox}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "green",
        // justifyContent: "center",
        // alignItems: "center"
    },
    firstBox: {
        position: "absolute",
        right: 0,
        backgroundColor: "blue",
        width: 100,
        height: 100,
        borderColor: "white",
        borderWidth: 10,
    },

    secondBox: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "red",
        width: 100,
        height: 100,
        borderColor: "white",
        borderWidth: 10,
    },
    tercerBox: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "yellow",
        width: 100,
        height: 100,
        borderColor: "white",
        borderWidth: 10,
    }

})