import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/card'

const App = () => {
  return (
    <>
    <ScrollView style={style.page}>
    <View>
        <View style={style.container_cabecalho}>
            <Image source={require('./assets/eu.jpg')} style={style.foto}/>
            <Text style={style.nome}>Luiz Augusto</Text>
            <Text style={style.funcao}>Estudante de ADS</Text>
            <View style={style.redes_sociais}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/dred1-hub')}>
                    <Icon name="github" size={30} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100009376274418')}>
                    <Icon name="facebook" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/luiz-augusto-261749163/')}>
                    <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
            </View>
        </View>
        
        <Card titulo = "Formação Academica">
        <Text style={style.card_content_text}>Auxiliar de escritorio em geral.</Text>
        </Card>
        <Card titulo = "Experiencia Proficional">
        <Text style={style.card_content_text}>Análise e Desenvolvimento de Sistemas.</Text>
        </Card>
        
        </View>
    </ScrollView>
    </>
  );
};

const style = StyleSheet.create ({
page:{
  backgroundColor: '#E7E7E7',
  flex: 1,

},
container_cabecalho: {
    marginTop: 30,
alignItems: 'center',
justifyContent: 'center',
},
foto:{
  width: 250,
  height: 280,
  borderRadius: 110,
},
nome:{
   fontSize: 26,
   fontWeight:'bold',
   marginTop: 10,
},
funcao:{
  fontWeight:'bold',
  color: '#939393',
  marginBottom: 5,
},
redes_sociais:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
},
card_content_text: {
  color: '#939393',
  marginBottom: 10,
}
})

export default App;