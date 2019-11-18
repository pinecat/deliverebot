import React from 'react';
import { AuthSession, Linking } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import { openAuthSession } from 'azure-ad-graph-expo';

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
        ) : <Text>Nothing to see here.</Text>}
      </View>
    );
  }

  _handlePressAsync = async () => {
    let result = await openAuthSession(azureAdAppProps);
    this.setState({ result });
  }
}

const azureAdAppProps = {
  clientId: '1e034920-213a-4862-a8d7-da1bded43317',
  tenantId: '1d884f12-a0d7-42f0-8b15-3a91c853bcb5',
  scope: 'user.read',
  redirectUrl: AuthSession.getRedirectUrl(),
  clientSecret: '/?/v@JHWsa3JyWATGB0k6o9?qaNBk.fN',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
