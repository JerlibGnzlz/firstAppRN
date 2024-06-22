import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name: string;
}

export const HelloWord = ({ name }: Props) => {
    return (
        <View style={styles.contenedor}>
            <Text numberOfLines={1} style={styles.titulo}>
                Hello, {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
