import * as React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {styles} from './styles';

export class CustomFood extends React.Component{
    render(){
	return(
		<View style={[styles.container]}>
      <Text style={[styles.headerText, {marginBottom: 50}]}>{this.props.food}</Text>
      <Image resizeMode="contain" source={this.props.image} style={{flex: 1, height:'70%', width:'100%', justifyContent: 'flex-start'}}/>
      <Text style={{fontSize: 20, color: 'white', flex: 1, alignItems: 'center', marginTop: '10%', marginLeft: '10%', marginRight: '10%'}}>
        {this.props.description}
      </Text>
      <Button title="Add to cart" style={[styles.button]} onPress={()=>alert('Added to cart')}/>
	  </View>
	);
  }
}

export class GrilledCheese extends React.Component{
  render(){
    return(
      <CustomFood food="Grilledcheese" image={require('./images/hotsandwiches/GrilledCheese.jpg')} description="Grilledcheese wym"/>
    );
  };
}
export class TunaMelt extends React.Component{
    render(){
	return(
    <CustomFood food="Tuna Melt" image={require('./images/hotsandwiches/TunaMelt.jpg')} description="Tuna sandwich forged in the heart of a star"/>
	 );
  }
}
export class GrilledHamCheese extends React.Component{
    render(){
	return(
    <CustomFood food="Grilled Ham andcheese" image={require('./images/hotsandwiches/GrilledHamCheese.jpg')} description="Grilled ham andcheese gang"/>
	 );
  }
}
export class BLT extends React.Component{
  render(){
    return(
      <CustomFood food="BLT" image={require('./images/hotsandwiches/BLT.jpg')} description="Bacon Long Teeth"/>
    );
  }
}
export class DblDeckClub extends React.Component{
  render(){
    return(
      <CustomFood food="Double Decker Club Sandwich" image={require('./images/hotsandwiches/doubledeckerclub.jpg')} description="Two full stories of fresh, moist chicken"/>
    );
  }
}
export class TurkeyPretzel extends React.Component{
  render(){
    return(
      <CustomFood food="Turkey Pretzel Melt" image={require('./images/hotsandwiches/TurkeyPretzelMelt.jpg')} description="Melted Pretzel on a Turkey roll"/>
    );
  }
}
export class HamSub extends React.Component{
  render(){
    return(
      <CustomFood food="Hamburger Sub" image={require('./images/hotsandwiches/HamburgerSub.jpg')} description="Hamburger Submarine"/>
    );
  }
}
export class CheeseSub extends React.Component{
  render(){
    return(
      <CustomFood food="Cheeseburger Sub" image={require('./images/hotsandwiches/CheeseburgerSub.jpg')} description="Cheeseburger Submarine"/>
    );
  }
}
export class ChknClub extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Club Sandwich" image={require('./images/hotsandwiches/ChickenClubSandwich.jpg')} description="Chicken Clubbing sandwich"/>
    );
  }
}

//Sides
export class FrenchFries extends React.Component{
  render(){
    return(
      <CustomFood food="French Fries" image={require('./images/sides/frenchfries.jpg')} description="Frenchy Fries yummy yummy in my tummy"/>
    );
  }
}
export class CheeseFries extends React.Component{
  render(){
    return(
      <CustomFood food="Cheese Fries" image={require('./images/sides/cheesefries.jpg')} description="Cheesy Fries"/>
    );
  }
}
export class JayFries extends React.Component{
  render(){
    return(
      <CustomFood food="Jay Fries" image={require('./images/sides/jayfries.jpg')} description="Normal fries just with ranch and cheese and bacon and stuff"/>
    );
  }
}
export class CurlyFries extends React.Component{
  render(){
    return(
      <CustomFood food="Curly Fries" image={require('./images/sides/curlyfries.jpg')} description="Curled french fries"/>
    );
  }
}
export class OnionRings extends React.Component{
  render(){
    return(
      <CustomFood food="Onion Rings" image={require('./images/sides/onionrings.jpg')} description="Rings of pure onion"/>
    );
  }
}
export class MozarellaSticks extends React.Component{
  render(){
    return(
      <CustomFood food="Mozarella Sticks" image={require('./images/sides/mozarellasticks.jpg')} description="Mozzy sticks wym"/>
    );
  }
}
export class Pierogies extends React.Component{
  render(){
    return(
      <CustomFood food="Pierogies" image={require('./images/sides/pierogies.jpg')} description="Not sure what a pierogie is tbh"/>
    );
  }
}
export class MiniCornDogs extends React.Component{
  render(){
    return(
      <CustomFood food="Mini Corn Dogs" image={require('./images/sides/corndogs.jpg')} description="Little teeny tiny corn dogs"/>
    );
  }
}
export class PretzelPoppers extends React.Component{
  render(){
    return(
      <CustomFood food="Pretzel Poppers" image={require('./images/sides/pretzelpoppers.jpg')} description="Popped pretzels"/>
    );
  }
}
//Burgers
export class Hamburger extends React.Component{
  render(){
    return(
      <CustomFood food="Hamburger" image={require('./images/burgers/hamburger.jpg')} description="Cheeseburger hold the cheese"/>
    );
  }
}
export class Cheeseburger extends React.Component{
  render(){
    return(
      <CustomFood food="Cheeseburger" image={require('./images/burgers/cheeseburger.jpg')} description="Burger with cheese"/>
    );
  }
}
export class BaconCheddar extends React.Component{
  render(){
    return(
      <CustomFood food="Bacon Cheddar Burger" image={require('./images/burgers/baconcheddar.jpg')} description="Cheeseburger that also has bacon"/>
    );
  }
}
export class MushroomSwiss extends React.Component{
  render(){
    return(
      <CustomFood food="Mushroom Swiss Burger" image={require('./images/burgers/mushroomswiss.jpg')} description="Burger with mushrooms and swiss cheese"/>
    );
  }
}
export class VeggieBurger extends React.Component{
  render(){
    return(
      <CustomFood food="Veggie Burger" image={require('./images/burgers/veggieburger.jpg')} description="Burger made out of vegetables. Vegetable bun. Vegetable patty. Only thing made of meat is the vegetables."/>
    );
  }
}
export class PizzaBurger extends React.Component{
  render(){
    return(
      <CustomFood food="Pizza Burger" image={require('./images/burgers/pizzaburger.jpg')} description="Burger made of pizza(?)"/>
    );
  }
}
//Steak Sandwiches
export class BeefCheese extends React.Component{
  render(){
    return(
      <CustomFood food="Beef and cheese steak sandwich" image={require('./images/steaksandwiches/beefcheese.jpg')} description="Beef and cheese steak sandwich"/>
    );
  }
}
export class BeefPizza extends React.Component{
  render(){
    return(
      <CustomFood food="Beef and pizza steak sanwich" image={require('./images/steaksandwiches/beefpizza.jpg')} description="Beef and pizza steak sandwich i guess"/>
    );
  }
}
export class ChknCheese extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Cheese Steak Sandwich" image={require('./images/steaksandwiches/chickencheese.jpg')} description="Chicken Cheesesteak"/>
    );
  }
}
export class ChknRanch extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken and Ranch Steak Sandwich" image={require('./images/steaksandwiches/chickenranch.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class BuffaloBeef extends React.Component{
  render(){
    return(
      <CustomFood food="Buffalo Beef" image={require('./images/steaksandwiches/buffalobeef.jpg')} description="Buffalo Beef steak sandwich"/>
    );
  }
}
export class BuffaloChkn extends React.Component{
  render(){
    return(
      <CustomFood food="Buffalo Chicken" image={require('./images/steaksandwiches/buffalochicken.jpg')} description="Buffalo Chicken Steak Sandwich"/>
    );
  }
}
//Chicken Sandwiches
export class CrispyChkn extends React.Component{
  render(){
    return(
      <CustomFood food="Crispy Chicken Sandwich" image={require('./images/chickensandwiches/crispychicken.jpg')} description="The absolute crispiest chicken sandwich ever made. Enjoyed by the Norse gods."/>
    );
  }
}
export class ChknParm extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Parmesean" image={require('./images/chickensandwiches/chickenparm.jpg')} description="Chicken Parmesean Sammich"/>
    );
  }
}
export class GrilledChkn extends React.Component{
  render(){
    return(
      <CustomFood food="Grilled Chicken Sandwich" image={require('./images/chickensandwiches/grilledchicken.jpg')} description="Grilled chicken wym"/>
    );
  }
}
export class ChknStrips extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Strips" image={require('./images/chickensandwiches/chickenstrips.jpg')} description="Strips of chicken strips"/>
    );
  }
}
export class BuffaloChknStrips extends React.Component{
  render(){
    return(
      <CustomFood food="Buffalo Chicken Strips" image={require('./images/chickensandwiches/buffalostrips.jpg')} description="Like the other chicken strips, but more buffalo-y"/>
    );
  }
}
//Breakfast
export class EggJay extends React.Component{
  render(){
    return(
      <CustomFood food="Egg Jay" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class FrenchToast extends React.Component{
  render(){
    return(
      <CustomFood food="French Toast" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class HashBrown extends React.Component{
  render(){
    return(
      <CustomFood food="Hash Browns" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class Omelet extends React.Component{
  render(){
    return(
      <CustomFood food="Omelet" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
//Pizza
export class Personal extends React.Component{
  render(){
    return(
      <CustomFood food="Personal Pizza" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class FlatBread extends React.Component{
  render(){
    return(
      <CustomFood food="Flat Bread Pizza" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
//quesadilla
export class ItalianChkn extends React.Component{
  render(){
    return(
      <CustomFood food="Italian Chicken Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class CheeseQuesadilla extends React.Component{
  render(){
    return(
      <CustomFood food="Cheese Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class ChknQuesadilla extends React.Component{
  render(){
    return(
      <CustomFood food="Chicken Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class CrispyChknQuesadilla extends React.Component{
  render(){
    return(
      <CustomFood food="Crispy Chicken Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class BuffaloChknQuesadilla extends React.Component{
  render(){
    return(
      <CustomFood food="Buffalo Chicken Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class FrenchBread extends React.Component{
  render(){
    return(
      <CustomFood food="French Bread Quesadilla" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}

export class GarlicCheeseBread extends React.Component{
  render(){
    return(
      <CustomFood food="Garlic Cheese Bread" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class CheesyRanch extends React.Component{
  render(){
    return(
      <CustomFood food="Cheesy Ranch" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class CinnamonSticks extends React.Component{
  render(){
    return(
      <CustomFood food="Cinnamon Sticks" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
export class BreadSticks extends React.Component{
  render(){
    return(
      <CustomFood food="Breadsticks" image={require('./images/placeholder.jpg')} description="Grilled cheese wym"/>
    );
  }
}
