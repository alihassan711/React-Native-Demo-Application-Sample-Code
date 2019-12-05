import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableHighlight, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import Nav from './navbar';

class MyProfile extends Component{

  state = {
    nameOfScreen:'MY PROFILE',
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
    const items = [
      { name: 'Squares King', image: require('./resources/images/p1.jpg') }, { name: 'Soneri Bank', image: require('./resources/images/p2.jpg') },
      { name: 'PSL Memes', image: require('./resources/images/p3.jpg') }, { name: 'ParasiteTesting', image: require('./resources/images/p4.jpg') },
      { name: 'AutoPartsWay', image: require('./resources/images/p5.jpg') }, { name: 'GilaRiver', image: require('./resources/images/p6.jpg') },
    ];
    const facts = [
      { name: 'Oders', number: '39' }, { name: 'Bids & Offers', number: '6' },
      { name: 'Messages', number: '33' }
    ];

    return(

      <ScrollView style={styles.view}>

          <View >
          <Nav name={this.state.nameOfScreen} />
            <ImageBackground
              source={require('./resources/images/my.png')}
              resizeMode= 'cover'
              style={styles.profileImage}>
              

              <View style={styles.info}>
                <Text style={styles.name} >Muhammad Ali Hassan</Text>
                <View style={styles.infoHorizontal}>
                  <Text style={styles.paragraph} >Software Engineer</Text>
                  <View style={styles.location}>
                    <Image
                      source={require('./resources/images/pin.png')}
                      style={styles.image}/>
                    <Text style={styles.paragraph} >San Fransisco, CA</Text>
                  </View>
                </View>

              </View>

            </ImageBackground>
          </View>


          <FlatGrid
            itemDimension={100}
            items={facts}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (
              <View style={styles.facts}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.paragraph}>{item.number}</Text>
              </View>
            )}
          />

          <FlatGrid
            items={items}
            // staticDimension={300}
            // fixed
            spacing={20}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                  key={index}
                  onPress={()=> alert("Tapped Item Index:"+index)} >

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
    marginBottom: 10,
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
    backgroundColor: '#fff'
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
    height: '100%',
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

export default MyProfile;
