import React from "react";
import {Text, StyleSheet, View} from "react-native";


const BoxScreen=()=> {
  return(
    <View style={styles.viewStyle}>
    <View style={{borderColor:'white',borderWidth:2,height:130,width:130,backgroundColor:'blue'}}></View>
    <View style={{borderColor:'white',borderWidth:2,height:130,width:130,backgroundColor:'red',top:130}}></View>
    <View style={{borderColor:'white',borderWidth:2,height:130,width:130,backgroundColor:'green'}}></View>
   </View>
  )
};

const styles = StyleSheet.create({
  textStyle:{
    borderColor:'red',
    borderWidth:1,
    fontSize: 10
  },
  subStyle:{
      borderColor:'white',
      borderWidth:2,
      height:130,
      width:130
  },
  viewStyle:{
    justifyContent: 'space-around',
    flexDirection: 'row'
  }


});

export default BoxScreen;
