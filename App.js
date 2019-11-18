import * as React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
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
       <View style={[this.props.style]}>
        <Button title={this.props.title} onPress={this.props.onPress} color="#1784ea" />
       </View>
	   );
   }
}

class HomeScreen extends React.Component{
    render(){
	return(
		<View style={styles.container}>
      <Text style={[styles.headerText, {marginBottom: 75}]}>Delivery-E-Bot</Text>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={{}}>
          <CustomButton style={[styles.button]} title="Hot Sandwiches" onPress={()=>this.props.navigation.navigate('HotSandwiches')} />
  		    <CustomButton style={[styles.button]} title="Sides" onPress={()=>this.props.navigation.navigate('Sides')} />
          <CustomButton style={[styles.button]} title="Burgers" onPress={()=>this.props.navigation.navigate('Burgers')}/>
          <CustomButton style={[styles.button]} title="Steak Sandwiches" onPress={()=>this.props.navigation.navigate('StkSand')} />
          <CustomButton style={[styles.button]} title="Chicken Sandwiches" onPress={()=>this.props.navigation.navigate('ChknSand')}/>
          <CustomButton style={[styles.button]} title="Breakfast" onPress={()=>this.props.navigation.navigate('Breakfast')}/>
          <CustomButton style={[styles.button]} title="Pizza" onPress={()=>this.props.navigation.navigate('Pizza')}/>
          <CustomButton style={[styles.button]} title="Quesadilla" onPress={()=>this.props.navigation.navigate('Quesadilla')}/>
        </View>
      </ScrollView>
		</View>
	 );
  }
}

class HotSandwichesMenu extends React.Component{
  render(){
	   return (
		     <View style={[styles.container, {flex: 1}]}>
	         <Text style={[styles.headerText,{marginBottom: 20, alignItems: 'center'}]}>Hot Sandwiches</Text>
           <ScrollView style={{flex: 1, width: '100%'}}>
		          <View style={{}}>
  		          <CustomButton style={[styles.button]} title="Tuna Melt" onPress={()=>this.props.navigation.navigate('TunaMelt')}/>
  		          <CustomButton style={[styles.button]} title="Grilled Cheese" onPress={()=>this.props.navigation.navigate('GrilledCheese')} />
  		          <CustomButton style={[styles.button]} title="Grilled Ham and Cheese" onPress={()=>this.props.navigation.navigate("GrilledHamCheese")} />
                <CustomButton style={[styles.button]} title="BLT" onPress={()=>this.props.navigation.navigate("BLT")}/>
                <CustomButton style={[styles.button]} title="Double Decker Club" onPress={()=>this.props.navigation.navigate("DblDeckClub")}/>
                <CustomButton style={[styles.button]} title="Turkey Pretzel Melt" onPress={()=>this.props.navigation.navigate("TurkeyPretzel")}/>
                <CustomButton style={[styles.button]} title="Hamburger Sub" onPress={()=>this.props.navigation.navigate("HamSub")}/>
                <CustomButton style={[styles.button]} title="Cheeseburger Sub" onPress={()=>this.props.navigation.navigate("CheeseSub")}/>
                <CustomButton style={[styles.button]} title="Chicken Club" onPress={()=>this.props.navigation.navigate("ChknClub")}/>
              </View>
           </ScrollView>
           <Button style={[styles.button,{}]} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
         </View>
	   );
   }
}

class SidesMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Sides</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={{}}>
            <CustomButton style={[styles.button]} title="French Fries" onPress={()=>this.props.navigation.navigate('FrnchFries')}/>
            <CustomButton style={[styles.button]} title="Cheese Fries" onPress={()=>this.props.navigation.navigate('CheeseFries')}/>
            <CustomButton style={[styles.button]} title="Jay Fries" onPress={()=>this.props.navigation.navigate('JayFries')}/>
            <CustomButton style={[styles.button]} title="Curly Fries" onPress={()=>this.props.navigation.navigate('CurlyFries')}/>
            <CustomButton style={[styles.button]} title="Onion Rings" onPress={()=>this.props.navigation.navigate('OnionRings')}/>
            <CustomButton style={[styles.button]} title="Mozarella Sticks"onPress={()=>this.props.navigation.navigate('MozarellaSticks')}/>
            <CustomButton style={[styles.button]} title="Pierogies"onPress={()=>this.props.navigation.navigate('Pierogies')}/>
            <CustomButton style={[styles.button]} title="Mini Corn Dogs"onPress={()=>this.props.navigation.navigate('MiniCornDogs')}/>
            <CustomButton style={[styles.button]} title="Pretzel Poppers"onPress={()=>this.props.navigation.navigate('PretzelPoppers')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class BurgersMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Burgers</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={{}}>
            <CustomButton style={[styles.button]} title="Hamburger" onPress={()=>this.props.navigation.navigate('Hamburger')}/>
            <CustomButton style={[styles.button]} title="Cheeseburger" onPress={()=>this.props.navigation.navigate('Cheeseburger')}/>
            <CustomButton style={[styles.button]} title="Bacon Cheddar Burger" onPress={()=>this.props.navigation.navigate('BaconCheddar')}/>
            <CustomButton style={[styles.button]} title="Swiss Mushroom Burger" onPress={()=>this.props.navigation.navigate('MushroomSwiss')}/>
            <CustomButton style={[styles.button]} title="Veggie Burger" onPress={()=>this.props.navigation.navigate('VeggieBurger')}/>
            <CustomButton style={[styles.button]} title="Pizza Burger" onPress={()=>this.props.navigation.navigate('PizzaBurger')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class StkSandsMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Steak Sandwiches</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.menuGrid]}>
            <CustomButton style={[styles.button]} title="Beef and Cheese" onPress={()=>this.props.navigation.navigate('BeefCheese')}/>
            <CustomButton style={[styles.button]} title="Beef Pizza" onPress={()=>this.props.navigation.navigate('BeefPizza')}/>
            <CustomButton style={[styles.button]} title="Chicken Cheese" onPress={()=>this.props.navigation.navigate('ChknCheese')}/>
            <CustomButton style={[styles.button]} title="Chicken Ranch" onPress={()=>this.props.navigation.navigate('ChknRanch')}/>
            <CustomButton style={[styles.button]} title="Buffalo Beef" onPress={()=>this.props.navigation.navigate('BuffaloBeef')}/>
            <CustomButton style={[styles.button]} title="Buffalo Chicken" onPress={()=>this.props.navigation.navigate('BuffaloChkn')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class ChknSandsMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Chicken Sandwiches</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.menuGrid]}>
            <CustomButton style={[styles.button]} title="Crispy Chicken" onPress={()=>this.props.navigation.navigate('CrispyChkn')}/>
            <CustomButton style={[styles.button]} title="Buffalo Chicken" onPress={()=>this.props.navigation.navigate('BuffaloChkn')}/>
            <CustomButton style={[styles.button]} title="Chicken Parmesean" onPress={()=>this.props.navigation.navigate('ChknParm')}/>
            <CustomButton style={[styles.button]} title="Grilled Chicken" onPress={()=>this.props.navigation.navigate('GrilledChkn')}/>
            <CustomButton style={[styles.button]} title="Chicken Strips" onPress={()=>this.props.navigation.navigate('ChknStrips')}/>
            <CustomButton style={[styles.button]} title="Buffalo Chicken Strips" onPress={()=>this.props.navigation.navigate('BuffaloChknStrips')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class BreakfastMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Breakfast</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.menuGrid]}>
            <CustomButton style={[styles.button]} title="Egg Jay" onPress={()=>this.props.navigation.navigate('EggJay')}/>
            <CustomButton style={[styles.button]} title="French Toast Sticks" onPress={()=>this.props.navigation.navigate('FrenchToast')}/>
            <CustomButton style={[styles.button]} title="Hash Brown" onPress={()=>this.props.navigation.navigate('HashBrown')}/>
            <CustomButton style={[styles.button]} title="Jays Omelet" onPress={()=>this.props.navigation.navigate('Omelet')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class PizzaMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText,{marginBottom: 20}]}>Pizza</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.menuGrid]}>
            <CustomButton style={[styles.button]} title="Personal Pizza" onPress={()=>this.props.navigation.navigate('Personal')}/>
            <CustomButton style={[styles.button]} title="Flat Break Pizza" onPress={()=>this.props.navigation.navigate('FlatBread')}/>
            <CustomButton style={[styles.button]} title="Buffalo Chicken Ranch" onPress={()=>this.props.navigation.navigate('BuffaloChknRanch')}/>
            <CustomButton style={[styles.button]} title="Margarita Pizza" onPress={()=>this.props.navigation.navigate('Margarita')}/>
          </View>
        </ScrollView>
        <Button style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

class QuesadillaMenu extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText, {marginBottom: 20}]}>Quesadillas</Text>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={[styles.menuGrid]}>
            <CustomButton style={[styles.button]} title="Italian Chicken Wrap" onPress={()=>this.props.navigation.navigate('ItalianChkn')}/>
            <CustomButton style={[styles.button]} title="Cheese Quesadilla" onPress={()=>this.props.navigation.navigate('CheeseQuesadilla')}/>
            <CustomButton style={[styles.button]} title="Chicken Quesadilla" onPress={()=>this.props.navigation.navigate('ChknQuesadilla')}/>
            <CustomButton style={[styles.button]} title="Crispy Chicken Quesadilla" onPress={()=>this.props.navigation.navigate('CripsyChknQuesadilla')}/>
            <CustomButton style={[styles.button]} title="Buffalo Chicken Quesadilla" onPress={()=>this.props.navigation.navigate('BuffaloChknQuesadilla')}/>
            <CustomButton style={[styles.button]} title="French Bread Pizza" onPress={()=>this.props.navigation.navigate('FrenchBread')}/>
            <CustomButton style={[styles.button]} title="Garlic Cheese Bread" onPress={()=>this.props.navigation.navigate('GarlicCheeseBread')}/>
            <CustomButton style={[styles.button]} title="Cheesy Ranch Bread" onPress={()=>this.props.navigation.navigate('CheesyRanch')}/>
            <CustomButton style={[styles.button]} title="Cinnamon Sticks" onPress={()=>this.props.navigation.navigate('CinnamonSticks')}/>
            <CustomButton style={[styles.button]} title="Bread Sticks" onPress={()=>this.props.navigation.navigate('BreadSticks')}/>
          </View>
        </ScrollView>
        <Button style={{alignSelf: 'flex-end', position: 'absolute'}} title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export const MenuNavigator = createStackNavigator(
  {
    /*Categories*/
	   Home: HomeScreen,
	   HotSandwiches: HotSandwichesMenu,
	   Sides: SidesMenu,
     Burgers: BurgersMenu,
     StkSand: StkSandsMenu,
     ChknSand: ChknSandsMenu,
     Breakfast: BreakfastMenu,
     Pizza: PizzaMenu,
     Quesadilla: QuesadillaMenu,
     /*Hot Sandwiches*/
	   GrilledCheese: Food.GrilledCheese,
	   TunaMelt: Food.TunaMelt,
	   GrilledHamCheese: Food.GrilledHamCheese,
     BLT: Food.BLT,
     DblDeckClub: Food.DblDeckClub,
     TurkeyPretzel: Food.TurkeyPretzel,
     HamSub: Food.HamSub,
     CheeseSub: Food.CheeseSub,
     ChknClub: Food.ChknClub,
     /*Sides*/
     FrnchFries: Food.FrenchFries,
     CheeseFries: Food.CheeseFries,
     JayFries: Food.JayFries,
     CurlyFries: Food.CurlyFries,
     OnionRings: Food.OnionRings,
     MozarellaSticks: Food.MozarellaSticks,
     Pierogies: Food.Pierogies,
     MiniCornDogs: Food.MiniCornDogs,
     PretzelPoppers: Food.PretzelPoppers,
     /*Burgers*/
     Hamburger: Food.Hamburger,
     Cheeseburger: Food.Cheeseburger,
     BaconCheddar: Food.BaconCheddar,
     MushroomSwiss: Food.MushroomSwiss,
     VeggieBurger: Food.VeggieBurger,
     PizzaBurger: Food.PizzaBurger,
     /*Steak Sandwiches*/
     BeefCheese: Food.BeefCheese,
     BeefPizza: Food.BeefPizza,
     ChknCheese: Food.ChknCheese,
     ChknRanch: Food.ChknRanch,
     BuffaloBeef: Food.BuffaloBeef,
     BuffaloChkn: Food.BuffaloChkn,
     /*Chicken Sandwiches*/
     CrispyChkn: Food.CrispyChkn,
     //also has same buffalo chicken menu item as above, I think. ask Dining Services
     ChknParm: Food.ChknParm,
     GrilledChkn: Food.GrilledChkn,
     ChknStrips: Food.ChknStrips,
     BuffaloChknStrips: Food.BuffaloChknStrips,
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
