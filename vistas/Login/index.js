import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import Styles from '../Styles'
import 'react-native-gesture-handler';

export default ({navigation})=> {

const [email, setMail] = React.useState('');
const [password, setPassword] = React.useState('');

    return (
    <View style={Styles.container}>
       
      <View style={Styles.inputContainer}>
        <Text style={Styles.textosInputs}>Email: </Text>
            <TextInput
                style={Styles.input}
                value={email}
                keyboardType='email-address'
                onChangeText={(text) => setMail(text)}
            />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.textosInputs}>Contraseña: </Text>
            <TextInput
                style={Styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
      </View>
      
      <StatusBar style="auto" />
    </View>
    )
}