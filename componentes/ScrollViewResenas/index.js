import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/review'
import { useNavigation } from '@react-navigation/native'
import { Const } from '../../servicios/constantes';

const URL = `${Const.BASE_URL}api/peliculas/`;

function ScrollViewResenas(props) {

/* 
FUNCION BUSCA TITULO

async function buscaTitulo (tituloId) {
    const [titulo, setTitulo] = useState('No disponible')

    let reqOption = {
        method: "GET",
    }
    let urlApi = URL + tituloId;
    try{
        let data = await fetch(urlApi, reqOption)
                    .then(response => response.json());
                    console.log(data[0].titulo)
        setTitulo(data[0].titulo)
     }catch(e){
        console.log(e)
     }  
     return titulo
} */

    const Item = ({ titulo, texto, puntuacion }) => (
        <View style={Styles.item}>
            <Text style={Styles.titlePoint}> Titulo: {titulo} </Text>
            <Text style={Styles.titlePoint}> Puntaje: {puntuacion} </Text>
            <Text style={Styles.title}> {texto} </Text>
        </View>
    );

    return (
        <ScrollView>
            {
            props.data.map(function (item) {
                    return (
                        <Item key={item._id} titulo={item.tituloId} texto={item.texto} puntuacion={item.puntaje}/>
                    )
                })
            }
        </ScrollView>
    )
}

export default ScrollViewResenas;