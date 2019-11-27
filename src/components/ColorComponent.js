import React, {useState} from "react";
import {Text, StyleSheet , View, Button} from "react-native";


const ColorComponent=({color, OnIncrease, OnDecrease})=> {
  return <View>
    <Text>{color}</Text>
    <Button onPress={()=>OnIncrease()} title={`increase ${color}`} />
    <Button onPress={()=>OnDecrease()} title={`decrease ${color}`}/>
    </View>

};

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40
  },
  subStyle:{
      fontSize: 20
  }

});

export default ColorComponent;
