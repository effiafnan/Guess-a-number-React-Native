import React from "react";
import colors from "../constants/colors";
import { StyleSheet,Text,View } from "react-native";

const NumberContainer = (props) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        padding:20,   
        alignItems:"center",
        justifyContent:"center",
        borderWidth:2,
        borderColor:colors.secondary,
        borderRadius:10,
        marginVertical:10

    },
    number:{
        fontSize:20
    }
})
 
export default NumberContainer;