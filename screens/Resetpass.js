import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity , TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({

    password: yup.string()
        .required('Password is required')
        .min(5, ({ min }) => `Password must be at least ${min} characters`),

    confirmpass: yup.string()
        .required('Password iS required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),


});

const Resetpass = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textview}> 
                <Text style={styles.textstyle}>Reset Password!</Text>
            </View>

            <Formik
            initialValues={{password:"", confirmpass:""}}
            validationSchema={reviewSchema}
            onSubmit={(values) =>{
                console.log(values);
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values , errors, touched, isValid}) => (
                <View>
                    <View style={{marginLeft:'10%' , marginTop:'30%'}}>
                        <Text style={{color:"#A6A6A6"}}>Password</Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                        secureTextEntry={true}
                        style={styles.inputstyle}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        />
                        <FontAwesome name="eye" size={20} 
                        color="#FFF"
                        style={styles.iconStyle} />
                    </View>
                    {(errors.password) && 
                    <Text style={{alignSelf:'center', color:"red"}}>{errors.password}</Text>}

                    <View style={{marginLeft:'10%' , marginTop:40}}>
                        <Text style={{color:"#A6A6A6"}}>Confirm Password</Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                        secureTextEntry={true}
                        style={styles.inputstyle}
                        onChangeText={handleChange('confirmpass')}
                        onBlur={handleBlur('confirmpass')}
                        value={values.confirmpass}
                        />
                        <FontAwesome name="eye" size={20} 
                        color="#FFF"
                        style={styles.iconStyle} />
                    </View>
                    {(errors.confirmpass) && 
                    <Text style={{alignSelf:'center', color:"red"}}>{errors.confirmpass}</Text>}

                    <View>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={()=> {
                            handleSubmit();
                            navigation.push("Signup")
                        }}
                        disabled={!isValid}
                        >
                            <Text style={{color:'#FFF'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#101010',
        display: 'flex',
        flex: 1,
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

    textinput:{
        backgroundColor:"#101010",
        width:"80%",
        alignSelf:"center",
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#FFF',
        flexDirection:"row",
    },

    inputstyle:{
        marginHorizontal: 5,
        position: 'relative',
        flex: 1,
        fontSize: 20,
        color:"#FFF"
    },

    iconStyle: {
        position: 'relative',
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 5,
        color: '#FFF'
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: '80%',
        borderRadius: 10,
        marginTop: '30%',
    }
    
})



export default withNavigation(Resetpass);