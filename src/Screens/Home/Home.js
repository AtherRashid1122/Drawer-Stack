

import React from 'react';
import {Text, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CreateAccount from '../CreateAccount/CreateAccount';
import DashBoard from '../DashBoard/DashBoard';
import Login from '../Login/Login';
const componentName = ({params}) => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
     <Tab.Navigator
      initialRouteName="Login"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarLabel: 'DashBoard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
    </View>
  );
};

export default componentName;
