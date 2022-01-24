import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground,Image } from 'react-native';
import { Header } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const Login = ({ props, }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backicon} onPress={() => navigation.goBack()}>
        <Ionicons size={28} color={'white'} name="chevron-back" />
      </TouchableOpacity>
      <View style={styles.loginbackground} >
        <View style={styles.hederlogin}>
          <Text style={styles.textcolor}>
            Hey There,
          </Text>
          <Text style={styles.welcomecolor}>
            Welcome Back
          </Text>
        </View>
<ImageBackground style={styles.loginbackground} source={require('../../Utils/Icons/backcircle.png')}>
<ImageBackground resizeMode='cover' style={{flex:1,backgroundColor:'red'}}  source={require('../../Utils/Icons/person.png')} >


</ImageBackground>
<View>

</View>
</ImageBackground>


      </View>
    </View>
  );
};

export default Login;
