import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../global/contexto'
import ScrollView from '../ScrollViewResenas'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const resenas = dataUsuario.usuario.titulos

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

            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                <Text style={Styles.buttonBackText}>Atras</Text>
            </TouchableOpacity>

            <View>
                <ScrollView data = {resenas}/>
            </View>
      
            <StatusBar style="auto" />
        </View>
    )
}