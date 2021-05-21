import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.box}>
        <Text style={styles.text}>Newsletter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: 'gray',
  },
  text:{
    color: 'blue',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;