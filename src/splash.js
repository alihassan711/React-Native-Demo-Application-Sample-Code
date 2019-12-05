import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Input, TextInput, TouchableHighlight, ScrollView} from 'react-native';

import Nav from './nav';

class SplashScreen extends Component{

  render(){
    return(

      <View style={styles.view}>
        
        <View style={styles.paragraphView}>
          <Text style={styles.screenTitle}>React Native Demo</Text>
          <Text style={styles.paragraph}>Fully Coded React  Component</Text>
        </View>
        

        
        <TouchableHighlight
                underlayColor='#5BC0DE'
                style={styles.signupButton}
                onPress={
                  ()=> this.props.navigation.navigate('LoginScreen')
                }
                > 
                <Text style={styles.indigoButton}>CONTINUE</Text>
              </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  screenTitle:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:30,
    width:'75%',
    textAlign:'right',
    marginTop: '10%',
  },
  paragraph:{
    color: '#fff',
    fontSize:16,
    width:'75%',
    textAlign:'right',
  },
  paragraphView:{
    width: '100%',
    height:'40%',
    position:"absolute",
    bottom:0,
  },
  view:{
    backgroundColor: '#6C24AA',
    flex: 1
  },
  signupButton:{
    width: '100%',
    height:'100%',
    alignItems: 'center',
  },
  indigoButton:{
    width: '90%',
    marginTop: 30,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize:18,
    position:"absolute",
    bottom:60,
    backgroundColor: '#9C26B0',
    textAlign: 'center'
  }
})

export default SplashScreen;
