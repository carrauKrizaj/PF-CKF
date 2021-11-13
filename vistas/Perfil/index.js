import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import BuscarTitulo from '../../componentes/buscarTitulo'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);

// perfil =  el usuario puede editar su perfil
// titulos = ve todos los titulos que comento
// seguidores = ve todos los usuarios que lo siguen
// seguidos = ve todos los usuarios que sigue y buscar usuarios para seguir

    return (
        <View style={Styles.container}>
            <View style={Styles.menu}>
                <TouchableOpacity
                /* onPress={() => editarPerfil()} */
                > 
                    <Text style={Styles.menuText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Resenas')}
                > 
                    <Text style={Styles.menuText}>Reseñas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                /* onPress={() => seguidores()} */
                > 
                    <Text style={Styles.menuText}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                /* onPress={() => seguidos()} */
                > 
                    <Text style={Styles.menuText}>Seguidos</Text>
                </TouchableOpacity>
            </View>

            <BuscarTitulo />
      
            <StatusBar style="auto" />
        </View>
    )
}