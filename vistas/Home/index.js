import React, { useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, ImageBackground, Text, TextInput } from 'react-native';
import Styles from  '../../Styles/home'
import 'react-native-gesture-handler';
import GlobalContext, { dataUsuario } from '../../componentes/global/contexto';
import Login from '../../componentes/login'
import GoogleAuth from '../../componentes/googleAuth';
import AsyncStorage from "../../utils/AsyncStorage";

const BACKGROUND = require('../../assets/imagenes/background.jpg')

export default ({navigation})=> {

//TEST
useEffect(() => {
  console.log(dataUsuario)
}, [])


const applyAuthentication = (user) => {
  // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
  AsyncStorage.storeData('@userData', user)
  checkUser()
}

    return (
    <View style={Styles.container}>
      <ImageBackground source={BACKGROUND} resizeMode="cover" style={Styles.background}>
      
      <View>

        <Text style={Styles.textos}>Para continuar identifiquese...</Text>        
        <GoogleAuth />

        <Text style={Styles.textos}>Inicie sesión con sus credenciales...</Text>   

        <Login applyAuthentication={applyAuthentication}/>

        <Text style={Styles.textos}>Si no tiene cuenta, registrese...</Text>   

        <View style={Styles.button}>
          <Button title='Registrarme' color='#e6739f' onPress={()=> navigation.navigate('Registrar')}/>
        </View>

      </View>
      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
    )
}