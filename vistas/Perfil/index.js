import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
//import GlobalContext from '../../componentes/global/contexto'
import BuscarTitulo from '../../componentes/buscarTitulo'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation})=> {

//const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={Styles.container}>
            <View style={Styles.menu}>
                <TouchableOpacity
                 onPress={()=> navigation.navigate('EditPerfil')}
                > 
                    <Text style={Styles.menuText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Resenas')}
                > 
                    <Text style={Styles.menuText}>Reseñas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Seguidores')}
                > 
                    <Text style={Styles.menuText}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Seguidos')}
                > 
                    <Text style={Styles.menuText}>Seguidos</Text>
                </TouchableOpacity>
            </View>

            <BuscarTitulo />
      
            <StatusBar style="auto" />
        </View>
    )
}