import { StyleSheet, Text, View } from "react-native";

export const HelloWord = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>HelloWord</Text>
        </View>
    )
};



const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }

})