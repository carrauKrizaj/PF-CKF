import Constants from 'expo-constants'
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141010'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        minHeight: 70,
        maxHeight: 70,
        backgroundColor: '#680747',
        position: 'relative',
        paddingTop: 10,
        marginBottom: 10
    },
    menuText: {
        margin: 14,
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
        borderRadius: 10
    },
    buttonText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    scLogo:{
        flexDirection: "row",
        width: 300,
        height: 300,
        borderRadius: 10
    },
    scTitulo: {
        flexDirection: "row",
        fontSize: 17,
        fontWeight: 'bold',
        color: '#E2EAE9'
    },
    scItem: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        padding: 10,
        marginHorizontal: 16
    },
    scSeguidosContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-start'
    },
    scSeguidosItem:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        paddingVertical: 5,
        marginLeft: '3%'
    },
    scSeguidosText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    scSeguidosTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#f70776",
        marginLeft: 50,
        marginBottom: 15,
        marginTop: 10
    },
    scSeguidosButtons:{
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5,
        marginLeft: 30,
        minHeight: 10,
        minWidth: 10,
        alignSelf: 'center'
    },
    scSeguidosButtonsText:{
        padding: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    editPerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start',
        minHeight: 350
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
    selected: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 5
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "white",
    },
    selectedLabel: { // Color del texto
        color: "black",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 15
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap"
    }
  });

export default Styles;