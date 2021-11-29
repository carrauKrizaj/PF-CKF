import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import BuscarTitulo from '../../componentes/buscarTitulo'
import MenuPerfil from '../../componentes/menuPerfil'
import Logout from '../../componentes/logout'

export default ({navigation})=> {

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

            <BuscarTitulo navigation={navigation}/>

            <Logout />
      
            <StatusBar style="auto" />
        </View>
    )
}