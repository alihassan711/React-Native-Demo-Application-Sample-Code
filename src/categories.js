import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableHighlight, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { NavigationActions, NavigationEvents } from 'react-navigation';


class HomeScreen extends Component{

  state = {
    nameOfScreen:'Categories',
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
    
    const categoriesArr = [
      { name: 'Women Fashion', image: require('./resources/images/categories/womenfasion.jpg') }, 
      { name: 'Men Fashion', image: require('./resources/images/categories/menfashion.jpg') }, 
      { name: 'Beauty and Care', image: require('./resources/images/categories/beauty.jpg') }, 
      { name: 'Health and Fitness', image: require('./resources/images/categories/health.jpg') },
      { name: 'TV and Home Appliances', image: require('./resources/images/categories/tvhome.png') }, 
      { name: 'LifeStyle and Home', image: require('./resources/images/categories/lifestyle.jpg') }, 
      { name: 'Watches', image: require('./resources/images/categories/watch.jpg') }, 
      { name: 'Sports and Outdoor', image: require('./resources/images/categories/sports.jpg') }, 
      { name: 'Pets', image: require('./resources/images/categories/pets.jpg') }, 
      { name: 'Jewellery', image: require('./resources/images/categories/jewellery.png') },  
      { name: 'Grocery', image: require('./resources/images/categories/grocery.jpg') }, 
      { name: 'Bags', image: require('./resources/images/categories/bags.jpg') }, 
      { name: 'Babies and Toys', image: require('./resources/images/categories/babytoys.jpg') }, 
      { name: 'Automotive', image: require('./resources/images/categories/automotive.jpg') }, 
    ];
    const facts = [
      { name: 'Oders', number: '39' }, { name: 'Bids & Offers', number: '6' },
      { name: 'Messages', number: '33' }
    ];
    return(
      <View style={styles.view, styles.ScrollView}>
      
        <NavigationEvents
          onWillFocus={payload => {
            //alert("Tab focus"+ this.state.categories);
          }}
        />
        <FlatGrid
          items={categoriesArr}
          itemDimension={210}
          // fixed
          renderItem={({ item, index }) => (
            <TouchableOpacity
                style={{flexDirection:"row"}}
                key={index}
                onPress={()=> alert(item.name + " is Tapped")} >

                <View style={styles.itemContainer}>
                  
                  <Image
                    source={item.image}
                    style={styles.portfolioImage}/>
                </View>

                <Text style={styles.portfolioTitle}>{item.name}</Text>

            </TouchableOpacity>

          )}
        />
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
    color: '#fff',
    fontSize:26,
    position:"absolute",
    alignSelf:"flex-end",
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#555555'
  },
  image:{
    marginRight: 5
  },
  gridView: {
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    flexDirection:"row",
    height:160
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
    resizeMode: 'cover'
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
    backgroundColor: '#eee',
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
    marginTop: 25,
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
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default HomeScreen;
