import React, { useState, useContext, useEffect } from "react";
import { Stylesheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Constants from 'expo-constants';
//import Review from "../Review";
import GlobalContext from '../../componentes/global/contexto';
//import AddReview from "../AddReview";
import AsyncStorage from "../../utils/AsyncStorage";
import Styles from '../../Styles/titulo'

const URL_REVIEWS = "https://obscure-thicket-15756.herokuapp.com/api/reviews/title-reviews/"
const URL_ADD_MOVIE = "https://obscure-thicket-15756.herokuapp.com/usuario/add-pelicula/";
const URL_REMOVE_MOVIE = "https://obscure-thicket-15756.herokuapp.com/usuario/remove-pelicula/";
const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

export default function MovieProfile({ route }) {

    const [tabView, setTabView] = useState("Reviews");
    const [reviews, setReviews] = useState([]);
    const { dataUsuario } = useContext(GlobalContext);
    const [addBoton, setBoton] = useState("+");
    const [reviewUsuario, setReviewUsuario] = useState({ _id: "", texto: "", puntaje: 1 });

    async function buscarReviewsPelicula() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL_REVIEWS + route.params.id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
            let revUser = data.find(review => review.usuarioId == dataUsuario.usuario._id);
            if (revUser != undefined) {
                setReviewUsuario({ _id: revUser._id, texto: revUser.texto, puntaje: revUser.puntaje });
            }
        } catch (e) {
            alert("Error")
        }
    }

    async function addMovie() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ foto: route.params.foto, id: route.params.id, titulo: route.params.titulo, anio: route.params.anio })
        }
        let urlApi = URL_ADD_MOVIE + dataUsuario.usuario._id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            changeContext(data);
            await AsyncStorage.updateTitulos('@userData', data.titulos);
        } catch (e) {
            alert("Error")
        }
    }

    async function removeMovie() {
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_REMOVE_MOVIE + dataUsuario.usuario._id + "/" + route.params.id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            changeContext(data);
            await AsyncStorage.updateTitulos('@userData', data.titulos);
        } catch (e) {
            alert("Error")
        }
    }

    function changeContext(data){
        dataUsuario.usuario.titulos = data.titulos;
    }

    function showData(value) {
        if (value === "Reviews") {
            if (reviews.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reseñas!</Text>
            } else {
                return <Review data={reviews} />
            }

        } if (value === "Tu Reseña") {
            return <AddReview tituloId={route.params.id} review={reviewUsuario} />

        }
    }

    function alreadyInList() {
        const yaAgregada = dataUsuario.usuario.titulos.find(movie => movie.id == route.params.id);

        if (yaAgregada) {
            setBoton("-");
        } else {
            setBoton("+");
        }
    }

    useEffect(() => {
        buscarReviewsPelicula();
        alreadyInList();
    }, []);

    function changeAddButtom() {
        if (addBoton == "+") {
            addMovie();
            setBoton("-");
        } else {
            removeMovie();
            setBoton("+");
        }
    }

    const PreviewLayout = ({
        values,
        selectedValue,
        setSelectedValue,

    }) => (
        <View style={{ padding: 10 }}>
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

    const PreviewLayoutBoton = ({
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
                            { fontSize: 50 },
                            selectedValue === value && Styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
    return (
        <View style={{ backgroundColor: '#4A5156', flex: 2 }}>
            <View style={Styles.columm}>

                <Text style={Styles.titulo}>{route.params.titulo} </Text>
                <View style={Styles.row}>
                    <View style={{ paddingLeft: "3%" , paddingTop:5}}>
                        {
                            (route.params.foto.imageUrl) ?
                                <Image style={Styles.logo} source={{ uri: route.params.foto.imageUrl }}></Image>
                                :
                                <Image style={Styles.logo} source={{ uri: noImage }}></Image>
                        }
                    </View>
                    <View style={{ paddingLeft: "20%", paddingTop: 10 }}>
                        <PreviewLayoutBoton
                            value={addBoton}
                            selectedValue={addBoton}
                            setSelectedValue={changeAddButtom}
                        />
                    </View>
                </View>
            </View>
            <PreviewLayout
                values={["Reviews", "Tu Reseña"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />
            <View style={Styles.dataView, { flex: 4 }}>
                {showData(tabView)}
            </View>
        </View>
    );
}