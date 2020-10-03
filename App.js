import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/homeStack';


const getFonts = ()=> Font.loadAsync({
      'nunito-regular': require('./assets/Fonts/Nunito/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/Fonts/Nunito/Nunito-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded){
      console.log("loaded");
      return (
        <Navigator/>
      );
    } else {
      console.log("not loaded");
        return(
            <AppLoading
                startAsync={getFonts}
                onFinish={()=> setFontsLoaded(true)}
            />
        )
    }
}

// const styles = StyleSheet.create({
  
// });
