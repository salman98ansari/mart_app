import React , {useState , setState} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { List } from 'react-native-paper';


import Checkboxcomp from '../components/Checkboxcomp'

const Productfilter = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewstyle}>
                <Text style={styles.text}>
                    Filter
                </Text>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal:20, marginTop:10, marginBottom:10}}>
                    <Text style={{color:"#7C77B9", fontSize:15}}>
                        Price
                    </Text>
                </View>

                <View style={{marginHorizontal:20, marginTop:10, marginBottom:10}}>
                    <Text style={{color:"#7C77B9", fontSize:15}}>
                        Category
                    </Text>
                </View>

                <View>
                    <List.Accordion
                    title="Sample Category"
                    style={{borderTopWidth:0.5,padding:0,}}>
                    <TouchableOpacity>
                    <List.Item title="First item" 
                    style={{borderBottomWidth:0.5}}/>
                    </TouchableOpacity>
                    </List.Accordion>
                </View>

                <View>
                    <List.Accordion
                    title="Sample Category"
                    style={{borderTopWidth:0.5,padding:0,}}>
                    <TouchableOpacity>
                    <List.Item title="First item" 
                    style={{borderBottomWidth:0.5}}/>
                    </TouchableOpacity>
                    </List.Accordion>
                </View>
                <View>
                    <List.Accordion
                    title="Sample Category"
                    style={{borderTopWidth:0.5,padding:0,}}>
                    <TouchableOpacity>
                    <List.Item title="First item" 
                    style={{borderBottomWidth:0.5}}/>
                    </TouchableOpacity>
                    </List.Accordion>
                </View>

                <View style={{marginHorizontal:20, marginTop:10, marginBottom:10}}>
                    <Text style={{color:"#7C77B9", fontSize:15}}>
                        Customer and Rating
                    </Text>
                </View>
                
                <View style={styles.ratingbox}>
                    <Checkboxcomp
                    name="4 ★ & above" />
                    <Checkboxcomp
                    name="3 ★ & above"/>
                    <Checkboxcomp 
                    name="2 ★ & above"/>
                    <Checkboxcomp
                    name="1 ★ & above"/>
                </View>

                <View style={{marginHorizontal:20, marginTop:10, marginBottom:10}}>
                    <Text style={{color:"#7C77B9", fontSize:15}}>
                        Offer and Discounts
                    </Text>
                </View>
                
                <View style={styles.ratingbox}>
                    <Checkboxcomp
                    name="60% or more" />
                    <Checkboxcomp
                    name="50% or more"/>
                    <Checkboxcomp 
                    name="30% or more"/>
                    <Checkboxcomp
                    name="25% or more"/>
                    <Checkboxcomp
                    name="10% or more"/>
                </View>

                <View style={{flexDirection:"row" , marginTop:30, marginBottom:20, justifyContent:'space-evenly' }}>
                <TouchableOpacity 
                style={[styles.button ,{backgroundColor:"#F4F4F8", borderWidth:0.9}]}
                >
                    <Text style={{color:'#000'}}>Clear Filter</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                >
                    <Text style={{color:'#FFF'}}>Apply Filter</Text>
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
    ratingbox:{
        width:"100%",
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        backgroundColor:"#FFF"
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 40,
        width: "40%",
        borderRadius: 10,
    },
    
})



export default withNavigation(Productfilter);