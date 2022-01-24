import React from 'react';
import {Text, View, Image, ImageBackground, StatusBar} from 'react-native';
import SplashImage from '../../Utils/Icons/splash.svg';
import {hp} from '../../Constants/responsive';
import CreateAccount from '../CreateAccount/CreateAccount';
import styles from './Styles';
const Splash = ({route, navigation}) => {
  window.setTimeout(async () => {
    // navigation.navigate('Root');
    navigation.navigate('Login');

  }, 2120);

  return (

<View style={styles.container}>

<Image style={styles.imagesize} source={require('../../Utils/Icons/logo.png')} >

</Image>
</View>


    // <Image
    //   source={require('../../Utils/Icons/logo.png')}
    //   style={{
    //     flex: 1,
    //     width: null,
    //     height: null,
    //   }}
    //   resizeMode="stretch">
    //   {/* <StatusBar hidden={true} /> */}
    //   <View style={{flex: 1}}></View>
    // </Image>
  );
};

export default Splash;
