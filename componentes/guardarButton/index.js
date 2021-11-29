import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/guardarButton'
//import { useNavigation } from '@react-navigation/native'

function GuardarButton({guardarCambio}) {

//    const navigation = useNavigation();

    return (
        <View style={Styles.guardarCont}>
            <TouchableOpacity onPress={() => guardarCambio()} style={Styles.buttonGuardar}>
                <Text style={Styles.buttonGuardarText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GuardarButton;