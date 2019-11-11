import React from 'react';
import { AuthSession, Linking } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';

// https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5/oauth2/authorize?client_id=1e034920-213a-4862-a8d7-da1bded43317&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A19006

const APP_ID = '1e034920-213a-4862-a8d7-da1bded43317';

export default class App extends React.Component {
  state = {
    result: null,
    tokenResponse: null,
    responseJson: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={this._handlePressAsync} />
        {this.state.responseJson ? (
          <Text>{JSON.stringify(this.state.responseJson)}</Text>
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
    console.log(result.params.code);
    this.getToken(result.params.code, redirectUrl);
  }

  getToken = async (code, redirectUrl) => {
    var requestParams = {
      client_id: '1e034920-213a-4862-a8d7-da1bded43317',
      scope: 'user.read',
      code: code,
      redirect_uri: redirectUrl,
      grant_type: 'authorization_code',
      client_secret: '/?/v@JHWsa3JyWATGB0k6o9?qaNBk.fN',
    };

    var formBody = [];
    for (var p in requestParams) {
      var encodedKey = encodeURIComponent(p);
      var encodedValue = encodeURIComponent(requestParams[p]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(`https://login.microsoftonline.com/1d884f12-a0d7-42f0-8b15-3a91c853bcb5/oauth2/v2.0/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody,
    })
    .then((response) => response.json())
    .then((tokenResponse) => {
      console.log(tokenResponse);
      this.callMsGraph(tokenResponse.access_token);
      this.setState({ tokenResponse });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  callMsGraph(token) {
    fetch('https://graph.microsoft.com/v1.0/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({ responseJson })
    })
    .catch((error) => {
      console.error(error);
    });
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
