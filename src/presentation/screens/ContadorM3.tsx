import { useState } from 'react';
import { View, Text, } from 'react-native';
import { globalStyles } from '../themes/global.style';
import { FAB } from 'react-native-paper';




export const ContadorM3 = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.contenedor}>
            <Text style={globalStyles.title}>{count}</Text>

            <FAB
                label="+"
                // icon="plus"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
            />
        </View >
    )
};


