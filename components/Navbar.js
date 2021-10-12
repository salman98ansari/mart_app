import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Item, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
const Navbar = (props) => {
    return(
        <SafeAreaView >
            <View style={styles.navbar}>
                <View style={styles.navbarTop}>
                    <View style={{flexDirection:"row" , alignItems:'center'}}>
                        <MaterialIcons name="menu" 
                        style={[styles.icons, { fontSize: 24, marginRight: 0 }]} 
                        />
                        <View>
                            <Text style={{color:'#FFF' , fontSize:18 , paddingLeft:6}}>NSVP Mega Mart</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row" , alignItems:"center"}}>

                        <MaterialIcons name="shopping-cart" 
                        style={[styles.icons, { marginRight: 0 }]}
                        onPress={()=> props.oncartclick()} />

                    </View>
                </View>
            </View>

            <View style={styles.searchbar} >
                    <Item style={styles.input}>
                        
                        <TextInput 
                            style={{ flex: 1,  color: '#323232', fontSize: 14 }}
                            placeholderTextColor='#bdc3c7'
                            placeholder='What Are You looking at ?'/>
                        
                        <MaterialIcons name="search" size={24} color="black" 
                        onPress={()=> props.onsearchclick()}/>

                    </Item>
                </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#FFF',
        display: 'flex',
        flex: 1,
    },

    navbar:{
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 0,
        backgroundColor: '#353536', 
        elevation: 3,
    },

    navbarTop: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 15,
        paddingBottom:5,
        
    },

    icons: {
        color: '#FFF',
        fontSize: 24,
        padding: 5,
        marginRight: 15,
        alignItems: 'center',
    },

    input: {
        height: 40,
        flexDirection: 'row', 
        borderRadius: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },

    searchbar:{
        backgroundColor:'#6A6767',
        padding:7,
    }
})



export default Navbar;