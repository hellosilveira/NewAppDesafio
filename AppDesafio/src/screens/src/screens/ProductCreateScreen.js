// ProductCreateScreen.js
// Tela para cadastrar um novo produto
// O usuário preenche nome, preço e escolhe uma categoria

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native'

// Lista de categorias disponíveis para escolher
const CATEGORIAS = ['Eletrônicos', 'Periféricos', 'Áudio', 'Móveis', 'Outro']

export default function ProductCreateScreen({ navigation }) {

  const [nome, setNome] = useState('')           // guarda o nome digitado
  const [preco, setPreco] = useState('')         // guarda o preço digitado
  const [categoria, setCategoria] = useState('') // guarda a categoria escolhida

  // Função chamada ao pressionar Salvar
  function salvar() {

    // Verifica se todos os campos foram preenchidos
    if (nome === '') {
      Alert.alert('Preencha o nome do produto!')
      return
    }
    if (preco === '') {
      Alert.alert('Preencha o preço!')
      return
    }
    if (categoria === '') {
      Alert.alert('Selecione uma categoria!')
      return
    }

    // Se chegou aqui, tudo está preenchido — simula o salvamento
    Alert.alert('✅ Cadastrado!', nome + ' foi salvo com sucesso!', [
      { text: 'Ver lista', onPress: () => navigation.navigate('Lista') },
      { text: 'Cadastrar outro', onPress: () => {
          setNome('')       // limpa os campos
          setPreco('')
          setCategoria('')
        }
      },
    ])
  }

  return (
    <ScrollView style={estilos.tela}>

      <Text style={estilos.titulo}>Novo Produto</Text>

      {/* Campo nome */}
      <Text style={estilos.label}>Nome *</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Ex: Notebook Dell"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo preço */}
      <Text style={estilos.label}>Preço *</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Ex: 1500"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"   // abre teclado de números
      />

      {/* Seleção de categoria */}
      <Text style={estilos.label}>Categoria *</Text>

      {/* map cria um botão para cada categoria da lista */}
      {CATEGORIAS.map(cat => (
        <TouchableOpacity
          key={cat}
          style={[
            estilos.categoriaOpcao,
            // se esta categoria foi selecionada, muda a cor
            categoria === cat && estilos.categoriaSelecionada,
          ]}
          onPress={() => setCategoria(cat)} // salva a categoria escolhida
        >
          <Text style={categoria === cat ? estilos.categoriaTextoAtivo : estilos.categoriaTexto}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Botão salvar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#4CAF50', marginTop: 24 }]}
        onPress={salvar}
      >
        <Text style={estilos.botaoTexto}>💾 Salvar</Text>
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#aaa', marginTop: 8, marginBottom: 40 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 24,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 6,
  },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 20,
  },
  categoriaOpcao: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  categoriaSelecionada: {
    backgroundColor: '#e8f5e9',  // verde claro quando selecionado
    borderColor: '#4CAF50',
  },
  categoriaTexto: {
    fontSize: 14,
    color: '#555',
  },
  categoriaTextoAtivo: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})