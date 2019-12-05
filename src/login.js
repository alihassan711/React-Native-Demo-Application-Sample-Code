import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Input, TextInput, TouchableHighlight, ScrollView} from 'react-native';

import Nav from './nav';
import SafeAreaView from 'react-native-safe-area-view';

class Login extends Component{

  state = {
    nameOfScreen:'SIGN IN'
  }

  onChangeInput = (event) => {
    this.setState({
      usernamePlaceHolder:event
    })
  }

  render(){
    return(

      <ScrollView style={styles.view}>
        <SafeAreaView>
          <Nav name={this.state.nameOfScreen} />
        </SafeAreaView>

        <View style={styles.social}>
          <Image
            source={require('./resources/images/facebook.png')}
            style={styles.image} />

          <Image
            source={require('./resources/images/twitter.png')}
            style={styles.image} />

          <Image
            source={require('./resources/images/instagram.png')}
            style={styles.image} />
          <Image
            source={require('./resources/images/linkedin.png')}
            style={styles.image} />
        </View>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeInput}
            placeholder={'enter your username'}
            placeholderTextColor="#c1c1c1"
            textContentType='username'
          />

          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeInput}
            placeholder={'enter your password'}
            placeholderTextColor="#c1c1c1"
            secureTextEntry={true}
          />

          <TouchableHighlight style={styles.signupButton}
            onPress={
              ()=> this.props.navigation.navigate('HomeNav')
            } >

            <Text style={styles.indigoButton}>SIGN IN</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.paragraphView}>
          <TouchableHighlight style={styles.signupButton}
            onPress={
              ()=> this.props.navigation.navigate('Register')
            } >
            <Text style={styles.paragraph} >
              Don't have an account?<Text style={{fontWeight: 'bold'}}>SIGN UP </Text>
            </Text>
          </TouchableHighlight>
        </View>

      </ScrollView>



    )
  }
}

const styles = StyleSheet.create({
  screenTitle:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:22,
    marginTop: '10%',
    marginLeft: '5%'
  },
  paragraph:{
    color: '#fff',
    fontSize:16,
  },
  paragraphView:{
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  view:{
    backgroundColor: '#6C24AA',
    flex: 1
  },
  image:{
    marginRight: 25,
  },
  social:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textInputView:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput:{
    width: '100%',
    marginTop: 25,
    color: '#fff',
    fontSize:16,
    padding: 4,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  signupButton:{
    width: '100%',
    alignItems: 'center'
  },
  indigoButton:{
    width: '90%',
    marginTop: 30,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize:18,
    backgroundColor: '#9C26B0',
    textAlign: 'center'
  }
})

export default Login;
