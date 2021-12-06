import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import { useNavigation } from '@react-navigation/native'

const Item = ({ username }) => (
    <View style={Styles.scItem}>
        <Text style={Styles.scTitulo}>{username}</Text>
    </View>
);

function ScrollViewUsuario(props) {

    const navigation = useNavigation();

    function navigateUserProfile(usuario) {
        navigation.navigate("PerfilUsuarioBusc", usuario);
    }

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    return (
                        <TouchableOpacity onPress={() => navigateUserProfile(item)} key={item._id}>
                            <Item username={item.username} />
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default ScrollViewUsuario;