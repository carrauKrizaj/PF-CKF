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

/*  
  const dataUsuario = useContext(GlobalContext);
  const [authenticated, setAuthenticated] = useState(false)

   const checkUser = async () => {
    const user = await AsyncStorage.getData('@userData')
    console.log(user)
    if (user) {
        changeContext(user)
        setAuthenticated(true) 
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  const applyAuthentication = (user) => {
    AsyncStorage.storeData('@userData', user)
    checkUser()
  }

  function changeContext(data){
    dataUsuario.token = data.token;
    dataUsuario.usuario._id = data.usuario._id;
    dataUsuario.usuario.nombre = data.usuario.nombre;
    dataUsuario.usuario.apellido = data.usuario.apellido;
    dataUsuario.usuario.email = data.usuario.email;
    dataUsuario.usuario.username = data.usuario.username;
    dataUsuario.usuario.seguidores = data.usuario.seguidores;
    dataUsuario.usuario.seguidos = data.usuario.seguidos;
    dataUsuario.usuario.titulos = data.usuario.titulos;
}  */

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