import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import GlobalContext from '../../componentes/global/contexto'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Const } from '../../servicios/constantes';
import AsyncStorage from "../../utils/AsyncStorage";

export default ({navigation})=> {

const { dataUsuario } = useContext(GlobalContext);
const [nombre,setNombre] = useState(dataUsuario.usuario.nombre)
const [apellido,setApellido] = useState(dataUsuario.usuario.apellido)
const [email,setEmail] = useState(dataUsuario.usuario.email)
const [password,setPassword] = useState(dataUsuario.usuario.password)


//hay un error en backend
async function guardarCambios() {

    let id = dataUsuario.usuario._id;

    let headers = new Headers();
    headers.append("Content-type", "application/json");

    let reqOption = {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({nombre: nombre, apellido: apellido, email: email, password})
    }
    try{
        const data = await fetch(`${Const.BASE_URL}usuario/${id}`, reqOption).then(res=>console.log(res));
        console.log(data)
        changeContext(data);
//            setAuthenticated(true);
        applyAuthentication(data);
        alert("Cambios guardados")
    }catch(e){
        console.log(e)
        alert("Los datos ingresados son incorrectos")
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
}

const applyAuthentication = (user) => {
    // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
    AsyncStorage.storeData('@userData', user)
    checkUser()
}


    return (
        <View style={Styles.container}>
            <View style={Styles.menu}>
                <TouchableOpacity
                /* NO LLEVA A NINGUN LADO - SE QUEDA EN LA MISMA VISTA */
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

            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                <Text style={Styles.buttonBackText}>Atras</Text>
            </TouchableOpacity>

            <Text style={Styles.scSeguidosTitle}>Información de cuenta</Text>

            <View style={Styles.editPerContainer}>

                <View style={Styles.editPerItem}>
                    <Text style={Styles.editPerText}>Nombre:</Text>
                    <TextInput
                        style={Styles.inputBuscar}
                        value={nombre}
                        placeholder={nombre}
                        placeholderTextColor='#e3e3e3'               
                        onChangeText={(nombre) => setNombre(nombre)}
                    />

{/*                     <TouchableOpacity onPress={() => setNombre(text)} style={Styles.button}>
                        <Text style={Styles.buttonText}>Buscar</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={Styles.editPerItem}>
                    <Text style={Styles.editPerText}>Apellido:</Text>
                    <TextInput
                        style={Styles.inputBuscar}
                        value={apellido}
                        placeholder={apellido}
                        placeholderTextColor='#e3e3e3'               
                        onChangeText={(apellido) => setApellido(apellido)}
                    />
                </View>
                <View style={Styles.editPerItem}>
                    <Text style={Styles.editPerText}>Email:</Text>
                    <TextInput
                        style={Styles.inputBuscar}
                        value={email}
                        placeholder={email}
                        placeholderTextColor='#e3e3e3'               
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={Styles.editPerItem}>
                    <Text style={Styles.editPerText}>Contraseña:</Text>
                    <TextInput
                        style={Styles.inputBuscar}
                        value={password}
                        placeholder={password}
                        secureTextEntry={true}
                        placeholderTextColor='#e3e3e3'               
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                
            </View>

            <TouchableOpacity onPress={() => guardarCambios()} style={Styles.buttonGuardar}>
                <Text style={Styles.buttonBackText}>Guardar</Text>
            </TouchableOpacity>
      
            <StatusBar style="auto" />
        </View>
    )
}