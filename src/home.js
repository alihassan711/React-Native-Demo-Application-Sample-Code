import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableHighlight, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { NavigationActions } from 'react-navigation';

import Nav from './navbar';
import { TextInput } from 'react-native-gesture-handler';

class HomeScreen extends Component{

  state = {
    nameOfScreen:'Home',
    query:'',
    username:'',
    email:'',
    password:''
  }

  onChangeInput = (event) => {
    this.setState({
      usernamePlaceHolder:event
    })
  }

  navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
          routeName: route
      });
      this.props.navigation.dispatch(navigateAction)
  }

  render(){
    const portfolio = [
      { name: '50 Free Beats', image: require('./resources/images/portfolio/50freebeat.jpg') }, 
      { name: 'APT SMS', image: require('./resources/images/portfolio/aptsms.jpg') }, 
      { name: 'Auto Parts Way', image: require('./resources/images/portfolio/autopartsway.jpg') }, 
      { name: 'Cartoon Me', image: require('./resources/images/portfolio/cartoonme.jpg') }, 
      { name: 'Gila River Casino', image: require('./resources/images/portfolio/gilariver.jpg') }, 
      { name: 'The Irish Gift', image: require('./resources/images/portfolio/irishgift.jpg') }, 
      { name: 'The Non Leauge', image: require('./resources/images/portfolio/nonleague.jpg') }, 
      { name: 'Parasite Testing', image: require('./resources/images/portfolio/pci.jpg') }, 
      { name: 'Prim-Ed', image: require('./resources/images/portfolio/primed.jpg') }, 
      { name: 'Psl Memes', image: require('./resources/images/portfolio/pslmeme.jpg') }, 
      { name: 'Qabeela', image: require('./resources/images/portfolio/qabeela.jpg') }, 
      { name: 'Soneri Bank', image: require('./resources/images/portfolio/soneri.jpg') }, 
      { name: 'Squares King', image: require('./resources/images/portfolio/squaresking.jpg') }
    ];
    const facts = [
      { name: 'Oders', number: '39' }, { name: 'Bids & Offers', number: '6' },
      { name: 'Messages', number: '33' }
    ];
    return(
      <View style={styles.view}>
        <View style={{marginBottom: 10}}>
          <Nav name={this.state.nameOfScreen} /> 
          <TextInput style={styles.textInput}
            placeholder="What are you looking for?"
            onChangeText={(query) => this.setState({query})}
            placeholderTextColor="#a1a1a1">

          </TextInput>

        </View>
        
        <ScrollView style={styles.ScrollView}>

            <FlatGrid
              items={portfolio}
              // staticDimension={300}
              // fixed
              spacing={20}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                    key={index}
                    onPress={()=> this.props.navigation.openDrawer()} >

                    <View style={styles.itemContainer}>
                      
                      <Image
                        source={item.image}
                        style={styles.portfolioImage}/>
                        <Text style={styles.portfolioTitle}>{item.name}</Text>
                    </View>

                </TouchableOpacity>

              )}
            />

        </ScrollView>
      </View>
      


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
  name:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:18,
    alignItems: 'flex-start'
  },
  info:{
    width: '100%',
    marginLeft: '5%',
    bottom: 10,
    position: 'absolute',
  },
  infoHorizontal:{
    width: '100%',
    flexDirection: 'row'
  },
  location:{
    position: 'absolute',
    right: 0,
    marginRight: '5%',
    flexDirection: 'row'
  },
  paragraph:{
    color: '#fff',
    fontSize:16,
  },
  portfolioTitle:{
    color: '#555555',
    marginLeft:10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  image:{
    marginRight: 5
  },
  gridView: {
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#eeeeee'
  },
  facts: {
    alignItems: 'center'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  portfolioImage:{
    width: '100%',
    height: '90%',
    resizeMode: 'contain'
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
    flex: 1,
  },
  ScrollView:{
    backgroundColor: '#fff',
    flex: 1
  },
  profileImage:{
    width: '100%',
    height: 300,
  },
  textInputView:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput:{
    marginLeft:20,
    marginRight: 20,
    fontSize:16,
    padding: 8,
    borderWidth: 1,
    color: '#fff',
    borderColor: '#dedede',
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

export default HomeScreen;
