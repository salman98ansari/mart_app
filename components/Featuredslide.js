import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity , ScrollView} from 'react-native';

class Featuredslide extends Component {
    render() {
        return(
            <SafeAreaView>
                <View style={styles.categorytext}>
                    <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                        Featured
                    </Text> 
                    <Text style={{paddingHorizontal:15,fontSize:15}}
                    onPress={()=> this.props.onseeallclick()}>
                        See All
                    </Text>
                </View>

                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.featured}>
                    <Image 
                    source={require('../assets/img/apple.png')}
                    style={styles.featuredpic}/>

                    <Image 
                    source={require('../assets/img/watermelon.png')}
                    style={styles.featuredpic}/>

                    <Image 
                    source={require('../assets/img/orange.png')}
                    style={styles.featuredpic}/>

                </View>
                </ScrollView>
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
    featured:{
        flexDirection:'row',
    },

    featuredpic:{
        height:180,
        width:150,
        marginTop:15,
        marginLeft:20,
        marginBottom:10,
    },
    
})



export default Featuredslide;