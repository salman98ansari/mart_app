import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity , ScrollView} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';


import Home from './Home';
import Homes from './Homes';

class Menu extends Component {
    render() {
        return(
           <MyApp />
        );
    }
}
const MyApp = DrawerNavigator({
    Home:{
        screen : Home
    },

    Homess:{
        screen :Homes
    },
})
const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#646464',
        display: 'flex',
        flex: 1,
    },

    box:{
        backgroundColor:'#FFF',
        height:170,
        width:"90%",
        alignSelf:"center",
        marginTop:'5%'
    },
    
})



export default Menu;