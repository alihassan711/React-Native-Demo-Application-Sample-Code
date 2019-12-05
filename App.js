import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {View} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import MyProfile from './src/my_profile';
import SplashScreen from './src/splash';
import Login from './src/login';
import CreateAccount from './src/register';
import HomeScreen from './src/home';
import CategoryScreen from './src/categories';
import BestDeal from './src/best_deals';
import Nav from './src/navbar';
import TabBar from './src/tabBar';

import { createStackNavigator } from "react-navigation-stack";

class App extends Component{
  render(){
    return(
        <SplashScreen />
        //<CreateAccount />
        //<Login />
    )
  }
}

const TopTabNavigator = createMaterialTopTabNavigator({
  Categories:{ 
    screen:CategoryScreen,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,horizontal,tintColor})=>{
        const { routeName } = navigation.state;
      
        return <Image
          source={require('./src/resources/images/arrow.png')}
          style={{width:30,height:30}}
        />
      },
    })
  },
  'Best Deals':BestDeal,
  Profile:MyProfile
},{
  initialRouteName:'Categories',
  order: ['Categories','Best Deals'],
  tabBarComponent:TabBar,
  tabBarOptions:{
    showLabel:true,
    style:{
      backgroundColor:'green'
    },
    labelStyle:{
      fontSize:20
    }
  }
})



const HomeNavigator = createDrawerNavigator({
  
  Home: HomeScreen,
  Profile: MyProfile,
  Categories: TopTabNavigator
});

const StackNavigator = createStackNavigator({
  ScreenAB: {
    screen: HomeNavigator,
    navigationOptions: ({ navigation }) => ({
            headerTitle:Nav,
          }),
  }
  
});

export default createAppContainer(createSwitchNavigator(
  {
    Splash: SplashScreen,
    LoginScreen: Login,
    Register: CreateAccount,
    HomeNav: HomeNavigator
  },
  {
    initialRouteName: 'Splash',
  }
));