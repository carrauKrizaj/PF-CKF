import Constants from 'expo-constants'
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    backCont: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
//        backgroundColor: '#4A5156',
//        position: 'fixed',
//        bottom: 10,
        marginLeft: 260,
//        marginTop: Constants.statusBarHeight+'10%',
        minHeight: 40,
        minWidth: 80,
        maxHeight: 40,
        maxWidth: 80,
//        marginTop: Constants.statusBarHeight+'10%',
        marginBottom: '10%'
    },
    buttonBack: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10
    },    
    buttonBackText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});

export default Styles;