import React,{useState,useRef,useEffect} from "react";
import { StyleSheet,View,Text,Button, Alert} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import fonts from "../constants/fonts";
import MainButton from "../components/MainButton";
import { Entypo } from '@expo/vector-icons';
import Guess from "../components/guess";

const randomNumberBetween = (min,max,userInput) => {
      min = Math.ceil(min);
      max = Math.floor(max);

    const randomNum = Math.floor(Math.random()*(max-min))+min;
  
    
    if(randomNum==userInput){
        randomNumberBetween(min,max,userInput);

    }else{
        return randomNum;
    }
}


const GameScreen = (props) => {

    const [currentGuess,setCurrentGuess] = useState(randomNumberBetween(1,100,props.userChoice));
    const [numberOfRounds,setNumberOfRounds] = useState(0); 
    const [pervGuesses,setPrevGuesses] = useState([]);
    const minNum = useRef(1);
    const maxNum = useRef(100);

    const {userChoice,gameOverHandler} = props;
    

    useEffect(()=>{
        if(currentGuess==userChoice){
            gameOverHandler(numberOfRounds)
        }},[currentGuess,userChoice,gameOverHandler]);


    const GuessHandler =(direction)=>{
        if((direction ==='lower' && currentGuess<userChoice) ||
         (direction==='higher' && currentGuess>userChoice)){
            Alert.alert(title="Don\'t lie",message="you are wrong",[{text:"cancel",style:'cancel'}]);
            return;
        }
        if(direction==='lower'){
            maxNum.current= currentGuess;
            setPrevGuesses([...pervGuesses,currentGuess]);
        }else{
            minNum.current= currentGuess;
            setPrevGuesses([...pervGuesses,currentGuess]);
        }
        setCurrentGuess(randomNumberBetween(minNum.current,maxNum.current,0));
        setNumberOfRounds(curRounds=>curRounds+1);
       
    }


    return ( 
        <View style={styles.screen}>
            <Text style={fonts.regular}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
              <MainButton  onPress={ GuessHandler.bind(this,'lower')}>
              <Entypo name="triangle-down" size={24} color="white" />
              </MainButton>
              <MainButton  onPress={ GuessHandler.bind(this,'higher')} >
              <Entypo name="triangle-up" size={24} color="white" />
              </MainButton>
            </Card>

            <Guess Data={pervGuesses} />
            
        </View>    
     );
}

const styles= StyleSheet.create({
    screen:{
       flex:1,
       padding:20,
       alignItems:"center"
    },
    buttonContainer:{
        width:300,
        maxWidth:"80%",
        flexDirection:"row",
        justifyContent:"space-around",
        marginVertical:10
    }
})
 
export default GameScreen;
