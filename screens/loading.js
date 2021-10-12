import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import Logo from '../assets/img/loading.png';

const Loading = ({navigation}) => {
    setTimeout(() =>{
        navigation.push("Signin")
    },1500);
    return (
       <SafeAreaView style={styles.container}>
           <View style={styles.imagecontainer}>
               <Image 
                source={Logo}
                style={{alignSelf:"center"}}
               />
           </View>

       </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
      container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#101010',
        display: 'flex',
        flex: 1,
    },
    imagecontainer:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        height:"100%",
    },
      
  });
  
  
  export default withNavigation(Loading);