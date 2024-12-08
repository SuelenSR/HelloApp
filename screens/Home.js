import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const navegacao=useNavigation();
    return (
        <View style={style.container}>
      <Text>Olá Mundo!</Text>
      <Button title="Ir para Login" onPress={() =>navegacao.navigate('Login')} />
      <Button title="Cadastre-se" onPress={() =>navegacao.navigate('Cadastro')} />

      <StatusBar style="auto" />
    </View>
    );
};
const style =  StyleSheet.create({
    container: {
        flex:1,
        background: '#fff',
        alignItems: 'center',
        justifycontent:'center',
    }
    
});
export default HomeScreen;