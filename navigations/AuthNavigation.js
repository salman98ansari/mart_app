import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading1 from '../screens/Loading1';
import Welcome from '../screens/Welcome';
import Loading from '../screens/loading';
import Home from '../screens/Home';
import Signin from '../screens/Signin'
import Signup from '../screens/Signup';
import Forgetpassemail from '../screens/Forgetpassemail';
import Forgetpassotp from '../screens/Forgetpassotp';
import Resetpass from '../screens/Resetpass';
import Demo from '../screens/Demo';
import Featured from '../screens/Featured';
import Allproduct from '../screens/Allproduct';
import Myorder from '../screens/Myorder';
import Mycart from '../screens/Mycart';
import Homes from '../screens/Homes';
import Complete from '../screens/Complete';
import Address from '../screens/Address';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Singlepro from '../screens/Singlepro';
import Productfilter from '../screens/Productfilter';

const AuthStack = createStackNavigator();
const AuthScreen = () => (
    <AuthStack.Navigator>

        <AuthStack.Screen name="Demo" component={Demo} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Loading1" component={Loading1} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Loading" component={Loading} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Signin" component={Signin} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Signup" component={Signup} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Forgetpassemail" component={Forgetpassemail} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Forgetpassotp" component={Forgetpassotp} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Resetpass" component={Resetpass} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Home" component={Home} options={{
            headerShown: false
        }} /> 

        <AuthStack.Screen name="Featured" component={Featured} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Allproduct" component={Allproduct} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Myorder" component={Myorder} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Mycart" component={Mycart} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Homes" component={Homes} options={{
            headerShown: false
        }} />


        <AuthStack.Screen name="Complete" component={Complete} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Address" component={Address} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Profile" component={Profile} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Search" component={Search} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Singlepro" component={Singlepro} options={{
            headerShown: false
        }} />

        <AuthStack.Screen name="Productfilter" component={Productfilter} options={{
            headerShown: false
        }} />


    </AuthStack.Navigator>

);

export default AuthScreen;