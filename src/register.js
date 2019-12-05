import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Input, TextInput, TouchableHighlight, ScrollView } from 'react-native';

import Nav from './nav';
import SafeAreaView from 'react-native-safe-area-view';

class CreateAccount extends Component{

  state = {
    nameOfScreen:'CREATE ACCOUNT',
    username:'',
    email:'',
    password:''
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
          </SafeAreaView>

          

          <View style={styles.paragraphView}>
            <Text style={styles.paragraph} >sign up with your email</Text>
          </View>

          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
              placeholder={'enter your username'}
              placeholderTextColor="#c1c1c1"
              textContentType='username'
            />

            <TextInput
              style={styles.textInput}
              onChangeText={(email) => this.setState({email})}
              placeholder={'enter your email'}
              placeholderTextColor="#c1c1c1"
            />

            <TextInput
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
              placeholder={'enter your password'}
              placeholderTextColor="#c1c1c1"
              secureTextEntry={true}
            />

            <View
              style={styles.signupButton}>
              <TouchableHighlight
                underlayColor='#5BC0DE'
                style={styles.indigoButton}
                onPress={()=> this.props.navigation.navigate('HomeNav')}
                >

                <Text style={styles.button}>SIGN UP</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.paragraphView}>
            <TouchableHighlight style={styles.signupButton}
              onPress={
                ()=> this.props.navigation.navigate('LoginScreen')
              } >
              <Text style={styles.paragraph} >
                Already have an account?
                <Text style={{fontWeight: 'bold'}}>SIGN IN </Text>
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
  button:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'center'
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
    borderRadius: 5,
    backgroundColor: '#9C26B0',
  }
})

export default CreateAccount;
