import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, TextInput, Text, View , ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import Navbar from '../components/Navbar'
import Maincategory from '../components/Maincategory'
import Featuredslide from '../components/Featuredslide';
import Imageslider from '../components/Imageslider';



const Home = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <Navbar 
            oncartclick={()=> props.navigation.push('Mycart')}
            onsearchclick={() => props.navigation.push('Search')}/>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Imageslider />
                <Maincategory/>
                <Featuredslide
                onseeallclick={()=> props.navigation.push('Featured')} />
            </ScrollView>                   
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
    },
    
    
})



export default withNavigation(Home);