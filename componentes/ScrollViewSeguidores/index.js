import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import { Const } from '../../servicios/constantes';
import GlobalContext from '../global/contexto/index'
//import AsyncStorage from "../../utils/AsyncStorage"
import { useNavigation } from '@react-navigation/native';

const URL_FOLLOW = `${Const.BASE_URL}usuario/follow/`;
const URL_UNFOLLOW = `${Const.BASE_URL}usuario/unfollow/`;


function ScrollViewSeguidores(seguidores) {

    const { dataUsuario } = useContext(GlobalContext);
    const navigation = useNavigation()

    //SE VA A USAR EN PERFIL DEL USUARIO BUSCADO
/*     async function followUser(user){
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({_id:user._id, username:user.username, titulos:user.titulos})
        }
        let urlApi = URL_FOLLOW + dataUsuario.usuario._id;  
        console.log(urlApi)
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            //setSeguidores(prev => prev + 1);
         }catch(e){
             console.log(e)
             alert("Error")
         } 
    }

    async function unfollowUser(user){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + user._id;
        try{
            let data = await fetch(urlApi, reqOption).then(res => res.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            //setSeguidores(prev => prev - 1);
         }catch(e){
             alert("Error")
         }  
    }

    function changeFollowButtom(user) {
        if (follow == "seguir") {
            followUser(user);
            setFollow("no seguir"); 
        } else {
            unfollowUser(user);
            setFollow("seguir");
        }
    } */

    //NO SE VA A USAR
/*      function isFollowing(usuario) {
        const [follow, setFollow] = useState("");
        const yaSiguiendo = dataUsuario.usuario.seguidos.find(user => user._id == usuario._id);

        if (yaSiguiendo) {
            setFollow("no seguir");
        } else {
            setFollow("seguir");
        }
        return follow
    } */

    function updateContext(data){
        dataUsuario.usuario.seguidos = data.seguidos;
    }

/*     useEffect(() => {
        isFollowing();
    }, []);
 */

    return (
        <ScrollView>
            {           
                seguidores.data.map(function (item) {

                        return (
                            <View key={item._id} style={Styles.scSeguidosItem}>
                                <Text style={Styles.scSeguidosText}> {item.username} </Text>
                                <TouchableOpacity /* onPress={() => funcionVerResenas} */ style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> reseñas </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate(item)} style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> perfil </Text>
                                </TouchableOpacity>
                            </View>
                            /*                             <TouchableOpacity onPress={() => navigateMovieProfile(item)} key={item.id}>
                                <Item title={item.titulo} anio={item.anio} foto={item.foto.imageUrl} />
                            </TouchableOpacity> */
                        )                    
                })
            }
        </ScrollView>
    )
}

export default ScrollViewSeguidores;
