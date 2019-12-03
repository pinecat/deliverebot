import React from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage, BackHandler } from 'react-native';

let order = [];

class CartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
    this.reloadCart = this.reloadCart.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  reloadCart() {
    this.forceUpdate();
  }

  clearOrder() {
    order = [];
    this.forceUpdate();
  }

  placeOrder() {

  }

  componentDidMount() {
    let order = global.order;
    this.setState({ order });
    console.log(order);
  }

  render() {
    let items = [];
    order.forEach(item => {
      items.push(<Text>{item}</Text>);
    });

    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Cart Screen</Text>

        {items}

        <Text>{'\n'}</Text>
        <Button title="Reload Cart" onPress={this.reloadCart} />
        <Text>{'\n'}</Text>
        <Button title="Clear Order" onPress={this.clearOrder} />
        <Text>{'\n'}</Text>
        <Button title="Place Order" onPress={this.placeOrder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7386bd',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 100,
  },
  headText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export const addToCart = (item) => {
  order.push(item);
  alert('Order added to cart.  You may to reload your cart for all your items to show up.');
}

export default CartScreen;
