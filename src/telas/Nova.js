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
        <View style={{ flex: 1, marginTop: 50 }}>
            <View style={{ flex: 1 }}>

                {WEEK_LIST.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.nome}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}
export default Nova;