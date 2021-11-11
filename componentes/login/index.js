import React, { useContext, useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import GlobalContext from '../global/contexto';
import { Const } from '../../servicios/constantes';
import Styles from '../../vistas/Styles/login'

URL = `${Const.BASE_URL}usuario/login`;

function Login({applyAuthentication}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForm, setFlag] = useState(false)
    const {dataUsuario, setAuthenticated} = useContext(GlobalContext);

/*     const volverDeRegistro = () => {
        setFlag(false)
    } */
    
    async function loginUser() {

        let headers = new Headers();
        headers.append("Content-type", "application/json");

        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({email:email, password: password})
        }

        try{
            console.log(email)
           const data = await fetch(URL, reqOption).then(response => response.json());
           console.log(data)
            changeContext(data); 
            setAuthenticated(true);
            applyAuthentication(data);
        
        }catch(e){
            //console.log(data)
            console.log("Los datos ingresados son incorrectos")
        }
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
        <View>
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

      <View style={Styles.button}>
          <Button title='Iniciar sesión' color='#790c5a' onPress={loginUser} />
        </View>

      </View>
    );
}

export default Login;