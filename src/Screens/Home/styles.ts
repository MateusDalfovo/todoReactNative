import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    
    },

    logo: {
        width: 100,
        height: 30,
        alignSelf: 'center',
        marginTop: 30
    },

    icone: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },

    fundo: {
        backgroundColor: '#000',
        marginBottom: 90,
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 20,
        marginLeft: 25,
        top: '2%'
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25,
        top: '2%'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: -20,
        
    },

    listEmptyTextCima: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    listEmptyTextBaixo: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    },

    linha: {
        borderWidth: 0.5,
        borderColor: '#262626',
        margin: '10%',
        marginTop: '10%'
    },

    checkboxConteiner:{
        flexDirection: 'row',
        marginBottom: 10,
    },

    checkbox:{
        alignSelf: 'center',
    },

    counter:{
        width: "100%",
        flexDirection: "row",
        marginTop: "-8%",
        margin: "10%"
    },

    textCriadas:{
        fontWeight: "bold",
        color: "#4aa4d9",
    },

    textDone:{
        fontWeight: "bold",
        color: "#7e80f5"
    },

    counterDisplay:{
        height: 20,
        borderRadius: 15,
        backgroundColor: "#333333",
        marginRight: "37%",
        marginLeft: 3,
        color: "#fff",
        fontSize: 10,
        textAlign: "center"
    },

    countBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 19,
        width: 25,
        marginLeft: 8,
        borderRadius: 999,
      },

      

});

