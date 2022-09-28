import React from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


/*=================================================================================================
A primeira propriedade que tenho que definir na flat_list são os dados que é uma lista (array) de objetos
cada objeto vai ser um elemento da lista, então defino o data, ele é quem  o paramerecebe e com um par de chaves,
onde eu vou definir a variavel week_list, que é a variavel que contém a lista
o segundo item a definir é o renderItem, ele é uma função, pega um item dos nossos dados 
e vai renderizar cada um na lista, e ele tem o item e o index(indice) como cada elemento da lista*/

const Flat_List = () => {
  const week_list = [
    { nome: "Segunda", key: "1" },
    { nome: "Terça", key: "2" },
    { nome: "Quarta", key: "3" },
    { nome: "Quinta", key: "4" },
    { nome: "Sexta", key: "5" },
    { nome: "Sábado", key: "6" },
    { nome: "Domingo", key: "7" },
    
  ];

  //lista de objetos, cada objeto vai ser um elemento da lista
  //a variavel item = cada elemento da lista

  //cada elemento tem que ter sua key unica, pra flatlisr diferenciar um item do outro
  //a função rendemItem vai analisar cada item da nossa flatList e aplicar essa função q vou definir no renderItem
  return (
    <View style={{flex:1}}>
     
      <StatusBar  translucent={false} barStyle="light-content" />
      <Text style={{ fontSize: 15, justifyContent:'center', alignItems:'center', fontWeight: 'bold', fontSize: 15}}> Semana </Text>
      
      <FlatList
        data={week_list}
        style={{ paddingVertical: 10, backgroundColor: 'black',  }}

        /*================================================================================================
        nessa função renderItem, ele tem o destructor que recebe como argumento o item e o index, (não vou usar o index)
        essa variavel item ela vai ser cada elemento da nossa lista a cada renderização*/

        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>{item.nome}</Text>
              
              </View>
          );
        }}
        keyExtractor={(elemento) => String(elemento.key)}
      //keyExtractor recebe uma função que é aplicada para cada item
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 5,
    padding:1,
    height: 60,
    alignItems: "flex-start",
    backgroundColor:'#fff',
    borderRadius: 10,  
    width: '100%',
    borderLef: 5,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'stretch'
  },
});
export default Flat_List;