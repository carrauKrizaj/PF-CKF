import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    guardarCont: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'fixed',
        top: 80,
        marginLeft: 290
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