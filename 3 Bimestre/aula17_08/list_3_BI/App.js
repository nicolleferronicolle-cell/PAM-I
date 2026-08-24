import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image } from 'react-native';
import styles from './estilo/Estilo.js';

export default function App() {

    const personagens = [
        {
            id: '1',
            nome: 'Damon Salvatore',
            ano: '2009',
            genero: 'Vampiro • Anti-herói',
            nota: '9.8',
            imagem: 'https://i.pinimg.com/736x/7b/e4/60/7be460f1df1f1d1189ae0b646f054506.jpg'
        },
        {
            id: '2',
            nome: 'Stefan Salvatore',
            ano: '2009',
            genero: 'Vampiro • Protagonista',
            nota: '9.6',
            imagem: 'https://i.pinimg.com/736x/e3/2e/4b/e32e4b4d5b8b0bb4f86e4577120ec0f7.jpg'
        },
        {
            id: '3',
            nome: 'Elena Gilbert',
            ano: '2009',
            genero: 'Humana • Doppelgänger',
            nota: '9.5',
            imagem: 'https://i.pinimg.com/736x/10/45/06/104506c8b2efa3d3e797a86c77ce686e.jpg'
        },
        {
            id: '4',
            nome: 'Katherine Pierce',
            ano: '2009',
            genero: 'Vampira • Doppelgänger',
            nota: '9.9',
            imagem: 'https://i.pinimg.com/1200x/ab/9e/33/ab9e33efda8267edc6b2a42b2328e223.jpg'
        },
        {
            id: '5',
            nome: 'Caroline Forbes',
            ano: '2009',
            genero: 'Vampira • Amiga',
            nota: '9.7',
            imagem: 'https://i.pinimg.com/736x/99/67/b9/9967b905bd7a4dfb8812f379a4a79bcc.jpg'
        },
        {
            id: '6',
            nome: 'Bonnie Bennett',
            ano: '2009',
            genero: 'Bruxa • Médium',
            nota: '9.8',
            imagem: 'https://i.pinimg.com/736x/3f/ed/f2/3fedf2d035845d1f9249ae6acd567974.jpg'
        },
        {
            id: '7',
            nome: 'Klaus Mikaelson',
            ano: '2011',
            genero: 'Híbrido • Original',
            nota: '10.0',
            imagem: 'https://i.pinimg.com/736x/d8/6a/3f/d86a3f97b4fe76b6f03af4dad4eedb66.jpg'
        },
    ];

    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <Text style={styles.titulo}>
                 Diário de um Vampiro
            </Text>

            <Text style={styles.subtitulo}>
                Personagens de Mystic Falls
            </Text>

            <FlatList
                data={personagens}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => (

                    <View style={styles.item}>

                        <Image
                            source={{ uri: item.imagem }}
                            style={styles.imagem}
                        />

                        <View style={styles.informacoes}>

                            <Text style={styles.nome}>
                                {item.nome}
                            </Text>

                            <Text style={styles.ano}>
                                {item.ano}
                            </Text>

                            <Text style={styles.categoria}>
                                {item.genero}
                            </Text>

                            <Text style={styles.nota}>
                                {item.nota}
                            </Text>

                        </View>

                    </View>
                )}
            />

        </View>
    );
}
