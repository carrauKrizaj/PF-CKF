import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Styles from '../../Styles/review'

function Reviews(props) {

    const Item = ({ texto, puntuacion }) => (
        <View style={Styles.item}>
            <Text style={Styles.titlePoint}>Puntaje: {puntuacion}</Text>
            <Text style={Styles.title}>{texto}</Text>
        </View>
    );

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    return (
                        <Item key={item._id} texto={item.texto} puntuacion={item.puntaje}/>
                    )
                })
            }
        </ScrollView>
    )
}

export default Reviews;