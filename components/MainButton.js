import React from "react";
import { Text,View, TouchableOpacity,StyleSheet } from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
    return ( 
        <TouchableOpacity onPress={props.onPress} >
        <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
        </View>
            
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:colors.primary,
        borderRadius:25
    },
    buttonText:{
        fontFamily:'open-sans',
        margin:10,
        color:"white",
        fontSize:15
    }

});
 
export default MainButton;