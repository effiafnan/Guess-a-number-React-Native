import React from "react";
import { StyleSheet,View} from "react-native";

const Card = (props) => {
    return ( 
        <View style={{...styles.Card,...props.style }} >{props.children}</View>
     );
}
 
const styles = StyleSheet.create({
Card:{
    shadowColor:"black",
    shadowOpacity:0.40,
    shadowOffset:{height:2,width:4},
    elevation:8,
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    marginVertical:10,
    alignItems:"center",
    
}
})
export default Card;