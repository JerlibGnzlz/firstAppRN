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
        </View>
    )
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "green"
    },
    firstBox: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderColor: "white",
        borderWidth: 5
    },
    secondBox: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderColor: "white",
        borderWidth: 5
    }

})