import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';

function MenuPerfil ({navigation}) {

        return (
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
        )
    }

export default MenuPerfil;