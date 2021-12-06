import Constants from 'expo-constants'
import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#141010'
    },
    titulo: {
        marginTop: 5,
        textAlign: 'center',
        marginLeft: 20,
        fontSize: 12,
        color: "white",
        fontWeight: "bold"
    },
    logo: {
        width: 200,
        height: 250,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10
    },  
    dataView: {
/*         justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%' */
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    column: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    userName: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        alignItems: 'center',
        paddingHorizontal: "13%",
        textAlign: "center",
        color: "white",
        paddingTop: 10,
        fontWeight: "bold",
    },
    TextFollow: {
        alignItems: 'center',
        textAlign: "center",
        color: "white",
        fontWeight: "300",
        paddingRight: 10
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
        width: 50,
        height: 25,
        borderRadius: 5,
        borderWidth: 3,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        textAlign: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        paddingHorizontal: 6,
        paddingVertical: 6
    },
    buttonAdd:{
        minHeight: 100,
        minWidth: 100,
        borderRadius: 10,
        borderWidth: 3,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        fontSize: 50,
        fontWeight: 'bold',
        paddingBottom: 6
    },
    selectedAdd: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 10,
        minHeight: 100,
        minWidth: 100,
        fontSize: 50,
        fontWeight: 'bold',
        paddingBottom: 6
    },
    selectedLabelAdd: { // Color del texto
        color: "black",
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 50,
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
    buttonsContainer:{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
//        paddingLeft: "5%", 
//        paddingTop: 10
    },
    buttonBack: {
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 10,
        minHeight: 20,
        minWidth: 80,
        marginVertical: 10
    },    
    buttonBackText: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});

export default Styles;