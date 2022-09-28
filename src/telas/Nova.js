import React from 'react';
import { View, Text } from 'react-native';

//Toda tela é uma função, e por ser uma função nós conseguimos enviar e receber parametros através dessas funções
//nessa tela por exemplo, o StackNavigator esta enviando para a Tela Home e a Tela Detail, parametros, e eu os recebo
//criando um parametro de props, todos argumentos enviados para as telas vão ser armazenados no props.

const Nova = () => {
    const WEEK_LIST = [
        { nome: "Segunda", key: "1" },
        { nome: "Terça", key: "2" },
        { nome: "Quarta", key: "3" },
        { nome: "Quinta", key: "4" },
        { nome: "Sexta", key: "5" },
        { nome: "Sabado", key: "6" },
        { nome: "Domingo", key: "7" },
    ];
    return (
        <View style={styles.container}>          
                {WEEK_LIST.map((item, index) => {
                    return (
                        <View key={index} style={styles.container}>
                            <Text>{item.nome}</Text>
                        </View>
                    )
                })}
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      borderWidth: 1,
      borderColor: "blue",
      marginTop: 5,
      padding: 1,
      height: 60,
      alignItems: "center",
      backgroundColor: '#fff',
      borderRadius: 10,
      width: '100%',
      borderLef: 5,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });
export default Nova;