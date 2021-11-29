import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalContext from '../../componentes/global/contexto';
import AsyncStorage from "../../utils/AsyncStorage";
import Styles from '../../Styles/logout'

function Logout() {

    const {dataUsuario, setAuthenticated} = useContext(GlobalContext);
    const logout = () => {
        cleanContext();
        applyLogout();
    }

    const applyLogout = () => {
        AsyncStorage.clearAll()
        setAuthenticated(false)
      }
      
    function cleanContext(){
        dataUsuario.token = null;
        dataUsuario.usuario._id = null;
        dataUsuario.usuario.nombre = null;
        dataUsuario.usuario.apellido = null;
        dataUsuario.usuario.email = null;
        dataUsuario.usuario.username = null;
        dataUsuario.usuario.seguidores = null;
        dataUsuario.usuario.seguidos = null;
        dataUsuario.usuario.titulos = null;
    }

    return (
        <View style={Styles.logoutCont}>
            <TouchableOpacity onPress={logout} style={Styles.button}>
                <Text style={Styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Logout;