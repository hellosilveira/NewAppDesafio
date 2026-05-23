// ProductListScreen.js
// Tela que mostra a lista de produtos
// Tem um campo de busca para filtrar por nome

import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

// Produtos simulados — em um app real viriam de uma API
const PRODUTOS = [
  { id: '1', nome: 'Notebook Dell', preco: '4500', categoria: 'Eletrônicos' },
  { id: '2', nome: 'Mouse Logitech', preco: '150', categoria: 'Periféricos' },
  { id: '3', nome: 'Teclado HyperX', preco: '300', categoria: 'Periféricos' },
  { id: '4', nome: 'Monitor LG', preco: '1200', categoria: 'Eletrônicos' },
  { id: '5', nome: 'Headset Sony', preco: '450', categoria: 'Áudio' },
]

export default function ProductListScreen({ navigation }) {

  const [busca, setBusca] = useState('') // guarda o texto digitado na busca

  // filter percorre a lista e retorna só os produtos cujo nome contém a busca
  const produtosFiltrados = PRODUTOS.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <View style={estilos.tela}>

      <Text style={estilos.titulo}>Produtos</Text>

      {/* Campo de busca */}
      <TextInput
        style={estilos.campo}
        placeholder="Buscar produto..."
        value={busca}
        onChangeText={setBusca}
      />

      {/* FlatList renderiza a lista de produtos */}
      <FlatList
        data={produtosFiltrados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          // card de cada produto
          <View style={estilos.card}>
            <Text style={estilos.cardNome}>{item.nome}</Text>
            <Text style={estilos.cardCategoria}>{item.categoria}</Text>
            <Text style={estilos.cardPreco}>R$ {item.preco}</Text>
          </View>
        )}
      />

      {/* Botão para ir ao cadastro */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={estilos.botaoTexto}>+ Novo Produto</Text>
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#aaa', marginTop: 8 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>

    </View>
  )
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCategoria: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  cardPreco: {
    fontSize: 15,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 4,
  },
  botao: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
})