import React from "react";
import {View} from 'react-native'
//import MyComponent from './my-component'
import Variables from './variables'

export default function App(){
  /*return (
      <MyComponent/>
  );*/
return(
  <View style={{paddingTop:50, padding:20}}>
      <Variables/>
  </View>
)
}