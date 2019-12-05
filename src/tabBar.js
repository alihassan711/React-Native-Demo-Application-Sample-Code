import React,{Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, StatusBar, SafeAreaView} from 'react-native';
import { withNavigation } from 'react-navigation';

class TabBar extends Component{ 
  
  state = {
    categories:true,
    bestDeal:false
  }

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
        <View style={styles.tabsNav}>
          <TouchableHighlight
            underlayColor='#cccccc'
            style={ this.state.categories? styles.activeTab : styles.normalTab}
            onPress={() => {
              this.setState({categories: true})
              this.setState({bestDeal: false})
              this.props.navigation.navigate("Categories")}} >
            <Text style={[styles.tabNavText, styles.tabsNavWidth]}>Categories</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={ this.state.bestDeal? styles.activeTab : styles.normalTab}
            underlayColor='#cccccc'
            onPress={() => {
              this.setState({categories: false})
              this.setState({bestDeal: true})
              this.props.navigation.navigate("Best Deals")}} >
            <Text style={[styles.tabNavText, styles.tabsNavWidth]}>Best Deals</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      
    )
  }
  
}

const styles = StyleSheet.create({
  activeTab:{
    flex: 1,
    backgroundColor:'#eeeeee',
  },
  normalTab:{
    flex: 1,
    backgroundColor:'#bbbbbb',
  },
  tabsNav:{
    flexDirection:"row",
    width:'100%',
    backgroundColor:'#eeeeee',
  },
  tabsNavWidth:{
    textAlign:"center",
    paddingTop:8,
    paddingBottom:8
  },
  tabNavText:{
    color: '#555555',
    fontSize:22,
    alignItems: 'flex-start'
  },
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

export default withNavigation(TabBar);
