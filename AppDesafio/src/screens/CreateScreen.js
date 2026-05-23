// CreateScreen.js
// tela para cadastrar um novo produto
// o usuario preenche nome, preco e escolhe uma categoria
// salvamento simulado, nao vai para banco de dados real

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native'

// categorias disponiveis para escolher
const categorias = ['Eletronicos', 'Perifericos', 'Audio', 'Moveis', 'Outro']

export default function CreateScreen({ navigation }) {

  const [nome, setNome] = useState('')           // guarda o nome digitado
  const [preco, setPreco] = useState('')         // guarda o preco digitado
  const [categoria, setCategoria] = useState('') // guarda a categoria escolhida

  // funcao chamada quando o botao salvar é pressionado
  function salvar() {

    // verifica se todos os campos foram preenchidos
    if (nome == '') {
      Alert.alert('coloca o nome do produto')
      return
    }
    if (preco == '') {
      Alert.alert('coloca o preco')
      return
    }
    if (categoria == '') {
      Alert.alert('escolhe uma categoria')
      return
    }

    // se chegou aqui tudo esta preenchido
    Alert.alert('produto salvo!', nome + ' foi cadastrado com sucesso')

    // limpa os campos depois de salvar
    setNome('')
    setPreco('')
    setCategoria('')
  }

  return (
    <ScrollView style={estilos.container}>

      <Text style={estilos.titulo}>Cadastrar Produto</Text>

      {/* campo nome */}
      <Text>Nome</Text>
      <TextInput
        style={estilos.input}
        placeholder="nome do produto"
        value={nome}
        onChangeText={setNome}
      />

      {/* campo preco */}
      <Text>Preco</Text>
      <TextInput
        style={estilos.input}
        placeholder="preco"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"   // abre teclado so com numeros
      />

      {/* selecao de categoria */}
      <Text>Categoria</Text>

      {/* map cria um botao para cada categoria */}
      {categorias.map(cat => (
        <TouchableOpacity
          key={cat}
          style={[
            estilos.categoriaOpcao,
            // muda a cor se essa categoria estiver selecionada
            categoria == cat && { backgroundColor: '#d4edda', borderColor: 'green' }
          ]}
          onPress={() => setCategoria(cat)}
        >
          <Text style={{ color: categoria == cat ? 'green' : '#333' }}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}

      {/* botao salvar */}
      <TouchableOpacity
        style={[estilos.botao, { marginTop: 24 }]}
        onPress={salvar}
      >
        <Text style={estilos.botaoTexto}>salvar</Text>
      </TouchableOpacity>

      {/* botao voltar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: 'gray', marginTop: 8, marginBottom: 40 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.botaoTexto}>voltar</Text>
      </TouchableOpacity>

    </ScrollView>
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 6,
    marginBottom: 16,
    fontSize: 15,
  },
  categoriaOpcao: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
  },
})