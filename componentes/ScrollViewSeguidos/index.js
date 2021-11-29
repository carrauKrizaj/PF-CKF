import React, { useContext }  from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import { Const } from '../../servicios/constantes';
import GlobalContext from '../global/contexto/index'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "../../utils/AsyncStorage"
import * as RootNavigation from '../../utils/RootNavigation'

const URL_UNFOLLOW = `${Const.BASE_URL}usuario/unfollow/`;

function ScrollViewSeguidos(seguidos) {

    const { dataUsuario } = useContext(GlobalContext);
    const navigation = useNavigation()

    async function unfollowUser(user){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + user._id;
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

    function navigateUserTitulos(user) {
        RootNavigation.navigate("TitulosUsuario", user);
    }

    function navigateUserResenas(user) {
        RootNavigation.navigate("ResenasUsuario", user);
    }

    return (
        <ScrollView>

            {                
                seguidos.data.map(function (item) {
                        return (
                            
                            <View key={item._id} style={Styles.scSeguidosItem}>
                                <Text style={Styles.scSeguidosText}> {item.username} </Text>
                                <TouchableOpacity onPress={() => navigateUserResenas(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> reseñas </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigateUserTitulos(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> titulos </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => unfollowUser(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}>unfollow</Text>
                                </TouchableOpacity>
                            </View>
                        )                    
                })
            }
        </ScrollView>
    )
}

export default ScrollViewSeguidos;
