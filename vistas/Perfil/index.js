import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, ImageBackground } from 'react-native';
import Styles from '../Styles'
import 'react-native-gesture-handler';

export default ({navigation})=> {

const [text, onChangeText] = React.useState("Ingrese aquí su usuario");

    return (
    <View style={Styles.container}>

        <Text>
            {"Perfil usuario"}
        </Text>
      
      <StatusBar style="auto" />
    </View>
    )
}