// ListScreen.js
// mostra a lista de todos os produtos
// dados simulados porque ainda nao tenho backend

import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
// ScrollView = permite rolar a tela quando tem muito conteudo

// produtos simulados, em um app real viriam de uma API
const produtos = [
  { id: '1', nome: 'Notebook Dell', preco: '4500', categoria: 'Eletronicos' },
  { id: '2', nome: 'Mouse Logitech', preco: '150', categoria: 'Perifericos' },
  { id: '3', nome: 'Teclado HyperX', preco: '300', categoria: 'Perifericos' },
  { id: '4', nome: 'Monitor LG', preco: '1200', categoria: 'Eletronicos' },
  { id: '5', nome: 'Headset Sony', preco: '450', categoria: 'Audio' },
]

export default function ListScreen({ navigation }) {

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>Produtos</Text>

      {/* ScrollView deixa a lista rolavel */}
      <ScrollView>
  {/* ao clicar no card vai para a tela de detalhe */}
  {produtos.map(produto => (
    <TouchableOpacity
      key={produto.id}
      style={estilos.card}
      onPress={() => navigation.navigate('Detail', { produto: produto })}
    >
      <Text style={estilos.cardNome}>{produto.nome}</Text>
      <Text style={estilos.cardCategoria}>{produto.categoria}</Text>
      <Text style={estilos.cardPreco}>R$ {produto.preco}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>

      {/* botao para cadastrar novo produto */}
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={estilos.botaoTexto}>+ novo produto</Text>
      </TouchableOpacity>

      {/* botao para voltar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: 'gray', marginTop: 8 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.botaoTexto}>voltar</Text>
      </TouchableOpacity>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  cardNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardCategoria: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  cardPreco: {
    fontSize: 15,
    color: 'green',
    marginTop: 4,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
  },
})