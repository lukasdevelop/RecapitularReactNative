import React from 'react'
import { ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'Gutemberg', nota: 8.4},
    {id: 2, nome: 'Lucas', nota: 10},
    {id: 3, nome: 'Vania', nota: 8.0},
    {id: 4, nome: 'Patricia', nota: 5.4},
    {id: 5, nome: 'Felipe', nota: 4.4},
    {id: 6, nome: 'Giovana', nota: 4.4},
    {id: 7, nome: 'Farao', nota: 8.4},
    {id: 8, nome: 'Neguinha', nota: 9.4},
    {id: 9, nome: 'Camila', nota: 2.4},
    {id: 10, nome: 'Karen', nota: 7.4},
    {id: 11, nome: 'Gutemberg', nota: 8.4},
    {id: 12, nome: 'Lucas', nota: 10},
    {id: 13, nome: 'Vania', nota: 8.0},
    {id: 14, nome: 'Patricia', nota: 5.4},
    {id: 15, nome: 'Felipe', nota: 4.4},
    {id: 16, nome: 'Giovana', nota: 4.4},
    {id: 17, nome: 'Farao', nota: 8.4},
    {id: 18, nome: 'Neguinha', nota: 9.4},
    {id: 19, nome: 'Camila', nota: 2.4},
    {id: 20, nome: 'Karen', nota: 7.4},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 80,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //flex
    alignItems: 'center',
    //justifyContent: 'space-around'
    justifyContent: 'space-between',
    flexDirection: 'row'

}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos} renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString()}
            />
        </ScrollView>
    )
}