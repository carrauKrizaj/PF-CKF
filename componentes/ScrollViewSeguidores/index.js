import React, { useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import { Const } from '../../servicios/constantes';
import GlobalContext from '../global/contexto/index'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "../../utils/AsyncStorage"
//import * as RootNavigation from '../../utils/RootNavigation'

const URL_FOLLOW = `${Const.BASE_URL}usuario/follow/`;
const URL_UNFOLLOW = `${Const.BASE_URL}usuario/unfollow/`;
const URL_BUSCA_USER = `${Const.BASE_URL}usuario/`;

function ScrollViewSeguidores(seguidores) {

    const { dataUsuario } = useContext(GlobalContext);
    const navigation = useNavigation()

    async function buscarPerfilUsuario(usr) {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL_BUSCA_USER + usr.username;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            navigatePerfilUsuario(data[0]) 
        } catch (e) {
            alert("Error")
        }
    }

    function yaSeguido(seguidor) {
        const yaSeguido = dataUsuario.usuario.seguidos.find(user => user._id == seguidor._id);
        return (yaSeguido) ? 'unfollow' : 'follow'
    }

    function followUnfollow(seguidor){
        const yaSeguido = dataUsuario.usuario.seguidos.find(user => user._id == seguidor._id);
        if(yaSeguido){
            unfollowUser(seguidor)
        } else {
            followUser(seguidor)
        }
    }

     async function followUser(seguidor){
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({_id:seguidor._id, username:seguidor.username, titulos:seguidor.titulos})
        }
        let urlApi = URL_FOLLOW + dataUsuario.usuario._id;  
        console.log(urlApi)
        try{
            let data = await fetch(urlApi, reqOption).then(res => res.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            navigation.goBack()
         }catch(e){
             console.log(e)
             alert("Error")
         } 
    }

    async function unfollowUser(seguidor){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + seguidor._id;
        try{
            let data = await fetch(urlApi, reqOption).then(res => res.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            navigation.goBack()
         }catch(e){
             alert("Error")
         }  
    } 

    function updateContext(data){
        dataUsuario.usuario.seguidos = data.seguidos;
    }


    function navigatePerfilUsuario(usr) {
        navigation.navigate("PerfilUsuarioBusc", usr);
    }

    return (
        <ScrollView>
            {           
                seguidores.data.map(function (item) {

                        return (
                            <View key={item._id} style={Styles.scSeguidosItem}>
                                <Text style={Styles.scSeguidosText}> {item.username} </Text>
                                <TouchableOpacity onPress={() => buscarPerfilUsuario(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> Perfil </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => followUnfollow(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> {yaSeguido(item)} </Text>
                                </TouchableOpacity>
                            </View>
                        )                    
                })
            }
        </ScrollView>
    )
}

export default ScrollViewSeguidores;
