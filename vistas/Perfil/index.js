import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import BuscarTitulo from '../../componentes/buscarTitulo'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);

// perfil =  el usuario puede editar su perfil
// reseñas = ve todas sus reseñas
// seguidores = ve todos los usuarios que lo siguen
// seguidos = ve todos los usuarios que sigue y buscar usuarios para seguir

    return (
    <View style={Styles.container}>

        {/* Perfil  Reseñas     Seguidores      Seguidos    Cerrar sesion */}
        <View style={Styles.menu}>
            <TouchableOpacity> 
                <Text style={Styles.menuText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={Styles.menuText}>Reseñas</Text>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={Styles.menuText}>Seguidores</Text>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text style={Styles.menuText}>Seguidos</Text>
            </TouchableOpacity>
        </View>

        <BuscarTitulo />
      
      <StatusBar style="auto" />
    </View>
    )
}