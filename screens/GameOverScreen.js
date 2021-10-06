import React from "react";
import {Text,View,StyleSheet, Button,Image} from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
const GameOverScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <Text style={fonts.title}>Game over!! you won</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                fadeDuration={2000}
                resizeMode="cover"
                 source={require('../assets/success.png')}
                // source={{uri:'https://www.voicesofyouth.org/sites/voy/files/images/2020-07/success.jpg'}}
                  />
            </View>
            
            <Text style={fonts.regular,styles.guessMainText}>Number was <Text style={styles.guessText}>{props.number}</Text> and you guessed in <Text style={styles.guessText}>{props.rounds}</Text> rounds</Text>
            
            <MainButton  onPress={()=>{props.gameOverHandler(1)}} >Restart Game</MainButton>
        </View>
        
     );
}
 
const styles =StyleSheet.create({

  screen:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  },
  imageContainer:{
      width:300,
      height:300,
      borderColor:"black",
      borderRadius:150,
      borderWidth:2,
      overflow:"hidden",
      marginVertical:10
  },
  image:{
      width:"100%",
      height:"100%"
  },
  guessMainText:{
     fontSize:18,
     textAlign:"center",
     marginHorizontal:"5%"
  },
  guessText:{
      
      fontFamily:"open-sans-bold",
      color:colors.secondary,
      fontSize:20
  }

});
export default GameOverScreen;
