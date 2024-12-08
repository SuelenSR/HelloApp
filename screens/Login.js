import React, { useState } from 'react';
import { Button, TextInput, Text, View,  } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
const navegacao=useNavigation();


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value={email}onChangeText={setEmail} />
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha}secureTextEntry />
            <Button title='Entrar' onPress={() =>navegacao.navigate('Interna')} />
            <Button title='Voltar' onPress={() =>navegacao.navigate('Home')} />
        </View>
    );
};

export default LoginScreen;



        
