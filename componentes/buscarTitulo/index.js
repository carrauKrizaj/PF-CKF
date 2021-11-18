import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScrollView from '../ScrollViewTitulos'
import { Const } from '../../servicios/constantes';
import Styles from '../../Styles/perfil'

const URL = `${Const.BASE_URL}api/peliculas/`;

function BuscarTitulo({navigation}) {
    const [text, setText] = useState('');
    const [peliculas, setPeliculas] = useState([]);

    async function buscarApi() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + text;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            data.forEach(element => {
                element.foto = element.foto || {};
            });
            setPeliculas(data)
         }catch(e){
             alert("Error")
         }  
    }

    return (
        <View style={Styles.container}>
            <View>
            <TextInput
                style={Styles.inputBuscar}
                value={text}
                placeholder={'Ingresar un titulo...'}
                placeholderTextColor='#e3e3e3'               
                onChangeText={(text) => setText(text)}
            />

            <TouchableOpacity onPress={() => buscarApi()} style={Styles.button}>
                <Text style={Styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
            </View>
            <View>
                <ScrollView data = {peliculas}/>
            </View>
        </View>
    );
}

export default BuscarTitulo;