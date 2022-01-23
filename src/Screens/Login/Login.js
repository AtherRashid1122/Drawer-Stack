import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Login = ({props}) => {
  const navigation = useNavigation();
  return (
    <View>
    <Text  onPress={()=>navigation.navigate('Root')} >
      Login
      </Text>  
    </View>
  );
};

export default Login;
