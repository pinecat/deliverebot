import React from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage, BackHandler } from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.screenProps,
      name: null,
    };
  }

  parseName() {
    let str2Parse = this.state.info.user.displayName;
    let result = str2Parse.split(',');
    let name = result[1] + " " + result[0];
    this.setState({ name });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Profile Screen</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.info.user.mail}</Text>
        <Text style={{paddingBottom: 10}}>{this.state.info.user.officeLocation}</Text>
        <Button title="Logout" onPress={this.state.info.logout} />
      </View>
    );
  }

  componentDidMount() {
    this.parseName();
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
    paddingBottom: 10,
  },
});

export default ProfileScreen;
