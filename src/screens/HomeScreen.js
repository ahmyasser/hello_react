import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
console.log();
  return(<View>
    <Text style={styles.text}>hi there</Text>
    <Button
    onPress={()=>navigation.navigate("Component")}
    title="Component Screen"/>
    <Button
    onPress={()=>navigation.navigate("List")}
    title="List Screen"/>
    <Button
    onPress={()=>navigation.navigate("Image")}
    title="Image Screen"/>
    <Button
    onPress={()=>navigation.navigate("Counter")}
    title="Counter Screen"/>
    <Button
    onPress={()=>navigation.navigate("Color")}
    title="Color Screen"/>
    <Button
    onPress={()=>navigation.navigate("Squar")}
    title="Squar Screen"/>
    <Button
    onPress={()=>navigation.navigate("Text")}
    title="Text Screen"/>
    <Button
    onPress={()=>navigation.navigate("Box")}
    title="Box Screen"/>
</View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  margin:{
    margin: 30,
  }

});

export default HomeScreen;
