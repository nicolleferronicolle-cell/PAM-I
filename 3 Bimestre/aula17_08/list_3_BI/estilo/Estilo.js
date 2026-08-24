import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#090909',
        padding: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 30,
        marginBottom: 8,
    },

    subtitulo: {
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 25,
    },

    item: {
        width: '100%',
        backgroundColor: '#171717',
        borderRadius: 15,
        marginBottom: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#6B1111',
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },

    imagem: {
        width: '100%',
        height: 420,
        resizeMode: 'cover',
    },

    informacoes: {
        padding: 15,
    },

    nome: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },

    ano: {
        fontSize: 15,
        color: '#B22222',
        fontWeight: 'bold',
        marginBottom: 6,
    },

    categoria: {
        fontSize: 14,
        color: '#9B59B6',
        fontWeight: '600',
        marginBottom: 10,
    },

    nota: {
        fontSize: 16,
        color: '#D4AF37',
        fontWeight: 'bold',
    },

});

export default styles;
