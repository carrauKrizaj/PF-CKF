import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput } from 'react-native';
import Styles from '../../Styles/registrar'
import 'react-native-gesture-handler';
import { Const } from '../../servicios/constantes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto';
import AsyncStorage from "../../utils/AsyncStorage";
import { navigate } from '../../utils/RootNavigation';

//URL = `${Const.BASE_URL}usuario/signup`;

export default ({navigation})=> {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { dataUsuario, setAuthenticated } = useContext(GlobalContext);
//  const [authenticated, setAuthenticated] = useState(false)

    async function registrarUsuario() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");

        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ nombre: nombre, apellido: apellido, email: email, username: username, password })
        }

        try {
            const data = await fetch(`${Const.BASE_URL}usuario/signup`, reqOption).then(res => console.log(res));
            //console.log(data)
            applyAuthentication(data);
            console.log('Usuario registrado')
            navigation.navigate('Home')
        } catch (e) {
            console.log(e)
            console.log("Email y/o usuario existente");
        }
    }

    const checkUser = async () => {
      const user = await AsyncStorage.getData('@userData')
      if (user) {
        changeContext(user);
        setAuthenticated(true)
      }
    }
    
    const applyAuthentication = (user) => {
      // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
      AsyncStorage.storeData('@userData', user)
      checkUser()
    }
    
    function changeContext(data){
      dataUsuario.token = data.token;
      dataUsuario.usuario._id = data.usuario._id;
      dataUsuario.usuario.nombre = data.usuario.nombre;
      dataUsuario.usuario.apellido = data.usuario.apellido;
      dataUsuario.usuario.email = data.usuario.email;
      dataUsuario.usuario.username = data.usuario.username;
      dataUsuario.usuario.seguidores = data.usuario.seguidores;
      dataUsuario.usuario.seguidos = data.usuario.seguidos;
      dataUsuario.usuario.titulos = data.usuario.titulos;
    }    

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


            <View style={Styles.buttonsContainer}>
                <View style={Styles.buttonCont}>
                    <TouchableOpacity onPress={registrarUsuario} style={Styles.button}>
                        <Text style={Styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.buttonCont}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={Styles.button}>
                        <Text style={Styles.buttonText}>Atras</Text>
                    </TouchableOpacity>
                </View>
            </View>    

      <StatusBar style="auto" />
    </View>
    )
}