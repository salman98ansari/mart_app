import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity , KeyboardAvoidingView, TextInput} from 'react-native';
import { withNavigation } from 'react-navigation';
const Profile = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewstyle}>
                <Text style={styles.text}>
                    Profile
                </Text>
            </View>
        
            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Name</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View>

            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Email</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View>

            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Email</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View> 

            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Email</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View> 

            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Email</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View> 

            <View style={{marginLeft:'5%' , marginTop:15}}>
                <Text style={{color:"#919191"}}>Email</Text>
            </View>
            <View style={styles.textinput}>
                <TextInput
                style={styles.inputstyle}
                />
            </View>
            <View style={styles.linestyle}>
            </View>  
            


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: 'flex',
        flex: 1,
        backgroundColor: '#F4F4F8',

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

    textinput:{
        width:"90%",
        alignSelf:"center",
        height:30,
        borderBottomWidth:0.2,
        borderBottomColor:'#919191',
        flexDirection:"row",
    },

    inputstyle:{
        marginHorizontal: 0,
        position: 'relative',
        flex: 1,
        fontSize: 20,
        color:"#000",
    },

    linestyle:{
        borderBottomWidth:0.7 , 
        width:"100%", 
        alignSelf:'center', 
        marginTop:20  , 
        borderBottomColor:"#919191"
    }
    
})



export default withNavigation(Profile);