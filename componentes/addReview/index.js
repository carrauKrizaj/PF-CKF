import React, { useState, useContext } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import GlobalContext from "../../componentes/global/contexto";
import Styles from '../../Styles/review'
import { useNavigation } from '@react-navigation/native';

const URL = "https://obscure-thicket-15756.herokuapp.com/api/reviews";

const sum = '>'
const res = '<'

function AddReview(props) {
    const [point, setPoint] = useState(props.review.puntaje)
    const [textInputValue, onChangeText] = useState(props.review.texto);
    const { dataUsuario } = useContext(GlobalContext);
    const navigation = useNavigation()

    function minusPoint() {
        if (point > 0) {
            setPoint(point - 1)
        }
    }

    function plusPoint() {
        if (point < 10) {
            setPoint(point + 1)
        }
    }

/*     function putReview() {
        if(textInputValue == ""){
            removeReview();
        }
        else{
            updateReview();
        }
    } */

    async function addReview() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ usuarioId: dataUsuario.usuario._id, tituloId: props.tituloId, texto: textInputValue, puntaje: point })
        }
        try {
            await fetch(URL, reqOption).then(res => res.json());
        } catch (e) {
            alert("Error")
        }
    }

/*     async function updateReview() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({ texto: textInputValue, puntaje: point })
        }
        let urlApi = URL + "/" + props.review._id;
        try {
            await fetch(urlApi, reqOption).then(response => response.json());
        } catch (e) {
            alert("Error")
        }
    } */

    async function removeReview() {
        let reqOption = {
            method: "DELETE",
        }
        let urlApi = URL + "/" + props.review._id;
        try {
            await fetch(urlApi, reqOption)
                        .then(navigation.navigate('Perfil'))
                        //.then(setPoint(props.review.puntaje ))
                        //.then(onChangeText('Escribí una reseña...'))
                        //.then()); 
        } catch (e) {
            console.log("Error");
        }
    }

    return (

        <View style={{ alignItems: 'center', bottom: "20%", top:"3%" }}>
            
            <TextInput
                style={Styles.addInput}
                multiline={true}
                textAlignVertical="top"
                onChangeText={text => onChangeText(text)}
                value={textInputValue}
                placeholder={(props.review._id == "")?"Escribí tu reseña...":props.review.texto}
                placeholderTextColor='#fde3f0'
            />
            
            <Text style={Styles.addPuntajeTitle}>Puntuación</Text>
            <View style={Styles.addPuntajeContainer}>
                {/* <Button
                    style={Styles.addSelectorPuntaje}
                    title="-"
                    onPress={minusPoint}
                /> */}
                <TouchableOpacity onPress={() => minusPoint()} style={Styles.addSelectorPuntaje}>
                        <Text style={Styles.addTextButton}> {res} </Text>
                </TouchableOpacity>

                <Text style={Styles.addTitlePoint}>  {(props.review._id == "")?point:props.review.puntaje}  </Text>

{/*                 <Button
                    style={Styles.addSelectorPuntaje}
                    title="+"
                    onPress={plusPoint}
                /> */}
                <TouchableOpacity onPress={() => plusPoint()} style={Styles.addSelectorPuntaje}>
                        <Text style={Styles.addTextButton}> {sum} </Text>
                </TouchableOpacity>

            </View>

            {
                (props.review._id == "") ?
                    /* <Button
                        style={Styles.addAgregarEditButton}
                        title="Agregar"
                        onPress={addReview}
                    /> */
                    (
                    <TouchableOpacity onPress={() => addReview()} style={Styles.addAgregarEditButton}>
                        <Text style={Styles.addTextButton}> Agregar </Text>
                    </TouchableOpacity>
                    )
                    :
                    /* <Button
                        style={{ backgroundColor: "#ADD8E6" }}
                        title="Editar"
                        onPress={putReview}
                    /> */
                    (
                        <TouchableOpacity onPress={() => removeReview()} style={Styles.addAgregarEditButton}>
                            <Text style={Styles.addTextButton}> Remover </Text>
                        </TouchableOpacity>
                    )
            }
        </View>

    )
}

export default AddReview;