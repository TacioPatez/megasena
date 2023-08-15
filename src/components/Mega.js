import React, { Component } from 'react'
import { Button, View, Text, TextInput } from 'react-native'
import EstiloNumero, {style as Estilo} from './Estilo'

export default class Mega extends Component{

    state={
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: +qtde}) // o '+' antes da variavel transforma string em numerico
    }

    gerarNumeroDiferente = nums => {
        const novo = parseInt(Math.random() * 60) +1
        return nums.includes(novo) ? this.gerarNumeroDiferente(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)//cria um array com essa quantidade de indices
                            .fill() // preenche com vazio
                            .reduce(num => [...num, this.gerarNumeroDiferente(num)], []) // preenche o array com os numeros da funcao
                            .sort((a,b) => a-b)
        this.setState({numeros: numeros})
    }

    exibirNumeros = () => {
        var nums = this.state.numeros // lembrar de alterar
        return nums.map(num => {
            return <EstiloNumero key={num} num={num}/>
        })
    }

    render(){
        return (
            <>
                <Text style = {Estilo.txtGrande}>
                    Gerador de Números
                </Text>
                <Text style = {Estilo.txtGrande}>
                    Mega-Sena da Virada
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{borderBottomWidth:1,
                            textAlign: 'center'}}
                    placeholder='Quantidade de Números'
                    value = {this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />

                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>

                {/* <Text>
                    {this.state.numeros.join(',')/*O join faz separar por virgulas o array  } 
                </Text> */}

            </>
        )
    }
}