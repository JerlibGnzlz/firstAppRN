import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const DimensionScreem = () => {
    return (
        <View>

            <View style={styles.contenedor}>
                <Text>DimensionScreem</Text>

                <View
                    style={styles.Box}
                />
            </View>

            <Text>
                w: {width},{"  "}
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
    }
})
