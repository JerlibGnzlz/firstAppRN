import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWord } from './src/presentation/screens/HelloWord';
import { Contador } from './src/presentation/screens/Contador';


export const App = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      {/* <HelloWord name={'Jerlib Jose Gonzalez Vega'} /> */}
      <Contador />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  }
})