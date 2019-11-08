import React from 'react';
import { AuthSession, Linking } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';

// https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5/oauth2/authorize?client_id=1e034920-213a-4862-a8d7-da1bded43317&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A19006

const APP_ID = '1e034920-213a-4862-a8d7-da1bded43317';

export default class App extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : <Text>wut</Text>}
      </View>
    );
  }

  _handlePress() {
    console.log('test');
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    //let redirectUrl = 'http://localhost:19006';
    let result = await AuthSession.startAsync({
      authUrl:
        `https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5/oauth2/authorize?client_id=1e034920-213a-4862-a8d7-da1bded43317&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    this.setState({ result });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
