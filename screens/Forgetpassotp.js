import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

class Forgetpassotp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
        }
    }
    render(){
        const { pin1, pin2, pin3, pin4 } = this.state
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.textview}> 
                    <Text style={styles.textstyle}>Forgot Password ?</Text>
                    <Text style={{fontSize:15, color:"#FFF" , textAlign:'center', marginHorizontal:10, marginTop:10}}>
                    Enter OTP sent to your Email/Phone to reset your password</Text>
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.box1} maxLength={1} ref={"pin1ref"} value={pin1}
                        keyboardType={'numeric'}
                        onChangeText={(pin1) => {
                            this.setState({ pin1: pin1 })
                            if (pin1 != "") {
                                this.refs.pin2ref.focus()
                            }
                        }} />
                    <TextInput style={styles.box2} maxLength={1} ref={"pin2ref"} value={pin2}
                        keyboardType={'numeric'}
                        onChangeText={(pin2) => {
                            this.setState({ pin2: pin2 })
                            if (pin2 != "") {
                                this.refs.pin3ref.focus()
                            }
                        }}
                    />
                    <TextInput style={styles.box3} maxLength={1} ref={"pin3ref"} value={pin3}
                        keyboardType={'numeric'}
                        onChangeText={(pin3) => {
                            this.setState({ pin3: pin3 })
                            if (pin3 != "") {
                                this.refs.pin4ref.focus()
                            }
                        }} />
                    <TextInput style={styles.box3} maxLength={1} ref={"pin4ref"} value={pin4}
                        keyboardType={'numeric'}
                        onChangeText={(pin4) => {
                            this.setState({ pin4: pin4 })
                            if (pin1 != "") {
                                this.refs.pin4ref.focus()
                            }
                        }} />
                </View>

                <View>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> this.props.navigation.push("Resetpass")}
                    >
                        <Text style={{color:'#FFF'}}>Submit</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#101010',
        display: 'flex',
        flex: 1,
    },
    container2: {
        flex: 0.4,
        justifyContent: "space-evenly",
        flexDirection: 'row',
        alignItems: "center",
        marginTop:"20%",
    },

    box1: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000',
        width: 50,
        height: 60,
        textAlign: 'center',
        backgroundColor: '#ffff'
    },
    box2: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000',
        width: 50,
        height: 60,
        textAlign: 'center',
        backgroundColor: '#ffff'
    },
    box3: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000',
        width: 50,
        height: 60,
        textAlign: 'center',
        backgroundColor: '#ffff'
    },
    box4: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000',
        width: 50,
        height: 60,
        textAlign: 'center',
        backgroundColor: '#ffff'
    },

    textview:{
        alignItems:"center",
        marginTop:40
    },
    textstyle:{
        fontSize:30,
        fontWeight:"bold",
        color:"#FFF",  
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: '80%',
        borderRadius: 10,
        marginTop: '40%',
    }
    
})



export default withNavigation(Forgetpassotp);