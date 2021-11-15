import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import ScrollView from '../../componentes/ScrollViewSeguidores'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const seguidores = dataUsuario.usuario.seguidores

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
                /* NO LLEVA A NINGUN LADO - SE QUEDA EN LA MISMA VISTA */
                > 
                    <Text style={Styles.menuText}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Seguidos')}
                > 
                    <Text style={Styles.menuText}>Seguidos</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                <Text style={Styles.buttonBackText}>Atras</Text>
            </TouchableOpacity>

            <Text style={Styles.scSeguidosTitle}>Seguidores</Text>
            <View style={Styles.scSeguidosContainer}>
                <ScrollView data = {seguidores}/>
            </View>
      
            <StatusBar style="auto" />
        </View>
    )
}