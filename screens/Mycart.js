import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';

import Mycartcard from '../components/Mycartcard'
const Mycart = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewstyle}>
                <Text style={styles.text}>
                    My Cart
                </Text>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Mycartcard 
                imageUri={require('../assets/img/orange.png')}
                name="Orange"
                price="RS 34.00"/>
                
                <Mycartcard 
                imageUri={require('../assets/img/apple.png')}
                name="Apple"
                price="RS 34.00"/>

                <Mycartcard 
                imageUri={require('../assets/img/watermelon.png')}
                name="Watermelon"
                price="RS 34.00"/>
                

                <View style={styles.addressbox}>
                    <View style={styles.categorytext}>
                        <Text style={{fontSize:25, flex:1, fontWeight:'bold', paddingHorizontal:15}}>
                            Delivery Address
                        </Text> 
                        <Text style={{paddingHorizontal:15,fontSize:18 , textDecorationLine:'underline', 
                        color:'blue'}}>
                            Change
                        </Text>
                    </View>
                    <View style={styles.addresstext}>
                        <Text style={{marginHorizontal:15, flex:1, fontSize:17}}>
                            Sheshadripuram, Bangalore, 16{"\n"}
                            House no: 5-31-g{"\n"}
                            4th Cross : 575022{"\n"}
                        </Text>
                        <FontAwesome5 
                        name="dot-circle"
                        style={styles.icon} />
                    </View>
                </View>


                <View>
                    <View style={styles.billtotal}>
                        <Text style={{flex:1, marginHorizontal:'8%' , fontSize:20}}>
                            Subtotal
                        </Text>
                        <Text style={{marginHorizontal:'8%', fontSize:20,}}>
                            Rs. 106.00
                        </Text>
                    </View>

                    <View style={styles.billtotal}>
                        <Text style={{flex:1, marginHorizontal:'8%' , fontSize:20}}>
                            Discount
                        </Text>
                        <Text style={{marginHorizontal:'8%', fontSize:20,}}>
                            5%
                        </Text>
                    </View>

                    <View style={styles.billtotal}>
                        <Text style={{flex:1, marginHorizontal:'8%' , fontSize:20}}>
                            Shipping
                        </Text>
                        <Text style={{marginHorizontal:'8%', fontSize:20,}}>
                            Rs. 70.00
                        </Text>
                    </View>

                    <View style={styles.linestyle}>
                    </View>

                    <View style={[styles.billtotal, { marginTop:5}]}>
                        <Text style={{flex:1, marginHorizontal:'8%' , fontWeight:'bold', fontSize:20}}>
                            Total
                        </Text>
                        <Text style={{marginHorizontal:'8%', fontSize:20,}}>
                            Rs. 176.00
                        </Text>
                    </View>
                </View>

                <View >
                    <TouchableOpacity 
                    style={[styles.button , {marginBottom:"5%"}]}
                    >
                    <Text style={{color:'#FFF'}}>Continue to Payment</Text>
                    </TouchableOpacity>
                </View>


                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#F4F4F8',
        display: 'flex',
        flex: 1,
    },

    viewstyle:{
        height:50,
        backgroundColor:'#101010',
        alignItems:"center",
        flexDirection:"row",
        marginTop:5,
        borderRadius:3,
    },
    text:{
        color:'#FFF',
        marginHorizontal:10,
        fontSize:20,
    },

    addressbox:{
        backgroundColor:'#FFF',
        marginHorizontal:"5%",
        marginTop:'5%'
    },

    categorytext:{
        flexDirection:"row",
        marginTop:10,
    },

    addresstext:{
        flexDirection:'row',
        marginTop:10,
        position:'relative',
    },

    icon:{
        color:'blue',
        fontSize:15,
        position:'relative',
        marginHorizontal:25,
        marginTop:10,
    },

    billtotal:{
        flexDirection:'row',
        marginTop:15,

    },
    linestyle:{
        borderBottomWidth:0.7 , 
        width:"90%", 
        alignSelf:'center', 
        marginTop:10  , 
        borderBottomColor:"#919191"
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: '80%',
        borderRadius: 10,
        marginTop: "25%",
    },
})



export default withNavigation(Mycart);