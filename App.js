import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AzureAD } from 'react-aad-msal';
import { authProvider } from './authProvider';

export default function App() {
  return (
        <View style={styles.container}>
            <AzureAD provider={authProvider} forceLogin={true}>
                <Text>Hello World!</Text>
            </AzureAD>
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
