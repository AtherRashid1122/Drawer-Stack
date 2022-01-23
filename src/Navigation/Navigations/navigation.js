import React, {useEffect, useState} from 'react';
import {View, LogBox, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();

//screens

// import DrawerNav from './src/navigation/Drawer/Drawer';
import Login from '../../Screens/Login/Login';
import Splash from '../../Screens/Splash/Splash';
import DrawerNavigator from '../Drawer/Drawer';
import CreateAccount from '../../Screens/CreateAccount/CreateAccount';
import Home from '../../Screens/Home/Home';
// import InstantBuy from './src/screens/App/InstantBuy/InstantBuy';
//import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
const Navigation = ({getUserBalance, user, isLoggedIn}) => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        {/* {props => <DrawerNavigator {...props} />} */}
        <Stack.Screen name="Root" options={{headerShown: false}}>
          {props => <DrawerNavigator {...props} />}
        </Stack.Screen>

        {/* 
        

        <Stack.Screen name="Root" options={{headerShown: false}}>
          {props => <DrawerNav {...props} />}
        </Stack.Screen>
        <Stack.Screen
          component={MyRequests}
          name="MyRequests"
          options={{headerShown: false}}
        />
        
       
        

        <Stack.Screen
          component={NumberVerification}
          name="NumberVerification"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UpdateOrder}
          name="UpdateOrder"
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          component={EnterOtp}
          name="EnterOtp"
          options={{headerShown: false}}
        /> */}
              <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CreateAccount}
          name="CreateAccount"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = state => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
//export default connect(mapStateToProps)(Navigation);
export default Navigation;
