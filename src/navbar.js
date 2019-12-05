import React,{Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, StatusBar, SafeAreaView} from 'react-native';
import { withNavigation } from 'react-navigation';

class Nav extends Component{ 

  render(){
    return(
      
        <SafeAreaView>
          
          <View style={styles.view}>
          

            <TouchableHighlight
              
              underlayColor='transparent'
              onPress={()=> this.props.navigation.openDrawer()} >
              <Image
                source={require('./resources/images/menu.png')}
                style={styles.image}
                />

            </TouchableHighlight>

            
            <Text style={styles.screenTitle}>
              {this.props.name}  
            </Text>

            <View style={styles.barItems}>

            <Image
              source={require('./resources/images/message.png')}
              style={styles.image}/>

            <Image
              source={require('./resources/images/cart.png')}
              style={styles.image}/>
          </View>

        </View>
      </SafeAreaView>
      
    )
  }
  
}

const styles = StyleSheet.create({
  screenTitle:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:22,
  },
  image:{
    marginRight: 10,
  },
  view:{
    paddingLeft: '5%',
    paddingBottom: '2%',
    paddingTop: '2%',
    flexDirection: 'row',
    backgroundColor: '#6C24AA',
    alignContent:"center"
  }
  ,
  imagine:{
    color: '#fff',
    fontSize:10,
  }
  ,
  barItems:{
    flexDirection: 'row',
    position:"absolute",
    marginTop:10,
    right:20
  }
})

export default withNavigation(Nav);
