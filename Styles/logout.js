import Constants from 'expo-constants'
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    logoutCont: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
//        position: 'absolute',
//        marginTop: Constants.statusBarHeight+'10%',
        marginBottom: '5%'
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