import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Mega from './components/Mega'

export default function App() {                                
    return(
        <SafeAreaView style={style.AppEstilo}>
            <Mega qtdNumeros = {7}/>
        </SafeAreaView>
)}

const style = StyleSheet.create({
    AppEstilo: {
        backgroundColor: '#FFFFFF', //Background Branco
        flexGrow: 1,                // o vermelho ocupa a tela inteira | funciona de 0.0 a 1.0
        justifyContent: 'center',   // no meio da tela no eixo Y
        alignItems: 'center',       // no meio da tela no eixo X
        padding: 20
    }
})