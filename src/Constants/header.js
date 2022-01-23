import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Curve from '../Utils/Icons/homecurve.png';
const CustomHeader = ({params}) => {
  return (
    <SafeAreaView>
      <Header
        //   leftComponent={{
        //     icon: 'menu',
        //     color: '#fff',
        //   }}
        //   rightComponent={
        //     <View style={styles.headerRight}>
        //       <TouchableOpacity onPress={docsNavigate}>
        //         <Icon name="description" color="white" />
        //       </TouchableOpacity>
        //       <TouchableOpacity
        //         style={{marginLeft: 10}}
        //         onPress={playgroundNavigate}>
        //         <Icon type="antdesign" name="rocket1" color="white" />
        //       </TouchableOpacity>
        //     </View>
        //   }
        centerComponent={<Text>Hi</Text>}
      />
    </SafeAreaView>
  );
};
export default CustomHeader;
