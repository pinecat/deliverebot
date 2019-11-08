import * as React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {styles} from './styles';

export class CustomFood extends React.Component{
    render(){
	return(
		<View style={[styles.container]}>
      <Text style={[styles.headerText]}>{this.props.food}</Text>
      <View style={{width:'90%', height:'50%', backgroundColor: '#2889fc'}}>
        <Image source={this.props.image} style={{height:'97%', width:'97%', margin: 5}}/>
      </View>
      <Text style={{fontSize: 15, color: 'white'}}>
        {this.props.description}
      </Text>
		</View>
	);
  }
}

export class GrilledCheese extends React.Component{
  render(){
    return(
      <CustomFood food="Grilled Cheese" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  };
}
export class TunaMelt extends React.Component{
    render(){
	return(
    <CustomFood food="Tuna Melt" image={require('./images/TunaMelt.jpg')} description="Tuna sandwich forged in the heart of a star"/>
	 );
  }
}
export class GrilledHamCheese extends React.Component{
    render(){
	return(
    <CustomFood food="Grilled Ham and Cheese" image={require('./images/GrilledHamCheese.jpg')} description="Grilled ham and cheese gang"/>
	 );
  }
}
export class BLT extends React.Component{
  render(){
    return(
      <CustomFood food="BLT" image={require('./images/GrilledCheese.jpg')} description="Burger Long Teeth"/>
    );
  }
}
export class DblDeckClub extends React.Component{
  render(){
    return(
      <CustomFood food="Double Decker Club Sandwich" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
export class TurkeyPretzel extends React.Component{
  render(){
    return(
      <CustomFood food="Turkey Pretzel Melt" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
export class HamSub extends React.Component{
  render(){
    return(
      <CustomFood food="Hamburger Sub" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
export class CheeseSub extends React.Component{
  render(){
    return(
      <CustomFood food="Cheeseburger Sub" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
export class ChckClub extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Club Sandwich" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
export class FrenchFries extends React.Component{
  render(){
    return(
      <CustomFood food="French Fries" image={require('./images/GrilledCheese.jpg')} description="Grilled fuckin cheese wym"/>
    );
  }
}
