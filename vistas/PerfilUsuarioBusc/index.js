import React, { useState, useContext, useEffect }from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScrollViewTitulos from '../../componentes/ScrollViewTitulos';
import GlobalContext from '../../componentes/global/contexto';
import { Const } from '../../servicios/constantes';
import Review from '../../vistas/Resenas';
import AsyncStorage from '../../utils/AsyncStorage';
import Styles from '../../Styles/perfilUsuarioBusc'

const URL_REVIEWS = `${Const.BASE_URL}api/reviews/user-reviews/`;
const URL_FOLLOW = `${Const.BASE_URL}usuario/follow/`;
const URL_UNFOLLOW = `${Const.BASE_URL}usuario/unfollow/`;

export default function PerfilUsuarioBusc({route}) {

    const [tabView, setTabView] = useState("Peliculas");
    const [reviews, setReviews] = useState([]);
    const [follow, setFollow] = useState("");
    const { dataUsuario } = useContext(GlobalContext);
    const [seguidores, setSeguidores] = useState(route.params.seguidores.length);

    async function buscarReviewsUsuario() {  
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL_REVIEWS + route.params._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
         }catch(e){
             alert("Error")
         }  
    }

    async function followUser(){
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({_id:route.params._id, username:route.params.username, titulos:route.params.titulos})
        }
        let urlApi = URL_FOLLOW + dataUsuario.usuario._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            setSeguidores(prev => prev + 1);
         }catch(e){
             alert("Error")
         } 
    }

    async function unfollowUser(){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + route.params._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            setSeguidores(prev => prev - 1);
         }catch(e){
             alert("Error")
         }  
    }

    function updateContext(data){
        dataUsuario.usuario.seguidos = data.seguidos;
    }

    useEffect(() => {
        buscarReviewsUsuario();
        isFollowing();
    }, []);



    function changeFollowButtom() {
        if (follow == "Seguir") {
            followUser();
            setFollow("Dejar de seguir");
        } else {
            unfollowUser();
            setFollow("Seguir");
        }
    }

    function isFollowing() {
        const yaSiguiendo = dataUsuario.usuario.seguidos.find(user => user._id == route.params._id);

        if (yaSiguiendo) {
            setFollow("Dejar de seguir");
        } else {
            setFollow("Seguir");
        }
    }

    function showData(value) {
        if (value === "Peliculas") {
            if (route.params.titulos.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay titulos!</Text>
            } else {
            return  <ScrollViewTitulos data = {route.params.titulos}/>
            }
            
        } if (value === "Reseñas") {
            if(reviews.length == 0){
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>Este usuario no tiene reseñas.</Text>
            } else {
                return <Review data = {reviews}/>
            }
            
        }
    }

    const PreviewLayout = ({
        value,
        selectedValue,
        setSelectedValue,
    
    }) => (
        <View style={{ padding: 10, flex: 1 }}>
            <View>
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue() }}
                    style={[
                        Styles.button,
                        selectedValue === value && Styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            Styles.followButton,
                            selectedValue === value && Styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
    
            </View>
        </View>
    )
    const PreviewLayoutListado = ({
        values,
        selectedValue,
        setSelectedValue,
    
    }) => (
        <View style={{ padding: 10, flex: 1 }}>
            <View style={Styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => { setSelectedValue(value) }}
                        style={[
                            Styles.buttonList,
                            selectedValue === value && Styles.selected,
                        ]}
                    >
                        <Text
                            style={[
                                Styles.buttonLabel,
                                selectedValue === value && Styles.selectedLabel,
                            ]}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#4A5156', flex: 2  }}>
            <View >
                <Text style={Styles.userName}>{route.params.username}</Text>

                <View style={Styles.row}>
                    <PreviewLayout
                        value={follow}
                        selectedValue={follow}
                        setSelectedValue={changeFollowButtom}
                    />

                    <View style={Styles.columm}>
                        <Text style={Styles.followingCount}>{route.params.seguidos.length} </Text>
                        <Text style={Styles.TextFollow}> Seguidos</Text>
                        <Text style={Styles.followingCount}>{seguidores} </Text>
                        <Text style={Styles.TextFollow}> Seguidores</Text>

                    </View>
                </View>
            </View >
            <PreviewLayoutListado
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />

            <View style={Styles.dataView, {flex: 4}}>
                {showData(tabView)}
            </View>

            

        </View>
    );
}