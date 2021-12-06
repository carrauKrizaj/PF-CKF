import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Styles = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor: '#141010'
    },
    dataView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 100,
        marginTop: '10%',
//        marginBottom: '0%',
        minWidth: '100%'
/*         flex: 4,
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '5%',
        marginBottom: '10%' */
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    columm: {
        flex: 2,
        flexDirection: "column",
        flexWrap: "wrap",
    },
    infoUsuario: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'center',
        paddingTop: 10,
        marginVertical: 10,
        marginHorizontal: 15
    },
    userName: {
        marginTop: Constants.statusBarHeight+10,
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        textAlign: "center",
        color: '#f70776',
        fontWeight: "bold",
        marginLeft: 3
    },
    TextFollow: {
        textAlign: "center",
        color: "white",
        fontWeight: 'bold',
        marginLeft: 10
    },
    followButton: {
        height: 40,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    buttonList: {
        height: 40,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#fec8d8',
        backgroundColor: "#d291bc",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    button: {
        minWidth: 60,
        minHeight: 30,
        borderRadius: 5,
        borderWidth: 3,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        textAlign: "center",
        marginHorizontal: "1%",
        paddingHorizontal: 6,
        paddingBottom: 6
    },
    selected: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5
    },
    selectedLabel: { // Color del texto
        color: "black",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 15
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "white",
    },
    peliResVacias:{
        marginBottom: 300,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E2EAE9'
    }

});

export default Styles;