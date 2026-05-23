// DetailScreen.js
// tela de detalhe do produto
// aparece quando o usuario clica em um produto na lista

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DetailScreen({ route, navigation }) {
  // route.params pega o produto enviado pela tela anterior
  const { produto } = route.params

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>{produto.nome}</Text>

      {/* card com a categoria */}
      <View style={estilos.card}>
        <Text style={estilos.label}>Categoria</Text>
        <Text style={estilos.valor}>{produto.categoria}</Text>
      </View>

      {/* card com o preco */}
      <View style={estilos.card}>
        <Text style={estilos.label}>Preco</Text>
        <Text style={estilos.preco}>R$ {produto.preco}</Text>
      </View>

      {/* botao voltar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: 'gray' }]}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 14,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  botao: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
  },
})