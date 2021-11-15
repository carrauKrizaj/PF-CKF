import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import ScrollView from '../../componentes/ScrollViewSeguidos'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuPerfil from '../../componentes/menuPerfil'

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const seguidos = dataUsuario.usuario.seguidos

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                <Text style={Styles.buttonBackText}>Atras</Text>
            </TouchableOpacity>

            <Text style={Styles.scSeguidosTitle}>Usuarios seguidos</Text>
            <View style={Styles.scSeguidosContainer}>
                <ScrollView data = {seguidos}/>
            </View>
      
            <StatusBar style="auto" />
        </View>
    )
}