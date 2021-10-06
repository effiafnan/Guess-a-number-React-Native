import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";

const GuessList = (props) => {

    const {Data} = props;

    return ( 
        
        <View style={styles.guessContainter}>
        <ScrollView contentContainerStyle={styles.ListStyle}>
        <Text style={styles.guessTitle}>Your Previous Guesses</Text>
        
              {Data.map((value)=>
                <View style={styles.guessNumberContainter}>
                <Text style={styles.guessText}>{value}</Text>
                </View>
              
              )}
                       
        </ScrollView>
        </View> 
        
     );
}

const styles = StyleSheet.create({
guessTitle:{
    fontFamily:"open-sans",
    marginVertical:5
},
guessContainter:{
    
    alignItems:"center"
},
ListStyle:{
    flexGrow:1,
    alignItems:"center"
    
},

guessNumberContainter:{
    flexDirection:"row",
    width:300,
    maxWidth:"80%",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"black",
    borderRadius:15,
    padding:7,
    borderWidth:1,
    marginVertical:5,
    fontFamily:"open-sans"
},
guessText:{
    fontSize:12,
    fontFamily:"open-sans-bold"
},

});
 
export default GuessList;