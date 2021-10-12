import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';

class Myordercard extends Component {
    render() {
        return(
            <View style={styles.box}>
                <Feather name="x" size={24} color="#919191"  style={styles.closeicon}/>
                <View style={styles.imagebox}>
                    <Image
                    source={this.props.imageUri} 
                    style={styles.image}/>

                    <View style={styles.textbox}>
                        <Text style={{fontSize:20}}>
                            {this.props.name}
                        </Text>
                        <Text style={{color:'#919191', fontSize:17}}>
                            Mega mart
                        </Text>
                        <Text style={{color:'blue' , fontSize:17}}>
                            {this.props.price}
                        </Text>
                        <View style={{flexDirection:"row",}}>
                            <TouchableOpacity 
                            style={styles.button}
                            >
                                <Text style={{color:'#FFF'}}>Order Again</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={[styles.button, { marginLeft:10 }]}
                            >
                                <Text style={{color:'#FFF'}}>Check Details</Text>
                            </TouchableOpacity>

                        </View>   
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#FFF',
        marginHorizontal:"5%",
        marginTop:'5%',
        elevation:5,
    },

    imagebox:{
        padding:20,
        flexDirection:"row",
    },
    textbox:{
        padding:10,
        marginLeft:10,

    },
    image:{
        height:130,
        width:110,
    },
    
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 30,
        width: 85,
        borderRadius: 10,
        marginTop:20,
        alignContent:"space-between",
    },

    closeicon:{
        position: 'absolute',
        top:10,
        right:10,    
    }
    
    
})



export default Myordercard;