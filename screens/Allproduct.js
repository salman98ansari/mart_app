import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, TextInput, Text, View , ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Navbar from '../components/Navbar'
import Productcard from '../components/Productcard';


const Allproduct = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Navbar />

            <View style={styles.viewstyle}>
                <FontAwesome name="list-ul" size={22} color="black"  style={styles.iconstyle1}/>
                <Text style={styles.textview}>
                    List View
                </Text>
                <FontAwesome name="filter" size={24} 
                color="black"
                style={styles.iconstyle}
                />
                <Text style={{paddingRight:30}}>Filter</Text>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={styles.boxcontainer}>
                    <Productcard 
                    imageUri={require('../assets/img/apple.png')}
                    name="Apple"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    />

                    <Productcard 
                    imageUri={require('../assets/img/orange.png')}
                    name="Orange"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    />

                    <Productcard 
                    imageUri={require('../assets/img/shoe.png')}
                    name="Shoe"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    /> 

                    <Productcard 
                    imageUri={require('../assets/img/puja.png')}
                    name="Puja"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    /> 

                    <Productcard 
                    imageUri={require('../assets/img/watermelon.png')}
                    name="Watermelon"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    /> 

                    <Productcard 
                    imageUri={require('../assets/img/orange.png')}
                    name="Orange"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    /> 

                    <Productcard 
                    imageUri={require('../assets/img/shoe.png')}
                    name="Shoe"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    /> 

                    <Productcard 
                    imageUri={require('../assets/img/apple.png')}
                    name="Apple"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
    },

    viewstyle:{
        height:55,
        flexDirection:"row",
        borderRadius:2,
        borderWidth:0.1,
        alignItems:"center",
    
    },
    
    textview:{
        flex:1,
        paddingLeft:10
    },
    iconstyle:{
        position:"relative",
        marginHorizontal:10,
    },
    iconstyle1:{
        position:"relative",
        paddingLeft:30,
    },

    boxcontainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',

    },

    box:{
        backgroundColor:'#FFF',
        height:140,
        width:'40%',
        borderRadius:20,
        marginTop:50

    },
    image:{
        height:100,
        width:100,
        alignSelf:'center',
        position:'absolute',
        marginTop:-30,
        borderRadius:5,
    }
    
})



export default withNavigation(Allproduct);