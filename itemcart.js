import * as React from 'react';
import {Stylesheet} from 'react-native';
import * as Food from food;
import {styles} from './styles';

export default class itemcart extends React.Component{
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={[styles.headerText]}>Hello</Text>
      </View>
    );
  }
}
