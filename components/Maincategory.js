import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class Maincategory extends Component {
    render() {
        return(
            <SafeAreaView>
            <View style={styles.categorytext}>
                <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                    Main Categories
                </Text> 
            </View>

            <View style={styles.imagecontainer}>
            <Image 
            source={require('../assets/img/basket_logo.png')}
            style={styles.image}/>
            <Image 
            source={require('../assets/img/foodos.png')}
            style={styles.image}/>
            <Image 
            source={require('../assets/img/basket_logo.png')}
            style={styles.image}/>
            <Image 
            source={require('../assets/img/foodos.png')}
            style={styles.image}/>
            <Image 
            source={require('../assets/img/basket_logo.png')}
            style={styles.image}/>
            <Image 
            source={require('../assets/img/foodos.png')}
            style={styles.image}/>                
            </View>
            
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#646464',
        display: 'flex',
        flex: 1,
    },

    categorytext:{
        flexDirection:"row",
        marginTop:5,
        position:'relative',
        alignSelf:'center'
    },
    
    image:{
        height:85,
        width:'40%',
        marginTop:'5%',
        borderRadius:10
    },
    imagecontainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
    },
    
})



export default Maincategory;