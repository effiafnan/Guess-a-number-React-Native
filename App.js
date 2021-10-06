import React,{useState} from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import DisplayScreen from './screens/DisplayScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading';


const fetchFont = () => {
  return Font.loadAsync({
     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
   });
 };

export default function App() {

  const [num,setNum] = useState();
  const [rounds,setRounds] = useState(0);
  const [dataLoaded,setDataLoaded]=useState(false);

  if(!dataLoaded){
    return (<AppLoading 
              startAsync={fetchFont}
              onFinish={() => setDataLoaded(true)}
              onError={(err)=>console.log(err)}
            />);
  }

  fetchFont();

  const selectedNumberHandler = (GuessNumber) =>{
    setNum(GuessNumber);
    setRounds(0);

  }

  const gameOverHandler = (noOfRounds) => {
    setRounds(noOfRounds);
  }

  let content = <DisplayScreen startGame={selectedNumberHandler} />;
  if(num && rounds<=0){
    content=<GameScreen userChoice={num} gameOverHandler={gameOverHandler}/>;
  }else if(rounds>1){
    content = <GameOverScreen gameOverHandler={gameOverHandler} rounds={rounds} number={num}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
