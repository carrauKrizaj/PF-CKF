import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import ScrollView from '../../componentes/ScrollViewSeguidos'
import MenuPerfil from '../../componentes/menuPerfil'
import BackButton from '../../componentes/backButton';

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const seguidos = dataUsuario.usuario.seguidos

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

            <Text style={Styles.scSeguidosTitle}>Usuarios seguidos</Text>
            <View style={Styles.scSeguidosContainer}>
                <ScrollView data = {seguidos}/>
            </View>

            <BackButton />
      
            <StatusBar style="auto" />
        </View>
    )
}