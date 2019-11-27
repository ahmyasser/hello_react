import React, {useState} from "react";
import {Text, StyleSheet , View, Button, FlatList} from "react-native";


const ColorScreen= ()=> {
  const [counter, setCounter]= useState(0);
  const [colors, setColor]= useState([]);
  return(
    <View>
      <Text style={styles.textStyle}> Color {counter}</Text>
      <Button
      title="Add Color"
      onPress={()=>{
        setCounter(counter + 1 )
        setColor([...colors, RandomColor()])
        console.log(colors)
      }}/>
      <FlatList
        keyExtractor={item=>item}
        data = {colors}
        renderItem= {
          ({item})=>
          {
            return <View style={{ height:100, backgroundColor:item }}></View>
          }
        }/>

    </View>
)} ;
const RandomColor= ()=>{
  const red = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  return `rgb(${red} , ${green} , ${blue})`;

}
const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40
  },
  subStyle:{
      fontSize: 20
  }

});

export default ColorScreen;
