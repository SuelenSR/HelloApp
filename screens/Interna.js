import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InternaScreen = () => {
    const navegacao=useNavigation();
    return (
    <View style={style.container}>
      <Text>BEM VINDO!!</Text>
      <StatusBar style="auto" />
    </View>
    );
};
const style =  StyleSheet.create({
    container: {
        flex:1,
        background: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    }
    
});
export default InternaScreen;
