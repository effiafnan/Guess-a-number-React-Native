import React,{useState} from "react";
import { StyleSheet,View,Text,Button,TouchableWithoutFeedback, Keyboard,Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import MainButton from "../components/MainButton";



const DisplayScreen = (props) => {

    const [enteredNumber,setEnteredNumber]=useState('');
    const [selectedNumber,setSelectedNumber] = useState();
    const [confirmed,setConfirmed] = useState(false);


    const numberInputHandler = inputText => {
        setEnteredNumber(inputText.replace(/[^0-9]/g,''))
    }

    
    const resetButtonHandler=()=>
                            {setEnteredNumber('')
                            setConfirmed(false)
                            }

    const acceptNumberHandler = () =>{
        const chosenNumber = parseInt(enteredNumber)
        if(chosenNumber<=0 || chosenNumber>99 || isNaN(chosenNumber) ){
            Alert.alert('Invalid Number',"Number should be between 1 and 99",
            [{title:'Okay',style:'cancel',onPress:resetButtonHandler}])
            
            return;
        }
           setConfirmed(true)
            setSelectedNumber(chosenNumber)
            setEnteredNumber('')
            Keyboard.dismiss();
          
    }


    let confirmedText;
          if(confirmed){
            confirmedText =
            <Card>
                <View style={styles.selectionContainer}>
                <Text style={fonts.regular}>You Entered </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton  onPress={()=>{props.startGame(selectedNumber)}} >Start Game</MainButton>
                </View>
            </Card>
             
          }
              

    return ( 
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title,fonts.title}>Start a new Game</Text>           
            <Card style={styles.inputContainer}>
                <Text style={fonts.regular}>Select a new number</Text>
                <Input style={styles.input} 
                    blurOnSubmit={true} 
                    autoCorrect={false} 
                    maxLength={2} 
                    keyboardType='number-pad'
                    onChangeText={numberInputHandler} 
                    value={enteredNumber}
                        
                />
                <View style={styles.buttonContainer}>
                   <View style={styles.buttons}> 
                        <Button  title="Reset" color={colors.secondary}
                            onPress={resetButtonHandler}
                        /> 
                    </View> 
                   <View style={styles.buttons}> 
                        <Button  title="Confirm" color={colors.primary}
                            onPress={acceptNumberHandler}
                        />
                    </View> 
                </View>
            </Card>
            {confirmedText}
        </View>
        </TouchableWithoutFeedback>
     );
};

const styles =  StyleSheet.create({
screen :{
    flex:1,
    alignItems:"center",
    padding:10,

},
title:{
    fontSize:18
    
},
inputContainer:{
   
    width:300,
    maxWidth:"80%",
    
},
buttonContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:25
    
},
buttons:{
    width:80
},
input:{
    width:30,
    textAlign:"center"
},
selectionContainer:{
    marginTop:20,
    alignItems:"center"
 
}
});
 
export default DisplayScreen;