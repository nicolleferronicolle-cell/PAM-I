import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image 
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Diário de um Vampiro
        </Text>

        <Text style={styles.frase}>
          "Entre a vida e a eternidade existem segredos que nunca devem ser revelados."
        </Text>

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/0/0a/The_Vampire_Diaries_title_card.jpg'
          }}
          style={styles.banner}
        />

        <Text style={styles.tituloSecao}>
          Sobre a série
        </Text>

        <Text style={styles.texto}>
          Mystic Falls é uma cidade cheia de mistérios, onde
          vampiros, bruxas e humanos vivem uma história marcada
          por amor, escolhas difíceis e batalhas sobrenaturais.
        </Text>


        <Text style={styles.tituloSecao}>
          Personagens
        </Text>


        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Ian_Somerhalder_2015.jpg'
            }}
            style={styles.personagem}
          />

          <Text style={styles.nome}>
            Damon Salvatore
          </Text>

          <Text style={styles.descricao}>
            Um vampiro impulsivo e misterioso. 
            Apesar de seu lado sombrio, demonstra lealdade
            e sentimentos profundos por aqueles que ama.
          </Text>

        </View>


        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nina_Dobrev_2018.jpg/440px-Nina_Dobrev_2018.jpg'
            }}
            style={styles.personagem}
          />

          <Text style={styles.nome}>
            Elena Gilbert
          </Text>

          <Text style={styles.descricao}>
            Uma jovem humana que tem sua vida transformada
            ao descobrir o mundo dos vampiros.
          </Text>

        </View>


        <View style={styles.card}>

          <Image
            source={{
              uri: 
            }}'https://br.pinterest.com/pin/788270741033637053/'
            style={styles.personagem}
          />

          <Text style={styles.nome}>
            Stefan Salvatore
          </Text>

          <Text style={styles.descricao}>
            Um vampiro com um coração bondoso que luta
            contra sua natureza para proteger quem ama.
          </Text>

        </View>


        <StatusBar style="light" />

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  fundo:{
    backgroundColor:"#0b0000",
  },

  container:{
    flex:1,
    alignItems:"center",
    padding:20,
  },

  titulo:{
    color:"#ffdddd",
    fontSize:34,
    fontWeight:"bold",
    marginTop:40,
    textAlign:"center",
  },

  frase:{
    color:"#b30000",
    fontSize:16,
    fontStyle:"italic",
    margin:20,
    textAlign:"center",
  },

  banner:{
    width:300,
    height:170,
    borderRadius:15,
    marginBottom:20,
  },

  tituloSecao:{
    color:"#990000",
    fontSize:25,
    fontWeight:"bold",
    marginTop:25,
    marginBottom:10,
  },

  texto:{
    color:"#eeeeee",
    fontSize:16,
    textAlign:"center",
    lineHeight:24,
  },

  card:{
    backgroundColor:"#250005",
    width:"100%",
    padding:20,
    borderRadius:15,
    marginTop:20,
    borderWidth:1,
    borderColor:"#660000",
    alignItems:"center",
  },

  personagem:{
    width:150,
    height:150,
    borderRadius:75,
  },

  nome:{
    color:"#ff4444",
    fontSize:22,
    fontWeight:"bold",
    marginTop:15,
  },

  descricao:{
    color:"#ddd",
    textAlign:"center",
    marginTop:10,
    fontSize:15,
  }

});
