import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import Styles from '../Styles'
import 'react-native-gesture-handler';

export default ({navigation})=> {

  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

    return (
    <View style={Styles.container}>
       
       <Text style={Styles.textosInputs}>Usuario: </Text>
            <TextInput
                style={Styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <Text style={Styles.textosInputs}>Nombre: </Text>
            <TextInput
                style={Styles.input}
                value={nombre}
                onChangeText={(text) => setNombre(text)}
            />

            <Text style={Styles.textosInputs}>Apellido/s: </Text>
            <TextInput
                style={Styles.input}
                value={apellido}
                onChangeText={(text) => setApellido(text)}
            />

            <Text style={Styles.textosInputs}>Email: </Text>
            <TextInput
                style={Styles.input}
                value={email}
                keyboardType='email-address'
                onChangeText={(text) => setEmail(text)}
            />

            <Text style={Styles.textosInputs}>Contraseña: </Text>
            <TextInput
                style={Styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
      
      <StatusBar style="auto" />
    </View>
    )
}