import React from "react";
import {Text, StyleSheet , View} from "react-native";
import ImageDetails from "../components/ImageDetails"

const ImageScreen = ()=>{
const name = "ahmed"
  return(
    <View>
      <ImageDetails title="Forest" src={require('../../assets/forest.jpg')} score={23}/>
      <ImageDetails title="Beach" src={require('../../assets/beach.jpg')} score={24}/>
      <ImageDetails title="Mount" src={require('../../assets/mountain.jpg')} score={27}/>
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

export default ImageScreen;
