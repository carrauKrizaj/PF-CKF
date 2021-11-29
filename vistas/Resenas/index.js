import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import ScrollView from '../../componentes/ScrollViewResenas'
import MenuPerfil from '../../componentes/menuPerfil'
import BackButton from '../../componentes/backButton';

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const resenas = dataUsuario.usuario.titulos

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

            <View>
                <ScrollView data = {resenas}/>
            </View>

            <BackButton />

            <StatusBar style="auto" />
        </View>
    )
}