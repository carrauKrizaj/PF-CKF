import Constants from 'expo-constants'
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    guardarCont: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
//        position: 'fixed',
//        top: 80,
        marginLeft: 260,
        minHeight: 40,
        minWidth: 80,
        maxHeight: 40,
        maxWidth: 80,
//        marginTop: Constants.statusBarHeight+'10%',
        marginBottom: '5%'
    },
    buttonGuardar: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10
    },    
    buttonGuardarText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});

export default Styles;