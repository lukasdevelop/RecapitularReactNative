import React, {useState} from 'react'
import { View, Text, TouchableHighlight} from 'react-native'

export default function Contador() {

    [numero, setNumero] = useState(0)
    
    function maisUm(){
        setNumero(numero + 1)
    }

    function limpar(){  
        setNumero(numero = 0)
    }

    return (
        <View>
            <Text style={{fontSize: 40}}>{numero}</Text>
            <TouchableHighlight
                onPress={() => maisUm()}
                onLongPress={() => limpar()}
            >
                <Text>Incrementar/Zerar</Text>
            </TouchableHighlight>
        </View>
    );
}