// App.js
// arquivo principal, junta todas as telas e configura a navegacao

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// importo cada tela que criei
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from './src/screens/ListScreen'
import CreateScreen from './src/screens/CreateScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // NavigationContainer habilita a navegacao entre telas
    <NavigationContainer>
      <Stack.Navigator
  initialRouteName="Login"
  screenOptions={{ headerShown: false }}
>
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="List" component={ListScreen} />
  <Stack.Screen name="Create" component={CreateScreen} />
  <Stack.Screen name="Detail" component={DetailScreen} />
</Stack.Navigator>
    </NavigationContainer>
  )
}