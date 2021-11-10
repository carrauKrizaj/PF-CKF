import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import GlobalContext from './componentes/global/contexto';

import Home from './vistas/Home'
import Registrar from './vistas/Registrar'
import Perfil from './vistas/Perfil'

//const [state,setState] = useState(initialState);
const Stack = createStackNavigator();

export default function App() {

const dataUsuario = useContext(GlobalContext);
const [authenticated, setAuthenticated] = useState(false) 

  return (
    <GlobalContext.Provider value={{ dataUsuario, setAuthenticated }}>
      {
        (authenticated) ? 
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'Perfil'} screenOptions= {{ headerShown: false }} >

          <Stack.Screen name={'Perfil'} component={Perfil} />

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
