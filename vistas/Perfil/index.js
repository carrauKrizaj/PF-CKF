import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
//import GlobalContext from '../../componentes/global/contexto'
import BuscarTitulo from '../../componentes/buscarTitulo'
import MenuPerfil from '../../componentes/menuPerfil'

export default ({navigation})=> {

//const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

            <BuscarTitulo />
      
            <StatusBar style="auto" />
        </View>
    )
}