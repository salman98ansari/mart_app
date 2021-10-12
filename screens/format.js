import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
const format = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{marginTop:10}}>
                <Text>
                    Demo Screen
                </Text>

            </View>


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
    
})



export default withNavigation(format);