import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Nav = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    tabBarColor: '#123456',
  },
  Profile: {
    screen: ProfileScreen,
    tabBarColor: '#654321',
  },
}, {
  initialRouteName: 'Home',
  activeColor: '#ffffff',
  inactiveColor: '#000000',
  barStyle: { backgroundColor: '#4b73eb' },
});

const NavContainer = createAppContainer(Nav);

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      logout: props.logout,
    };
  }

  render() {
    return (
      <NavContainer screenProps={{ user: this.state.user, logout: this.state.logout }}/>
    );
  }
}

export default Navigator;
