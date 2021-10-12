import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class Category extends Component {
    render() {
        return(
            <View style={{height:130 , width:130 , marginLeft:20 ,
                borderWidth:0.5, borderColor:"#dddddd"}}>
                <View style={{flex:2}}>
                    <Image 
                    source={this.props.imageUri}
                    style={{flex:1 , width:null, height:null, resizeMode:"cover"}}/>

                </View>
                <View style={{flex:0.5, paddingLeft:10, paddingTop:5}}>
                    <Text>
                        {this.props.name}
                    </Text>

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
    
})



export default Category;