import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../../utils/RootNavigation'
import Styles from '../../Styles/perfil'

const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

const Item = ({ title, anio, foto }) => (
    <View style={Styles.scItem}>
        {
            (foto) ?
                <Image style={Styles.scLogo} source={{uri: foto}}></Image>
                :
                <Image style={Styles.scLogo} source={{uri: noImage}}></Image>
        }
        <Text style={Styles.scTitulo}>{title} ({anio})</Text>
    </View>
);

function ScrollViewMovies(props) {

    function navigateMovieProfile(pelicula) {
        RootNavigation.navigate("PerfilPelicula", pelicula);
    }

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    if (item.foto != null) {
                        return (
                            <TouchableOpacity onPress={() => navigateMovieProfile(item)} key={item.id}>
                                <Item title={item.titulo} anio={item.anio} foto={item.foto.imageUrl} />
                            </TouchableOpacity>
                        )
                    }
                    else {
                        return (
                            <TouchableOpacity onPress={() => navigateMovieProfile(item)} key={item.id}>
                                <Item title={item.titulo} anio={item.anio} />
                            </TouchableOpacity>
                        )
                    }
                })
            }
        </ScrollView>
    )
}

export default ScrollViewMovies;