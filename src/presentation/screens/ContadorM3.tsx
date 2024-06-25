import { useState } from 'react';
import { View, Text, } from 'react-native';
import { globalStyles } from '../themes/global.style';
import { FAB } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons"



export const ContadorM3 = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.contenedor}>
            <Text style={globalStyles.title}>{count}</Text>

            {/* <Icon
                name='add-outline'
                size={40}
            /> */}


            <FAB
                icon="add-circle-outline"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
            />


        </View >
    )
};


