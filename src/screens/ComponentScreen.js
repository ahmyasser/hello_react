import React from "react";
import {Text, StyleSheet , View} from "react-native";


const ComponentScreen = ()=>{
const name = "ahmed"
  return(
    <View>
      <Text style={styles.textStyle}>Getting started with react native</Text>
      <Text style={styles.subStyle}>my name is:  {name} </Text>
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

export default ComponentScreen;
