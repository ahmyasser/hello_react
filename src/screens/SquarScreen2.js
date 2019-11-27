import React, {useState} from "react";color="red"
import {Text, StyleSheet , View} from "react-native";
import ColorComponent from "../components/ColorComponent"
const COLOR_INCREMENT=20;
const SquarScreen= ()=> {
  const [red, setRed]= useState(0);
  const [green, setGreen]= useState(0);
  const [blue, setBlue]= useState(0);
  console.log(red);
  return(
<View>

<ColorComponent color="red"
 OnIncrease={()=>setRed(red +COLOR_INCREMENT)}
 OnDecrease={()=>setRed(red -COLOR_INCREMENT)}/>

<ColorComponent color="green"
 OnIncrease={()=>setGreen(green +COLOR_INCREMENT)}
 OnDecrease={()=>setGreen(green -COLOR_INCREMENT)}/>

<ColorComponent color="blue"
 OnIncrease={()=>setBlue(blue +COLOR_INCREMENT)}
 OnDecrease={()=>setBlue(blue -COLOR_INCREMENT)}/>
 <View
  style= {{
    height:100,
     backgroundColor:`rgb(${red},${green},${blue})`
   }}></View>

</View>

)} ;

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40
  },
  subStyle:{
      fontSize: 20
  }

});

export default SquarScreen;
