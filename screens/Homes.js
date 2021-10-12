import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, TextInput, Text, View , ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import Navbar from '../components/Navbar'
import Maincategory from '../components/Maincategory'
import Featuredslide from '../components/Featuredslide';
import Carousel from '../components/Carousel';
import Imageslider from '../components/Imageslider'



const Homes = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <Navbar 
            />
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Imageslider />
                <Maincategory/>
                <Featuredslide />
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



export default withNavigation(Homes);