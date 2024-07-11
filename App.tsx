import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWord } from './src/presentation/screens/HelloWord';
import { Contador } from './src/presentation/screens/Contador';
import { PaperProvider } from 'react-native-paper';
import { ContadorM3 } from './src/presentation/screens/ContadorM3';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModel } from './src/presentation/screens/BoxObjectModel';
import { DimensionScreem } from './src/presentation/screens/DimensionScreem';
import { PosicionScreen } from './src/presentation/screens/PosicionScreen';
import { FlexBox } from './src/presentation/screens/FlexBox';


export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >

      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWord name={'Jerlib Jose Gonzalez Vega'} /> */}
        {/* <Contador /> */}
        {/* <ContadorM3 /> */}
        {/* <BoxObjectModel /> */}
        {/* <DimensionScreem /> */}
        {/* <PosicionScreen /> */}
        <FlexBox />
      </SafeAreaView>
    </PaperProvider>
  );
};



const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  }
})