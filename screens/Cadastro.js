import React, { useState } from 'react';
import {StyleSheet, Button, TextInput, Text, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {

    const navegacao=useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');   
    
    return (
        <View style={style.container}>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry />
            <Button title="Entrar" onPress={() =>navegacao.navigate('Login')} />
            <View style={styles.buttonSpacing} />
            <Button title="Voltar" onPress={() =>navegacao.navigate('Home')} />
        </View>
    );
};

const style =  StyleSheet.create({
    container: {
        flex:1,
        background: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        paddingBottom: 10,
    },
    buttonSpacing: {
        marginBottom: 10, // Espaço entre os botões
    }
});

export default LoginScreen;
