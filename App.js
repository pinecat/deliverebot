import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthView from './AuthView'

export default function App() {
  return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <AuthView />
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
});
