import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7386bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default HomeScreen;
