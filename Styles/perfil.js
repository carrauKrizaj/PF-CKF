import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex: 1,
//        alignItems: 'center',
//        justifyContent: 'center',
        backgroundColor: '#141010'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
//        alignItems: 'start',
        justifyContent: 'space-around',
        maxHeight: 50,
        backgroundColor: '#680747',
//        outerWidth: 100
    },
    menuText: {
        margin: 14,
//        backgroundColor: "fuchsia",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f70776',
        padding: 5
    },
    input: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    inputBuscar: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#f70776',
        borderWidth: 3,
        color: '#ececec'
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 120,
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 20
    },
    buttonText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    buttonBack: {
        marginTop: 10,
        marginLeft: 320,
        marginRight: 10,
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 20,
        alignSelf: 'flex-end'
    },    
    buttonBackText: {
        padding: 5,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    scLogo:{
        flexDirection: "row",
        width: 300,
        height: 300,
        borderRadius: 10
    },
    scTitulo: {
        flexDirection: "row",
        fontSize: 13,
        fontWeight: 'bold',
        color: '#E2EAE9'
    },
    scItem: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
//        backgroundColor: '#a393eb',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16
    },
    scSeguidosContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    scSeguidosItem:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginLeft: 10
    },
    scSeguidosText:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    scSeguidosTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#f70776",
        marginLeft: 50,
        marginBottom: 15
    },
    scSeguidosButtons:{
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 20,
        marginLeft: 30
    },
    scSeguidosButtonsText:{
        padding: 5,
        fontSize: 8,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    editPerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start'
    },
    editPerItem: {
        flex: 2,
        marginLeft: 15,
        alignSelf: 'flex-start'
    },
    editPerText: {
        marginLeft: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#e3e3e3'
    },
    buttonGuardar: {
        marginBottom: 10,
        marginLeft: 320,
        marginRight: 10,
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 20
    }
  });

export default Styles;