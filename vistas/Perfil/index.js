import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Styles from '../Styles/home'
import 'react-native-gesture-handler';

export default ({navigation})=> {

const dataUsuario = useContext(GlobalContext);
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