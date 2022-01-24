import { StyleSheet ,Dimensions} from "react-native";
const height=Dimensions.get('window').height
const styles = StyleSheet.create({
container: {
    backgroundColor:'#4087EA',
     flex: 1, 
},
 imagesize: { 
     height: 60, 
     width: '40%' 
    },
    backicon:{
        margin:20
    },
    loginbackground:{
        height:height/1.5,
        // backgroundColor:'#3E95D6'
    backgroundColor:'#4087EA',

    },
    hederlogin:{
        height:height/12,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
    textcolor:{
        fontSize:15,
        color:'white'
    },
    welcomecolor:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    imageperson:{
height:600,
// width:400
    },
    personbackground:{
        height:height/1.8,
        // backgroundColor:'red',
        // justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        // alignSelf:'center',
        borderWidth:1,
        width:'90%',
        
        
    }
    })

export default styles;
