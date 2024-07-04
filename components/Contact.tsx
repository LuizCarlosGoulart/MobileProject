import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contato</Text>
      <TextInput placeholder="Seu nome" placeholderTextColor="#ccc" style={styles.input} />
      <TextInput placeholder="Seu email" placeholderTextColor="#ccc" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Sua mensagem" placeholderTextColor="#ccc" style={styles.input} multiline />
      <Button title="Enviar" onPress={() => {}} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2f2f2f',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    fontFamily: 'Roboto_400Regular',
    color: '#fff',
  },
});

export default Contact;
