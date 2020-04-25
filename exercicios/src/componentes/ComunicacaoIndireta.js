import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props => 
    <View>
        <TextInput 
            value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar}
        />    
    </View>

export default function TextoSincronizado(){
    [texto, setTexto] = useState('')

    function alterarTexto(texto){
        setTexto(texto)
    }

    return (
        <View>
            <Text style={Padrao.fonte40}>{texto}</Text>
            <Entrada 
                texto={texto}
                chamarQuandoMudar={(texto) => alterarTexto(texto)}
            />
        </View>
    );
} 