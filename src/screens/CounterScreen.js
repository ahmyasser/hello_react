import React, {useReducer} from "react";
import {Text, StyleSheet , View, Button} from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {counter: state.counter + 1};
    case 'decrement':
      return {counter: state.counter - 1};
    default:
      return state;
  }
}
const CounterScreen= ()=> {
   const [state, dispatch] = useReducer(reducer, {counter:0});
   const {counter}=state; 
  return(
    <View>
      <Text style={styles.textStyle}> Count {counter}</Text>
      <Button
      title="increase"
      onPress={()=>{
        dispatch({type:'increment'})
      }}/>
      <Button
      title="decrease"
      onPress={()=>{
        dispatch({type:'decrement'})
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
