import React from "react"
import {Text, FlatList, View, StyleSheet } from "react-native"

const ListScreen= ()=>{
  const friends = [
    {name:"frind1", age:12},
    {name:"frind2", age:13},
    {name:"frind3", age:15},
    {name:"frind4", age:16},
    {name:"frind5", age:17},
    {name:"frind6", age:19},
    {name:"frind7", age:17},
    {name:"frind8", age:15},
    {name:"frind9", age:15}
  ]

  return(
  <FlatList
    keyExtractor={(friend)=>friend.name}
    data = {friends}
    renderItem= {
      ({item})=>
      {
        return <Text style={styles.margin}>{item.name} with age {item.age} </Text>
      }
    }
     />
  );

}


const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40
  },
  subStyle:{
      fontSize: 20
  },
  margin:{
    margin: 30,
    marginRight:50
  }

});

export default ListScreen;
