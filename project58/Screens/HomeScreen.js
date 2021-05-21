import * as React from 'react';
import {StyleSheet,View,TouchableOpacity, Text,Image} from 'react-native'
import db from '../config'

export default class HomeScreen extends React.Component{

dislikePressed(){
  var dislike = db.ref('Rating/'+'/')
    dislike.update({
      'dislikePressed':1
    })
}

 likePressed(){
   var like = db.ref('Rating/'+'/')
    like.update({
      'likePressed':1
    })
 }

  render(){
    return(
      <View>
       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Joke')}>
       <Text style={styles.buttonText}> Read a Joke </Text>
       </TouchableOpacity>
       </View>
       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('News')}>
       <Text style={styles.buttonText}> The News </Text>
       </TouchableOpacity>
       </View>

       
       <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Horoscope')}>
       <Text style={styles.buttonText}> Find your Horoscope </Text>
       </TouchableOpacity>
       </View>

        <View style={styles.buttonsContainer}>
       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('Weather')}>
       <Text style={styles.buttonText}> What is the Weather </Text>
       </TouchableOpacity>
       </View>
      
      <Text style={{ textAlign:'center', marginTop:15, justifyContent:'center'}}>Rate us</Text>
      <View style={styles.ratingContainer}>
        
        <TouchableOpacity onPress={this.likePressed}>
        <Image
         style={{
            width:50,
            height:50,
            marginLeft:5,
        
            }}
         source={require('../Thumbs/thumbsup.png')}
         />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikePressed}>
        <Image
        style={{
          width:50,
          height:50,
          marginTop:-35,
          marginLeft: 100
        }}
        source={require('../Thumbs/thumbsdown.png')}
        />
        </TouchableOpacity>
      </View>
      
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
     marginLeft:50,
     borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     witdh: 50,
     height: 50,
     borderRadius: 100,
     marginTop:50,
     marginRight:50,
  },
  ratingContainer:{
    justifyContent:'center',
    marginLeft: 85,
    marginTop:10
  }
})
  