import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>To share a photo from your phone wqith a friend press the button beloew!</Text>


      <TouchableOpacity
      onPress={() => alert('hello world')}
      style={{backgroundColor: 'blue',  borderRadius: 25}}>
        <Text style={styles.buttonStyle}> Pick a photo! </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 10,
    borderRadius: 50
  },
  instructions: {
    color: "blue",
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonStyle: {
    fontSize: 20,
    color: '#fff',

  }
});
