import React from 'react';
import { AuthSession } from 'expo';
import { View, Text, StyleSheet, Image, Button, AsyncStorage } from 'react-native';
import { openAuthSession } from 'azure-ad-graph-expo';
import Navigator from './Nav';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
    };
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        {this.state.login ? (
          <Navigator user={this.state.login} logout={this.logout}/>
        ) : (
          <View style={styles.container}>
            <Image source={require('../assets/etown-bluejay.jpg')} style={{ width: 200, height: 200, margin: 20, borderRadius: 5 }}/>
            <Button title="Login With Etown" onPress={this._handlePressAsync} />
          </View>
        )}
      </View>
    );
  }

  async componentDidMount() {
    try {
      let login = await AsyncStorage.getItem('@LoggedInUser');
      login = JSON.parse(login);
      this.setState({ login });
    } catch (error) {}
  }

  _handlePressAsync = async () => {
    let login = await openAuthSession(azureAdAppProps);
    this.setState({ login });
    try {
      await AsyncStorage.setItem('@LoggedInUser', JSON.stringify(login));
    } catch (error) {}
  }

  logout() {
    AsyncStorage.removeItem('@LoggedInUser');
    let login = null;
    this.setState({ login });
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
    backgroundColor: '#7386bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
