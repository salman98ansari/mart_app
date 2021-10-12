import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

import Myordercard from '../components/Myordercard'
const Myorder = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewstyle}>
                <Text style={styles.text}>
                    My Orders
                </Text>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Myordercard 
                imageUri={require('../assets/img/orange.png')}
                name="Orange"
                price="RS 34.00"/>

                <Myordercard 
                imageUri={require('../assets/img/apple.png')}
                name="Apple"
                price="RS 34.00"/>

                <Myordercard 
                imageUri={require('../assets/img/watermelon.png')}
                name="Watermelon"
                price="RS 34.00"/>

                <Myordercard 
                imageUri={require('../assets/img/orange.png')}
                name="Orange"
                price="RS 34.00"/>

                <Myordercard 
                imageUri={require('../assets/img/fruits.png')}
                name="Vegetable"
                price="RS 34.00"/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#F4F4F8',
        display: 'flex',
        flex: 1,
    },

    viewstyle:{
        height:50,
        backgroundColor:'#101010',
        alignItems:"center",
        flexDirection:"row",
        marginTop:5,
        borderRadius:3,
    },
    text:{
        color:'#FFF',
        marginHorizontal:10,
        fontSize:20,
    },
})



export default withNavigation(Myorder);