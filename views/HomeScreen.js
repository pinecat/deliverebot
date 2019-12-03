import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainMenu from './menus/MainMenu';

class HomeScreen extends React.Component {
  render() {
    return (
      <MainMenu />
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
