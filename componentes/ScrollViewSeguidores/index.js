import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../../utils/RootNavigation'
import Styles from '../../Styles/perfil'

function ScrollViewSeguidores(props) {

    return (
        <ScrollView>

            {                
                props.data.map(function (item) {
                        return (
                            
                            <View key={item._id} style={Styles.scSeguidosItem}>
                                <Text style={Styles.scSeguidosText}> {item.username} </Text>
                                <TouchableOpacity /* onPress={() => funcionVerResenas} */ style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}>Resenas</Text>
                                </TouchableOpacity>
                                <TouchableOpacity /* onPress={() => funcionUnfollow} */ style={Styles.scSeguidosButtons}>
                                    <Text style={Styles.scSeguidosButtonsText}> {/* (!siguiendo) ? 'Seguir' : 'No seguir' */} </Text>
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