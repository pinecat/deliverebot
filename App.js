import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import AuthView from './AuthView'

export default function App() {
  return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <AuthView />
        </View>
    );
=======
import Login from './views/Login';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
>>>>>>> 5a3ce7d26097cc8b886cfce8a84c72d3e32d46a3
}
