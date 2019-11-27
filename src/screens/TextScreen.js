import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";


const TextScreen=()=> {
  const [name, setName]= useState("");
  return <View>
    <Text style={styles.textStyle}> TextScreen </Text>
    <Text style={styles.textStyle}> enter your name: </Text>

    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={newVal=>{setName(newVal)}}
    />
    <Text style={styles.textStyle}> {name} </Text>
    { (name.length<5)? <Text>{5- name.length} more characters</Text> :<Text style= {styles.textStyle}>perfect!</Text>  }
</View>
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40
  },
  subStyle:{
      fontSize: 20
  },
  input:{
    margin: 20,
    borderColor:'black',
    borderWidth:1
  }

});

export default TextScreen;
