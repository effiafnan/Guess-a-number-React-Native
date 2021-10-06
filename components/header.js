import React from "react";
import { View,StyleSheet,Text } from "react-native";
import colors from '../constants/colors';
import fonts from "../constants/fonts";
const Header = (props) => {
    return ( 
    <View style={styles.header}>
   
       <Text style={fonts.title}>{props.title}</Text>
       
    </View> 
    );
};

const styles = StyleSheet.create({
header : {
    width:"100%",
    paddingTop:36,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.primary,
    height:90


}

});
 
export default Header;
