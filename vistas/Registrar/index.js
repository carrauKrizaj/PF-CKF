import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import Styles from '../Styles/registrar'
import 'react-native-gesture-handler';
import { Const } from '../../servicios/constantes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto';

URL = `${Const.BASE_URL}/usuario/signup`;

export default ({navigation})=> {

  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const { dataUsuario, setAuthenticated } = useContext(GlobalContext);

    async function registrarUsuario() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ nombre, apellido, email: email, username, password })
        }

        try {
            const data = await fetch(URL, reqOption).then(response => response.json());
            applyAuthentication(data);
        } catch (e) {
            console.log("Email y/o usuario existente");
        }
    }

    const applyAuthentication = (user) => {
        // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
        AsyncStorage.storeData('@userData', user)
        checkUser()
    }

    const checkUser = async () => {
        const user = await AsyncStorage.getData('@userData')
        if (user) {
          changeContext(user);
          setAuthenticated(true)
        }
    }

    function changeContext(data) {
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

            <TouchableOpacity onPress={registrarUsuario} style={Styles.touchOpa}>
                <Text>Registrarse</Text>
            </TouchableOpacity>

      <View style={Styles.button}>
          <Button title='Home' color='#005792' onPress={()=> navigation.navigate('Home')}/>
      </View>

      <StatusBar style="auto" />
    </View>
    )
}