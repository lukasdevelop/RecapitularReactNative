import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default function Evento() {
    const [texto, setTexto] = useState('')
    //compomente nao controlado inicia com NULL

    function alterarTexto(texto){
        setTexto(texto)
    }

    return(
        <View>
            <Text style={Padrao.fonte40}>{texto}</Text>
            <TextInput value={texto}
                style={Padrao.input}
                onChangeText={(texto) => alterarTexto(texto)}
            >
            </TextInput>
        </View>
    )
}