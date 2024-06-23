import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWord } from './src/presentation/screens/HelloWord';
import { Contador } from './src/presentation/screens/Contador';
import { PaperProvider } from 'react-native-paper';


export const App = () => {
  return (
    <PaperProvider>

      <SafeAreaView style={styles.contenedor}>
        {/* <HelloWord name={'Jerlib Jose Gonzalez Vega'} /> */}
        <Contador />
      </SafeAreaView>
    </PaperProvider>
  );
};



const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  }
})