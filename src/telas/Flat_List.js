import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';


/*=================================================================================================
A primeira propriedade que tenho que definir na flat_list são os dados que é uma lista (array) de objetos
cada objeto vai ser um elemento da lista, então defino o data, ele é quem  o paramerecebe e com um par de chaves,
onde eu vou definir a variavel week_list, que é a variavel que contém a lista
o segundo item a definir é o renderItem, ele é uma função, pega um item dos nossos dados 
e vai renderizar cada um na lista, e ele tem o item e o index(indice) como cada elemento da lista*/



const Flat_List = () => {
    const week_list = [
    { nome: "Lila", key: "1" },
    { nome: "Pirata", key: "2" },
    { nome: "Charlote", key: "3" },
    { nome: "Henry", key: "4" },
    { nome: "Dog", key: "5" },
    { nome: "Cleitin", key: "6" },
    { nome: "Pasquim", key: "7" },
    { nome: "Mel", key: "8" },
    { nome: "Nêssa", key: "9" },
    { nome: "Pasquim", key: "10" },
    { nome: "Mel", key: "11" },
    { nome: "Nêssa", key: "12" },
    { nome: "Lila", key: "13" },
    { nome: "Pirata", key: "14" },
    { nome: "Charlote", key: "15" },
    { nome: "Henry", key: "16" },
    { nome: "Dog", key: "17" },
    { nome: "Cleitin", key: "18" },
    { nome: "Pasquim", key: "19" },
    { nome: "Mel", key: "20" },
    { nome: "Nêssa", key: "21" },
    { nome: "Pasquim", key: "22" },
    { nome: "Mel", key: "23" },
    { nome: "Nêssa", key: "24" },


  ];

  //lista de objetos, cada objeto vai ser um elemento da lista
  //a variavel item = cada elemento da lista

  //cada elemento tem que ter sua key unica, pra flatlisr diferenciar um item do outro
  //a função rendemItem vai analisar cada item da nossa flatList e aplicar essa função q vou definir no renderItem
  return (
    <View>
      <Text>Name week</Text>
      <FlatList
        data={week_list}

        /*================================================================================================
        nessa função renderItem, ele tem o destructor que recebe como argumento o item e o index, (não vou usar o index)
        essa variavel item ela vai ser cada elemento da nossa lista a cada renderização*/

        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <Text>{item.nome}</Text>
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
    borderWidth: 3,
    borderColor: "black",
    height: 50,
    width: 400,
    justifyContent: "center",
    alignItems: "center",

  },
});
export default Flat_List;