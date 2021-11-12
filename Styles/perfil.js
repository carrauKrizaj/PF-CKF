import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex: 1,
//        alignItems: 'center',
//        justifyContent: 'center',
        backgroundColor: '#2c003e'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'start',
        justifyContent: 'space-around',
        maxHeight: 50,
        backgroundColor: '#54447b',
        outerWidth: 100
    },
    menuText: {
        margin: 14,
//        backgroundColor: "fuchsia",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'fuchsia',
        padding: 5
    },
    input: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 120,
        backgroundColor: "fuchsia",
        borderRadius: 20
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
        height: 300
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
    }
  });

export default Styles;