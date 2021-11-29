import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#141010'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titulo: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#f70776',
      alignSelf: 'center',
      paddingTop: 150
    },
    background:{
      flex: 1,
      width: '100%',
      height: '100%'
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttonCont: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    button: {
      backgroundColor: "#f70776",
      borderColor: '#c3195d',
      borderWidth: 3,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#f70776',
      color: 'black',
      textAlign: 'center'
    },
    input: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#f8f8f8',
      borderWidth: 3,
      borderColor: '#c3195d',
      padding: 5,
      paddingHorizontal: 50,
      borderRadius: 10
    },
    textosInputs:{
      fontSize: 12,
      fontWeight: 'bold',
      color: '#f70776',
      padding: 10,
      margin: 10
    }

  });

export default Styles;