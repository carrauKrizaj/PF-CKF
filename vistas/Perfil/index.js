import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../Styles/home'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import { Const } from '../../servicios/constantes';

URL = `${Const.BASE_URL}usuario/user3`;

export default ({navigation})=> {

//const dataUsuario = useContext(GlobalContext);
const dataUsuario = ()=> {
    fetch(URL)
    .then(res => res.json())
    .then(user => console.log(user))
}

useEffect(() => {
    dataUsuario()
}, [])

    return (
    <View style={Styles.container}>

        <Text>
             Bienvenido 
        </Text>
      
      <StatusBar style="auto" />
    </View>
    )
}