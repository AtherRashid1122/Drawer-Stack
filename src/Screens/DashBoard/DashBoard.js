import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const DashBoard = ({props}) => {
    const navigation = useNavigation();
  return (
    <View>
     <Header
        backgroundColor="transparent"
        leftComponent={
          <MaterialIcons
            size={30}
            name={'restaurant-menu'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        }
      />

    </View>
  );
};

export default DashBoard;
