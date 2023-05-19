import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 1,
            
    },

    descricao: { 
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 1,
        marginTop: 15,
        
    },

    buttonText: {
        color: '#262626',
        fontSize: 24,
        marginLeft: 20,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
    },

    lixo: {
        alignSelf: 'flex-end',
              
    },
})  