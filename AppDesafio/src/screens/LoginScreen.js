// LoginScreen.js
// primeira tela do app
// o usuario digita email e senha para entrar
// os dados sao simulados, nao tem servidor real

import React, { useState } from 'react'
// useState = cria variaveis que atualizam a tela quando mudam

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
// View = container como uma div no HTML
// Text = texto na tela
// TextInput = campo para digitar
// TouchableOpacity = botao que reage ao toque
// StyleSheet = estilos como CSS
// Alert = popup de aviso

export default function LoginScreen({ navigation }) {
  // navigation = permite navegar para outras telas

  // variaveis para guardar o que o usuario digita
  const [email, setEmail] = useState('')  // guarda o email digitado
  const [senha, setSenha] = useState('')  // guarda a senha digitada

  // funcao chamada quando o botao Entrar é pressionado
  function entrar() {

    // verifica se os campos estao vazios
    if (email == '' || senha == '') {
      Alert.alert('Atencao', 'preencha os campos')
      return // para aqui se estiver vazio
    }

    // verifica se email e senha estao corretos
    if (email == 'heloize@email.com' && senha == '123456') {
      navigation.navigate('Home') // vai para a tela Home
    } else {
      Alert.alert('Erro', 'email ou senha errado')
    }
  }

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>App Produtos</Text>

      {/* campo de email */}
      <Text>Email</Text>
      <TextInput
        style={estilos.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}   // atualiza o email a cada letra digitada
        autoCapitalize="none"     // nao coloca maiuscula automatica
      />

      {/* campo de senha */}
      <Text>Senha</Text>
      <TextInput
        style={estilos.input}
        placeholder="senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}    // esconde os caracteres da senha
      />

      {/* botao de entrar */}
      <TouchableOpacity style={estilos.botao} onPress={entrar}>
        <Text style={estilos.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <Text style={estilos.dica}>use: heloize@email.com / 123456</Text>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,                  // ocupa a tela toda
    padding: 20,
    justifyContent: 'center', // centraliza tudo verticalmente
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,           // borda ao redor do campo
    borderColor: '#ccc',
    borderRadius: 6,          // cantos arredondados
    padding: 10,
    marginTop: 6,
    marginBottom: 16,
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',     // centraliza o texto dentro do botao
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
  },
  dica: {
    marginTop: 16,
    color: '#aaa',
    textAlign: 'center',
    fontSize: 12,
  },
})