import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity , ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';

class Carousel extends Component {
    render() {
        return(
            <SafeAreaView>
                <View style={styles.box}>
                    <Text> 
                        Image Carousel Here..
                    </Text>
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

    box:{
        backgroundColor:'#FFF',
        height:170,
        width:"90%",
        alignSelf:"center",
        marginTop:'5%'
    },
    
})



export default Carousel;