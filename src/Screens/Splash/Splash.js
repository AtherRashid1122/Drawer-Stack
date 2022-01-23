import React from 'react';
import {Text, View, Image, ImageBackground, StatusBar} from 'react-native';
import SplashImage from '../../Utils/Icons/splash.svg';
import {hp} from '../../Constants/responsive';
import CreateAccount from '../CreateAccount/CreateAccount';
const Splash = ({route, navigation}) => {
  window.setTimeout(async () => {
    // navigation.navigate('Root');
    navigation.navigate('Login');

  }, 2120);

  return (
    <ImageBackground
      source={require('../../Utils/Icons/splashlarge.png')}
      style={{
        flex: 1,
        width: null,
        height: null,
      }}
      resizeMode="stretch">
      <StatusBar hidden={true} />
      <View style={{flex: 1}}></View>
    </ImageBackground>
  );
};

export default Splash;
