import React from 'react'
import { Text, View } from 'react-native'
import Padrao from '../estilo/Padrao'

export default function({texto}) {
    return (
        <View>
            <Text style={Padrao.ex}>{texto}</Text>
            <Text>{texto}</Text>
        </View>

    )
}