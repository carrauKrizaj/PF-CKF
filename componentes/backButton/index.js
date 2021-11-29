import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/backButton'
import { useNavigation } from '@react-navigation/native'

function BackButton() {

    const navigation = useNavigation();

    return (
        <View style={Styles.backCont}>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={Styles.buttonBack}>
                <Text style={Styles.buttonBackText}>Atras</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;




