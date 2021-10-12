import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View , ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Navbar from '../components/Navbar'
import Productcard from '../components/Productcard';

const Featured = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <Navbar />

            <View style={styles.viewstyle}>
                <Text style={styles.textview}>
                    Featured
                </Text>
                <TouchableOpacity
                style={{flexDirection:'row', alignItems:'center'}}
                onPress={()=> props.navigation.push('Productfilter')}
                >
                    <FontAwesome name="filter" size={24} 
                    color="black"
                    style={styles.iconstyle}
                    />
                    <Text style={{paddingRight:30}}>Filter</Text>
                </TouchableOpacity>
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
                    imageUri={require('../assets/img/watermelon.png')}
                    name="Watermelon"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    />

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
                    imageUri={require('../assets/img/watermelon.png')}
                    name="Watermelon"
                    newprice="₹ 100"
                    oldprice="₹ 110"
                    />

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
        paddingLeft:30
    },
    iconstyle:{
        position:"relative",
        marginHorizontal:10,
    },

    boxcontainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',

    },
    
})



export default withNavigation(Featured);