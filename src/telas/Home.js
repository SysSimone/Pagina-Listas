import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


//Toda tela é uma função, e por ser uma função nós conseguimos enviar e receber parametros através dessas funções
//nessa tela por exemplo, o StackNavigator esta enviando para a Tela Home e a Tela Detail, parametros, e eu os recebo
//criando um parametro de props, todos argumentos enviados para as telas vão ser armazenados no props.


const Home = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Button
                    title='Nova'
                    style={styles.button}
                    onPress={() =>
                        props.navigation.navigate("Nova")}
                />
            </View>
            <Button
                title='Flat_List'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("Flat_List")}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    button: {
        flex: 1,
        width: "80%",
        height: "100%",
    },
});

export default Home;


