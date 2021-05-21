import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import HomeScreen from './Screens/HomeScreen'
import Joke from './Screens/JokeScreen'
import Weather from './Screens/WeatherScreen'
import AppHeader from './components/AppHeader'
import News from './Screens/NewScreen'
import Horoscope from './Screens/Horoscope'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'






export default class App extends React.Component {
  render() {
    return (
       
     <View>
     <AppHeader/>
        <AppContainer/>
       
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Horoscope:Horoscope,
  Joke:Joke,
  Weather:Weather,
  News:News
  
})

const AppContainer = createAppContainer(AppNavigator)
    
  
  


