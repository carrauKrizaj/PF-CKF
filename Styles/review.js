import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        color: '#E2EAE9',
    },
    titlePoint: {
        alignItems: 'center',
        fontSize: 19,
        color: '#E2EAE9',
    },
    addInput: {
        height: 200,
        width: "90%",
        borderWidth: 2,
        color: '#fff6f6',
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 10
    },    
    addItem: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    addTitle: {
        fontSize: 15,
        color: '#E2EAE9',
    },
    addTitlePoint: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fde3f0',
    },
    addSelectorPuntaje:{
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 5,
        minHeight: 40,
        minWidth: 40
    },
    addReviewContainer:{
        alignItems: 'center', 
        bottom: "20%", 
        top:"3%"
    },
    addPuntajeContainer:{
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10
    },
    addPuntajeTitle:{
        textAlign: 'center'
    },
    addAgregarEditButton:{
        margin: 5,
        padding: 5,
        minHeight: 40,
        minWidth: 120,
        backgroundColor: "#f70776",
        borderColor: '#c3195d',
        borderWidth: 3,
        borderRadius: 10
    },
    addTextButton:{
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default Styles;