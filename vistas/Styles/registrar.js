import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 100
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
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
    },
    input: {
      borderWidth: 1,
      padding: 5,
      paddingHorizontal: 50,
      borderRadius: 10
    },
    textosInputs:{
      fontWeight: 'normal',
      fontSize: 15,
      padding: 10,
      margin: 10
    }

  });

export default Styles;