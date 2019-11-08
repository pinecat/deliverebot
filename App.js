import * as React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Food from './food';
import {styles} from './styles';
/**
  *
  */
class CustomButton extends React.Component{
  constructor(props){
	   super(props);
  }
  render(){
	   return(
       <View style={this.props.style}>
		     <TouchableHighlight onPress={this.props.onPress}>
		       <Text style={{flex: 1, alignItems: 'stretch'}}>{this.props.title}</Text>
	       </TouchableHighlight>
       </View>
	   );
   }
}

class HomeScreen extends React.Component{
    render(){
	return(
		<View style={styles.container}>
		  <Text style={styles.headerText}>Deliver-E-Bot</Text>
		   <View style={styles.menuGrid}>
        <CustomButton style={styles.button} title="Hot Sandwiches" onPress={()=>this.props.navigation.navigate('HotSandwiches')} />
		    <CustomButton style={styles.button} title="Sides" onPress={()=>this.props.navigation.navigate('Sides')} />
        <CustomButton style={styles.button} title="Burgers" />
        <CustomButton style={styles.button} title="Steak Sandwiches" />
        <CustomButton style={styles.button} title="Chicken Sandwiches" />
        <CustomButton style={styles.button} title="Breakfast" />
        <CustomButton style={styles.button} title="Egg White Options" />
        <CustomButton style={styles.button} title="Pizza" />
        <CustomButton style={styles.button} title="Quesadilla Station" />
		  </View>
		</View>
	);
    }
}

class HotSandwichesMenu extends React.Component{
  render(){
	   return (
		     <View style={styles.container}>
		       <Text style={styles.headerText}>Hot Sandwiches</Text>
		       <View style={styles.menuGrid}>
		         <CustomButton style={[styles.button]} title="Tuna Melt" onPress={()=>this.props.navigation.navigate('TunaMelt')}/>
		         <CustomButton style={[styles.button]} image={require('./images/GrilledCheese.jpg')} title="Grilled Cheese" onPress={()=>this.props.navigation.navigate('GrilledCheese')} />
		         <CustomButton style={[styles.button]} title="Grilled Ham and Cheese" onPress={()=>this.props.navigation.navigate("GrilledHamCheese")} />
             <CustomButton style={[styles.button]} title="BLT" onPress={()=>this.props.navigation.navigate("BLT")}/>
             <CustomButton style={[styles.button]} title="Double Decker Club" onPress={()=>this.props.navigation.navigate("DblDeckClub")}/>
             <CustomButton style={[styles.button]} title="Turkey Pretzel Melt" onPress={()=>this.props.navigation.navigate("TurkeyPretzel")}/>
             <CustomButton style={[styles.button]} title="Hamburger Sub" onPress={()=>this.props.navigation.navigate("HamSub")}/>
             <CustomButton style={[styles.button]} title="Cheeseburger Sub" onPress={()=>this.props.navigation.navigate("CheeseSub")}/>
             <CustomButton style={[styles.button]} title="Chicken Club" onPress={()=>this.props.navigation.navigate("ChckClub")}/>
           </View>
		       <CustomButton style={[styles.button]} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
         </View>
	   );
   }
}

class SidesMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={styles.headerText}>Sides</Text>
        <View style={styles.menuGrid}>
          <CustomButton style={[styles.button]} title="French Fries" onPress={()=>this.props.navigation.navigate('FrnchFries')}/>
          <CustomButton style={[styles.button]} title="Cheese Fries" />
          <CustomButton style={[styles.button]} title="Jay Fries" />
          <CustomButton style={[styles.button]} title="Curly Fries" />
          <CustomButton style={[styles.button]} title="Onion Rings" />
          <CustomButton style={[styles.button]} title="Mozarella Sticks"/>
          <CustomButton style={[styles.button]} title="Pierogies"/>
          <CustomButton style={[styles.button]} title="Mini Corn Dogs"/>
          <CustomButton style={[styles.button]} title="Pretzel Poppers"/>
        </View>
      </View>
    );
  }
}

const MenuNavigator = createStackNavigator(
  {
	   Home: HomeScreen,
	   HotSandwiches: HotSandwichesMenu,
	   Sides: SidesMenu,
	   GrilledCheese: Food.GrilledCheese,
	   TunaMelt: Food.TunaMelt,
	   GrilledHamCheese: Food.GrilledHamCheese,
     BLT: Food.BLT,
     DblDeckClub: Food.DblDeckClub,
     TurkeyPretzel: Food.TurkeyPretzel,
     HamSub: Food.HamSub,
     CheeseSub: Food.CheeseSub,
     ChckClub: Food.ChckClub,
     FrnchFries: Food.FrenchFries,
  },
  {
	   initialRouteName: 'Home',
  }
);

export default class App extends React.Component{
  render(){
	    return (<AppContainer/>);
     }
}

const AppContainer = createAppContainer(MenuNavigator);
