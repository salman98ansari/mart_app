import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Pic from '../assets/img/Image.png';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const Welcome = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textview}> 
                <Text style={styles.textstyle}>Welcome to NSPV Mart</Text>
                <Text style={{fontSize:20 , color:'#FFF'}}>Explore Us</Text>
            </View>
            <View style={styles.imagecontainer}>
                <Image
                source ={Pic}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.push("Loading")}
                >
                    <Text style={{color:'#FFF'}}>Login</Text>
                </TouchableOpacity>
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
    textview:{
        flex:1,
        alignItems:"center",
        marginTop:40
    },
    textstyle:{
        fontSize:30,
        fontWeight:"bold",
        color:'#FFF'
    },
    imagecontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    bottom:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:40,
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: wp('70%'),
        borderRadius: 10,
    }

})

export default withNavigation(Welcome);