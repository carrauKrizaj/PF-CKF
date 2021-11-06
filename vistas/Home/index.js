import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, ImageBackground } from 'react-native';
import Styles from '../Styles'
import 'react-native-gesture-handler';

const BACKGROUND = require('../../assets/imagenes/background.jpg')

export default ({navigation})=> {

    return (
    <View style={Styles.container}>
      <ImageBackground source={BACKGROUND} resizeMode="cover" style={Styles.background}>
      
      <View style={Styles.buttonContainer}> 
        <View style={Styles.button}>
          <Button title='Iniciar sesión' color='#790c5a' onPress={()=> navigation.navigate('Login')} />
        </View>
        <View style={Styles.button}>
          <Button title='Registrarme' color='#e6739f' onPress={()=> navigation.navigate('Registrar')}/>
        </View>
      </View>

      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
    )
}