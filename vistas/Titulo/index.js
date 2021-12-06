import React, { useState, useContext, useEffect } from "react";
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Reviews from "../../componentes/reviews";
import GlobalContext from '../../componentes/global/contexto';
import AddReview from "../../componentes/addReview";
import AsyncStorage from "../../utils/AsyncStorage";
import Styles from '../../Styles/titulo'
import { Const } from '../../servicios/constantes';


const URL_REVIEWS = `${Const.BASE_URL}api/reviews/title-reviews/`
const URL_ADD_MOVIE = `${Const.BASE_URL}usuario/add-pelicula/`
const URL_REMOVE_MOVIE = `${Const.BASE_URL}usuario/remove-pelicula/`
const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

export default function Titulo({ route }) {     

    const [tabView, setTabView] = useState("Reviews");
    const [reviews, setReviews] = useState([]);
    const { dataUsuario } = useContext(GlobalContext);
    const [addBoton, setBoton] = useState("+");
    const [enLista, setEnLista] = useState(false)
    const [reviewUsuario, setReviewUsuario] = useState({ _id: "", texto: "", puntaje: 0 });

    const navigation = useNavigation()

    async function buscarReviewsPelicula() {
        let reqOption = {
            method: "GET",
        }
        console.log(route.params.id)
        let urlApi = URL_REVIEWS + route.params.id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
            let revUser = data.find(review => review.usuarioId == dataUsuario.usuario._id);
            if (revUser != undefined) {
                setReviewUsuario({ _id: revUser._id, texto: revUser.texto, puntaje: revUser.puntaje });
            }
            console.log(reviewUsuario)
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

/*     function showData() {
//        if (value === "Reviews") {
            if (reviews.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reseñas!</Text>
            } else {
                return <Reviews data={reviews} />
            }
//        }
    } */

    function showData(value) {
        if (value === "Reviews") {
            if (reviews.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reseñas!</Text>
            } else {
                return <Reviews data={reviews} />
            }

        } if (value === "Tu Reseña") {
            return <AddReview tituloId={route.params.id} review={reviewUsuario} />

        }
    }

    function alreadyInList() {
        const yaAgregada = dataUsuario.usuario.titulos.find(movie => movie.id == route.params.id);

        if (yaAgregada) {
            setBoton("-");
            setEnLista(true)
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
        <View>
            <View>
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue() }}
                    style={[
                        Styles.buttonAdd,
                        selectedValue === value && Styles.selectedAdd,
                    ]}
                >
                    <Text
                        style={[
                            { fontSize: 50 },
                            selectedValue === value && Styles.selectedLabelAdd,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );


    return (
        <View style={Styles.container}>

            <View style={Styles.row}>
                <View style={Styles.column}>
                    <View style={{ paddingLeft: "3%" , paddingTop:5}}>
                        {
                            (route.params.foto.imageUrl) ?
                                <Image style={Styles.logo} source={{ uri: route.params.foto.imageUrl }}></Image>
                                :
                                <Image style={Styles.logo} source={{ uri: noImage }}></Image>
                        }
                    </View>
                <Text style={Styles.titulo}>{route.params.titulo} ({route.params.anio})</Text>
                </View>

                <View style={Styles.buttonsContainer}>   

                    {
                        (enLista) ?
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                                <Text style={Styles.buttonBackText}>Atras</Text>
                            </TouchableOpacity>
                            <View>
                                <PreviewLayoutBoton
                                    value={addBoton}
                                    selectedValue={addBoton}
                                    setSelectedValue={changeAddButtom}
                                />
                            </View>
                        </View>
                        :
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                                <Text style={Styles.buttonBackText}>Atras</Text>
                            </TouchableOpacity>
                            <View>
                                <PreviewLayoutBoton
                                    value={addBoton}
                                    selectedValue={addBoton}
                                    setSelectedValue={changeAddButtom}
                                />
                            </View>
                        </View>
                    }

                </View>
            </View>

            <View>
                    <PreviewLayout
                        values={["Reviews", "Tu Reseña"]}
                        selectedValue={tabView}
                        setSelectedValue={setTabView}
                    />
                    <View style={Styles.dataView}>
                        {showData(tabView)}
                    </View>
            </View>

        </View>
    )
}