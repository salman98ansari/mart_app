import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Surface} from 'react-native-paper';

const Singlepro = () => {  

    return(
        <SafeAreaView style={styles.container}>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={{marginTop:2}}>
                    <Image 
                    source={require('../assets/img/shoes.png')}
                    style={styles.image}/>    
                </View>

                <View>
                    <Text style={styles.textname}>Nike Blazer Low'77 Vintage</Text>
                </View>

                <View style={{flexDirection:'row' , marginHorizontal:15 , marginTop:10}}>
                    <Text style={{fontSize:17, color:"#FFF"}}>
                        Rs.7200
                    </Text>
                    <Text style={{marginHorizontal:20 , fontSize:15 , textDecorationLine:'line-through' , color:'#FFF'}}>
                        Rs.8000
                    </Text>
                </View>

                <View style={styles.reviewcontainer}>
                    <Surface style={styles.surface}>
                        <Text style={{color:'#FFF'}}>
                            4.5
                        </Text>
                    </Surface>
                    <Text style={{marginHorizontal:15, fontSize:17 , color:'#FFF' , alignSelf:'center'}}>
                        Very Good
                    </Text>
                </View>

                <View style={{marginHorizontal:15}}>
                    <Text style={{marginTop:15 , fontSize:20 , color:'#FFF'}}>
                        Description
                    </Text>
                    <Text style={{marginTop:8 , fontSize:18 , color:'#FFF'}}>
                    Praised by the streets for its classic simplicity and comfort, 
                    the Nike Blazer Low '77 Vintage returns with its low-profile
                    style and heritage b-ball looks. Featuring luscious suede 
                    details, a retro Swoosh design and a super-soft collar, 
                    it's the must-have wardrobe staple that will take you 
                    everywhere.
                    </Text>
                </View>

                <View style={{marginTop:15 , marginHorizontal:15}}>
                    <Text style={{textDecorationLine:'underline' , fontSize:18, color:'#FFF'}}>
                        Product Detail
                    </Text>
                </View>

                <View style={{flexDirection:'row' , justifyContent:'space-evenly' , marginTop:15}}>
                    <Text style={{color:"#FFF", fontSize:20}}>
                        Select Size
                    </Text>
                    <Text style={{color:"#FFF", fontSize:20}}>
                        Select Color
                    </Text>


                </View>


                <View style={styles.sizecontainer}>
                    <Surface style={styles.sizebox}>
                        <Text style={{color:'#FFF'}}>
                            8
                        </Text>
                    </Surface>
                    <Surface style={[styles.sizebox , {marginLeft:25,}]}>
                        <Text style={{color:'#FFF'}}>
                            9
                        </Text>
                    </Surface>
                    <Surface style={[styles.sizebox , {marginLeft:25,}]}>
                        <Text style={{color:'#FFF'}}>
                            10
                        </Text>
                    </Surface>

                </View>
            </ScrollView>

            <View style={{height:60}}>
                <View style={{flex:1 , justifyContent:'center', position:'relative'}}>            
                    <View style={{flexDirection:"row" , justifyContent:'space-evenly' }}>
                        <TouchableOpacity 
                        style={styles.button}
                        >
                            <Text style={{color:'#FFF'}}>Order Again</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button}
                        >
                            <Text style={{color:'#FFF'}}>Check Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#707070',
        display: 'flex',
        flex: 1,
    },
    image:{
        height:180,
        width:'100%'

    },
    textname:{
        fontSize:25 ,
        color:'#FFF' ,
        marginHorizontal:15,
        marginTop:10,
    },
    reviewcontainer:{
        flexDirection:'row' ,
        borderWidth:0.4, 
        height:50,
        width:"100%",
        marginTop:15,
    },
    surface:{
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:7,
        alignSelf:'center',
        marginHorizontal:15,
        backgroundColor:'#000'
    },

    sizecontainer:{
        flexDirection:'row' ,
        borderWidth:0.4, 
        height:70,
        width:"100%",
        marginTop:15,
    },
    sizebox:{
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:7,
        alignSelf:'center',
        marginLeft:25,
        backgroundColor:'#000'

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



export default withNavigation(Singlepro);