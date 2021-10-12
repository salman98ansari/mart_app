import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
const Demo = props => {

    return (
        <View style={{ marginVertical: 50 }}>
            <Text style={styles.text}>NSPV MART</Text>
            <Button
                onPress={() => props.navigation.navigate('Loading1')}
                title="APP"
            />
            <Button
                onPress={() => props.navigation.navigate('Featured')}
                title="featured"
            />
            <Button
                onPress={() => props.navigation.navigate('Allproduct')}
                title="all products"
            />
            <Button
                onPress={() => props.navigation.navigate('Myorder')}
                title="Myorder"
            />

            <Button
                onPress={() => props.navigation.navigate('Mycart')}
                title="Mycart"
            />

            <Button
                onPress={() => props.navigation.navigate('Homes')}
                title="Homes"
            />

            <Button
                onPress={() => props.navigation.navigate('Home')}
                title="Home"
            />

            <Button
                onPress={() => props.navigation.navigate('Complete')}
                title="Complete"
            />

            <Button
                onPress={() => props.navigation.navigate('Profile')}
                title="Profile"
            />

            <Button
                onPress={() => props.navigation.navigate('Address')}
                title="Address"
            />

            <Button
                onPress={() => props.navigation.navigate('Search')}
                title="Search"
            />

            <Button
                onPress={() => props.navigation.navigate('Singlepro')}
                title="Single product"
            />

            <Button
                onPress={() => props.navigation.navigate('Productfilter')}
                title="Filter"
            />
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
    /* textStyle: {
      alignItems: 'center'
    } */
});

export default Demo;
