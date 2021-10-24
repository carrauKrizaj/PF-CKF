import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/imagenes/background.jpg')} resizeMode="cover" style={styles.background}>
      
{/*       <Text style={styles.titulo}> Cinemagram </Text> */}

      <View style={styles.buttonContainer}> 
        <View style={styles.button}>
          <Button title='Iniciar sesión' color='#790c5a' /* onPress={} *//>
        </View>
        <View style={styles.button}>
          <Button title='Registrarme' color='#e6739f' /* onPress={} *//>
        </View>
      </View>

      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
/*     backgroundColor: '#c3bef0', */
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 100
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 150
  },
  background:{
    flex: 1,
    width: '100%',
    height: '100%'
  },
  button: {
    paddingHorizontal: 10
  }
});
