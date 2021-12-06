import React, { useContext, useState }  from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import { Const } from '../../servicios/constantes';
import GlobalContext from '../global/contexto/index'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "../../utils/AsyncStorage"

const URL_UNFOLLOW = `${Const.BASE_URL}usuario/unfollow/`;
const URL_BUSCA_USER = `${Const.BASE_URL}usuario/`;

function ScrollViewSeguidos(seguidos) {

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

    async function unfollowUser(usr){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + usr._id;
        console.log(urlApi)

        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            navigation.goBack()
         }catch(e){
             console.log(e)
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
                seguidos.data.map(function (item) {
                        return (
                            
                            <View key={item._id} style={Styles.scSeguidosItem}>
                                <Text style={Styles.scSeguidosText}> {item.username} </Text>
                                <TouchableOpacity onPress={() => buscarPerfilUsuario(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> Perfil </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => unfollowUser(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> Unfollow </Text>
                                </TouchableOpacity>
                            </View>
                        )                    
                })
            }
        </ScrollView>
    )
}

export default ScrollViewSeguidos;
