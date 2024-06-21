import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWord } from './src/presentation/screens/HelloWord';


export const App = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <HelloWord />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "yellow"
  }
})