import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import GlobalContext from './componentes/global/contexto';
import AsyncStorage from "./utils/AsyncStorage"

//VISTAS
import Home from './vistas/Home'
import Registrar from './vistas/Registrar'
import Perfil from './vistas/Perfil'
import Resenas from './vistas/resenas'
import Seguidos from './vistas/Seguidos'
import Seguidores from './vistas/Seguidores'
import EditPerfil from './vistas/EditPerfil';

//const [state,setState] = useState(initialState);
const Stack = createStackNavigator();

export default function App() {

const dataUsuario = useContext(GlobalContext);
const [authenticated, setAuthenticated] = useState(false)

const checkUser = async () => {
  const user = await AsyncStorage.getData('@userData')
  if (user) {
    changeContext(user);
    setAuthenticated(true)
  }
}

useEffect(() => {
  checkUser()
}, [])

function changeContext(data){
  dataUsuario.token = data.token;
  dataUsuario.usuario._id = data.usuario._id;
  dataUsuario.usuario.nombre = data.usuario.nombre;
  dataUsuario.usuario.apellido = data.usuario.apellido;
  dataUsuario.usuario.email = data.usuario.email;
  dataUsuario.usuario.username = data.usuario.username;
  dataUsuario.usuario.seguidores = data.usuario.seguidores;
  dataUsuario.usuario.seguidos = data.usuario.seguidos;
  dataUsuario.usuario.titulos = data.usuario.titulos;
}

  return (
    <GlobalContext.Provider value={{ dataUsuario, setAuthenticated }}>
      {
        (authenticated) ? 
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'Perfil'} screenOptions= {{ headerShown: false }} >

          <Stack.Screen name={'Perfil'} component={Perfil} />
          <Stack.Screen name={'Resenas'} component={Resenas} />
          <Stack.Screen name={'Seguidos'} component={Seguidos} />
          <Stack.Screen name={'Seguidores'} component={Seguidores} />
          <Stack.Screen name={'EditPerfil'} component={EditPerfil} />    

        </Stack.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'} screenOptions= {{ headerShown: false }} >

          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'Registrar'} component={Registrar} />
        </Stack.Navigator>
      </NavigationContainer>
      }
    </GlobalContext.Provider>
);
}
