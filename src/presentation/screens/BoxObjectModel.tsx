import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export const BoxObjectModel = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>BOM</Text> */}


            <View style={styles.purpleBox}>

                <Text style={{ color: "white" }}>purpleBox</Text>
            </View>
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    title: {
        color: "black",
        fontSize: 30,
        borderWidth: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    purpleBox: {
        height: 50,
        backgroundColor: "purple",
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 10
    },
})