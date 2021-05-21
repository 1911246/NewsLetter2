import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Joke extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.text}> Jokes </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color: 'blue',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default Joke