import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { dataUsuario } from '../../componentes/global/contexto';
import ScrollView from '../ScrollViewUsuarios'
import { Const } from '../../servicios/constantes';
import Styles from '../../Styles/perfil'

const URL = `${Const.BASE_URL}usuario/`;

function BuscarUsuario({navigation}) {
    const [text, setText] = useState('');
    const [user, setUser] = useState([]);

    async function buscarApi() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + text;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            data = data.filter(item => item._id != dataUsuario.usuario._id);
            setUser(data)
        } catch (e) {
            alert("Error")
        }
    }

    return (
        <View style={Styles.container}>
            <View>
                <TextInput
                    style={Styles.inputBuscar}
                    value={text}
                    placeholder={'Ingresar un nombre de usuario...'}
                    placeholderTextColor='#e3e3e3'
                    onChangeText={(text) => setText(text)}
                />

                <TouchableOpacity onPress={() => buscarApi()} style={Styles.button}>
                    <Text style={Styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <ScrollView data = {user} />
            </View>
        </View>
    );
}

export default BuscarUsuario;