import React, {useReducer} from "react";
import {Text, StyleSheet , View} from "react-native";
import ColorComponent from "../components/ColorComponent"
const COLOR_INCREMENT=20;

function reducer(state, action) {
  switch (action.changeColor) {
    case 'red':
      return {...state, red: state.red+ action.amount};
    case 'green':
      return {...state, green: state.green+ action.amount};
    case 'blue':
      return {...state, blue:state.blue+ action.amount};

    default:
      return state;
  }
}


const SquarScreen= ()=> {

  const [state, dispatch] = useReducer(reducer, {red:0 , green:0, blue:0});
  const {red, green, blue} = state;
  return(
    <View>

      <ColorComponent color="red"
        OnIncrease={()=>
          dispatch({changeColor:'red', amount:COLOR_INCREMENT})
        }
        OnDecrease={()=>
          dispatch({changeColor:'red', amount: -1*COLOR_INCREMENT})
        }/>

      <ColorComponent color="green"
        OnIncrease={()=>
          dispatch({changeColor:'green', amount:COLOR_INCREMENT})
      }
        OnDecrease={()=>
          dispatch({changeColor:'green', amount: -1*COLOR_INCREMENT})
        }/>

      <ColorComponent color="blue"
        OnIncrease={()=>
          dispatch({changeColor:'blue', amount:COLOR_INCREMENT})
        }
        OnDecrease={
          ()=>dispatch({changeColor:'blue', amount: -1*COLOR_INCREMENT})
        }/>
      <View
        style= {{
          height:200,
          backgroundColor:`rgb(${red},${green},${blue})`
        }}>
        </View>

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

export default SquarScreen;
