import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { Formik } from 'formik';
import * as yup from 'yup';


const reviewSchema = yup.object({
    email: yup.string()
        .required('Email Address is Required')
        .email('Please enter valid email'),
});

const Forgetpassemail = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textview}> 
                <Text style={styles.textstyle}>Forgot Password ?</Text>
                <Text style={{fontSize:17, color:"#FFF" , marginTop:10}}>
                    Enter Your Email/Phone to receive OTP</Text>
            </View>
            <Formik
            initialValues={{ email:""}}
            validationSchema={reviewSchema}
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values , errors, touched, isValid}) =>(            
                <View>
                    <View style={styles.backgroundStyle}>
                        <MaterialIcons
                            name="mail-outline"
                            color="black"
                            style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="John@gmail.com"
                            placeholderTextColor="#d5d7de"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email} 
                            />
                    </View>
                    {(errors.email) && 
                    <Text style={{alignSelf:'center', color:"red"}}>{errors.email}</Text>}

                    <View>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={()=> {
                            handleSubmit();
                            navigation.push("Forgetpassotp")
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
    backgroundStyle: {
        width: "90%",
        alignSelf:"center",
        marginTop: "30%",
        backgroundColor: '#ffff',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row'
    },
    inputStyle: {
        marginHorizontal: 5,
        position: 'relative',
        flex: 1,
        fontSize: 20,
        flexDirection: 'row'
    },
    iconStyle: {
        position: 'relative',
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: '#000'
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: '80%',
        borderRadius: 10,
        marginTop: '53%',
    }
    
})



export default withNavigation(Forgetpassemail);