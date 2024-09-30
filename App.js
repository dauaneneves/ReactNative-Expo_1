import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputNumber, setInputNumber] = useState('');

  const handleCheckNumber = () => {
    const userNumber = parseInt(inputNumber, 10);
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      Alert.alert('Entrada inválida', 'Digite um número de 0 a 10.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * 11);
    if (userNumber === randomNumber) {
      Alert.alert('Resultado', 'Você acertou!', [{ text: 'OK' }]);
    } else {
      Alert.alert('Resultado', `Você errou! O número era ${randomNumber}.`, [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
        placeholder="Digite um número de 0 a 10:"
      />
      <Button title="Verificar" onPress={handleCheckNumber} color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
});

