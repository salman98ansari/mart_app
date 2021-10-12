import { Assets } from '@react-navigation/stack';
import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class Productcard extends Component {
    render() {
        return(
            <View style={styles.box}>
                <Image 
                source={this.props.imageUri}
                style={styles.image}/>
                <View style={{marginTop:80 , paddingLeft:20,}}>
                    <Text style={{fontSize:17}}>{this.props.name}</Text>
                    <View style={{marginTop:5 , flexDirection:'row'}}>
                        <Text style={{color:'blue' , fontSize:17}}>
                        {this.props.newprice}
                        </Text>
                        <Text style={{marginLeft:7 , textDecorationLine:'line-through' , color:'#919191' , fontSize:15}}>
                        {this.props.oldprice}
                        </Text>
                    </View>
                </View>
            </View>
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
        marginTop:50,
        elevation:5,

    },
    image:{
        height:100,
        width:100,
        alignSelf:'center',
        position:'absolute',
        marginTop:-30,
        borderRadius:5,
    },
})



export default Productcard;