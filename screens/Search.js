import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity ,TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

const Search = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.input}>
                <TextInput 
                style={{ flex: 1,  color: '#323232', fontSize: 18 }}
                placeholderTextColor='#bdc3c7'
                placeholder='What Are You looking at ?'/>
                <TouchableOpacity>    
                <MaterialIcons name="search" size={24} color="black" />
                </TouchableOpacity>   
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: 'flex',
        flex: 1,
        backgroundColor: '#F4F4F8',

    },
    input: {
        height: 50,
        width:'90%',
        alignSelf:'center',
        flexDirection: 'row', 
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginTop:40,
        alignItems:'center',
        borderRadius:20,
        position:'relative',
        borderWidth:0.5,
    },
    
})



export default withNavigation(Search);