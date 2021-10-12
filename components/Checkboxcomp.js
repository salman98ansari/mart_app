import React, {useState}from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Checkboxcomp = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View style={styles.checkboxcontainer}>
            <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
            />
            <Text style={{alignSelf:'center' , alignItems:'center'}}>
                {props.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#F4F4F8',
        display: 'flex',
        flex: 1,
    },
    checkboxcontainer:{
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'center'
    },
    checkbox:{
        alignSelf:'center',
        marginTop:3,
        alignItems:'center'
    }
    
})



export default Checkboxcomp;