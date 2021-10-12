import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, TextInput, Text, View , ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Imageslider from '../components/Imageslider'

const Home = () => {
    return(
        <SafeAreaView>
            <Navbar />
                <View style={styles.categorytext}>
                    <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                        Categories
                    </Text> 
                    <Text style={{paddingHorizontal:15,}}>
                        See All
                    </Text>
                </View>
                <View>
                    <View style={{height:130, marginTop :10}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="baskets"
                            />  
                        </ScrollView>
                    </View>
                </View>       
            <View>
                <Text>
                    Salman Ansari
                </Text>
            </View>
            <ScrollView
            scrollEventThrottle={16}
            >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <View style={styles.categorytext}>
                        <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                            Categories
                        </Text> 
                        <Text style={{paddingHorizontal:15,}}>
                            See All
                        </Text>
                    </View>
                    <View>
                        <View style={{height:130, marginTop :10}}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require('../assets/img/fruits.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/baskets.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/fruits.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/baskets.png')}
                                name="baskets"
                                />   
                            </ScrollView>
                        </View>
                    </View>


                    <View style={styles.categorytext}>
                        <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                            Categories
                        </Text> 
                        <Text style={{paddingHorizontal:15,}}>
                            See All
                        </Text>
                    </View>
                    <View>
                        <View style={{height:130, marginTop :10}}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require('../assets/img/fruits.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/baskets.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/fruits.png')}
                                name="Home"
                                />
                                <Category imageUri={require('../assets/img/baskets.png')}
                                name="baskets"
                                />
                                
                            </ScrollView>

                        </View>

                    </View>
                </View>
            </ScrollView>    
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#E1E1E1',
        display: 'flex',
        flex: 1,
    },

    categorytext:{
        flexDirection:"row",
        marginTop:5,
    }
    
})



export default withNavigation(Home);