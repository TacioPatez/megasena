import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[style.txtGrande, style.Numero]}>
                {num}
            </Text>
        </View>
    )
}


export const style = StyleSheet.create({ 
    txtGrande: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Numero: {
        color: '#FFF',
        marginTop: 7
    }
})