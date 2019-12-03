import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';

const Nav = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel:"Home",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={25} color="#323aa8" />
      ),
      tabBarOptions: {
        showIcon: true,
      },
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel:"Cart",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-cart" size={25} color="#323aa8" />
      ),
      tabBarOptions: {
        showIcon: true,
      },
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel:"Profile",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-body" size={25} color="#323aa8" />
      ),
      tabBarOptions: {
        showIcon: true,
      },
    },
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
      logout: props.logout
    };
  }

  render() {
    return (
      <NavContainer screenProps={{ user: this.state.user, logout: this.state.logout }} />
    );
  }
}

export default Navigator;
