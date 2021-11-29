import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    logoutCont: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#4A5156',
        position: 'fixed',
        bottom: 10,
        marginLeft: 10
    },
    button: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});

export default Styles