import React from "react";
import {Text, StyleSheet , View, Image} from "react-native";


const ImageDetails = props=>{
const name = "ahmed"
  return(
    <View>
      <Text ></Text>
      <Image source= {props.src}/>
      <Text >{props.title} Score {props.score}</Text>
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

export default ImageDetails;
