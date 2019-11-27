import React, {useState} from "react";
import {Text, StyleSheet , View, Button} from "react-native";


const CounterScreen= ()=> {
  const [counter, setCounter]= useState(0);
  return(
    <View>
      <Text style={styles.textStyle}> Count {counter}</Text>
      <Button
      title="increase"
      onPress={()=>{
        setCounter(counter + 1 )
      }}/>
      <Button
      title="decrease"
      onPress={()=>{
        setCounter(counter - 1 )
      }}/>
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

export default CounterScreen;
