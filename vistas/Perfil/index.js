import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/perfil'
import 'react-native-gesture-handler';
import BuscarTitulo from '../../componentes/buscarTitulo'
import BuscarUsuario from '../../componentes/buscarUsuario';
import MenuPerfil from '../../componentes/menuPerfil'
import Logout from '../../componentes/logout'

export default ({navigation})=> {

    const [tabView, setTabView] = useState('Titulos');

    function showData(value) {
        if (value === 'Titulos') {
            return <BuscarTitulo navigation={navigation}/>
        } if (value === 'Usuarios') {
            return <BuscarUsuario navigation={navigation}/>

        }
    }

    const PreviewLayout = ({
        values,
        selectedValue,
        setSelectedValue,

    }) => (
        <View style={{ padding: 10 }}>
            <View style={Styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => { setSelectedValue(value) }}
                        style={[
                            Styles.buttonList,
                            selectedValue === value && Styles.selected,
                        ]}
                    >
                        <Text
                            style={[
                                Styles.buttonLabel,
                                selectedValue === value && Styles.selectedLabel,
                            ]}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <View style={Styles.container}>
            
            <MenuPerfil navigation={navigation} style={Styles.menu}/>

{/*         VERSION ORIGINAL
            <BuscarTitulo navigation={navigation}/>

            <BuscarUsuario navigation={navigation}/> 
*/}

            <View>
                    <PreviewLayout
                        values={['Titulos', 'Usuarios']}
                        selectedValue={tabView}
                        setSelectedValue={setTabView}
                    />
                    <View style={{flex:1, flexDirection: 'column', minHeight: '100%'}}>
                        {showData(tabView)}
                    </View>
            </View>


            <Logout />
      
            <StatusBar style="auto" />
        </View>
    )
}