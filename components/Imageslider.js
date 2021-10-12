import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


let SCREEN_WIDTH = Dimensions.get('window').width;

class Category extends Component {
    render() {
        return(
            <SafeAreaView>
                <View style={{marginTop:10}}>
                    <Swiper
                    autoplay={true}
                    showsPagination={true}
                    style={{ height: 200, backgroundColor: '#fff' }}
                    >
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                            <Image 
                            source={require('../assets/img/baskets.png')}
                            style={styles.image}
                            />
                        </View>

                        <View style={styles.slide}>
                            <Image 
                            source={require('../assets/img/sale.png')}
                            style={styles.image}
                            />
                        </View>

                        <View style={styles.slide}>
                            <Image 
                            source={require('../assets/img/fruits.png')}
                            style={styles.image}
                            />
                        </View>   
                    </Swiper>
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

    slide: { 
        flex: 1, 
        width: SCREEN_WIDTH - 20,
        marginHorizontal: 10,
    },
    image: { 
        width: null, 
        height: null, 
        flex: 1, 
        resizeMode: 'contain',
    },
    
})



export default Category;