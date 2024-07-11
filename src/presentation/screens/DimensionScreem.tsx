import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { View } from "react-native";
import { Dimensions } from 'react-native';


export const DimensionScreem = () => {

    const { height, width } = useWindowDimensions();

    return (
        <View>

            <View style={styles.contenedor}>
                <Text>DimensionScreem</Text>

                <View
                    style={{
                        ...styles.Box,
                        width: width * 0.6,
                        height: height * 0.1
                    }}
                />
            </View>

            <Text style={styles.title}>
                w: {width},
                h: {height}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    contenedor: {
        width: 300,
        height: 300,
        backgroundColor: "red"
    }, Box: {
        height: "50%",
        width: "50%",
        backgroundColor: "purple",
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    }
})
