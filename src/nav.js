import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

const Nav = (props) => (
  <View style={styles.view}>


    <TouchableHighlight
      underlayColor='transparent'
      onPress={()=> alert("back pressed")}>
      <Image
      source={require('./resources/images/arrow.png')}
      style={styles.image}/>

    </TouchableHighlight>
    <Text style={styles.screenTitle}>
      {props.name}
    </Text>

  </View>
)

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
    marginTop: '1%',
    marginLeft: '5%',
    flexDirection: 'row'
  }
})

export default Nav;
