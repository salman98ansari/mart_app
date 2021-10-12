import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, Modal, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';

const Complete = ({navigation}) => {
    const [showModal, setShowModal] = useState(true);
    return(
        <SafeAreaView style={styles.container}>
            <Modal transparent={true} transparent={true} visible={showModal}>
                <View style={styles.box}>
                    <FontAwesome5 name="check-circle"
                    style={styles.iconstyle} />
                    <View>
                        <Text style={{fontSize:30, fontWeight:"bold",
                         textAlign:'center', marginTop:30 , position:'relative'}}>
                            Your Order is Successful Placed
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontSize:18, fontWeight:"100", textAlign:'center',
                         marginTop:30 , position:'relative'}}>
                            You Can Track The Delivery
                            In The "My Order" Section
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            setShowModal(false);
                            navigation.push("Home");
                          }}
                        >
                            <Text style={{color:'#FFF' , fontSize:20}}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: 'flex',
        flex: 1,
        backgroundColor:'#F4F4F8'
    },
    box:{
        backgroundColor:'#FFF',
        height:"60%",
        width:"85%",
        alignSelf:"center",
        alignItems:'center',
        marginTop:'35%',
        borderRadius:10,
    },
    iconstyle:{
        color:'#10CA88',
        fontSize:100,
        marginTop:30,

    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 40,
        width: 250,
        borderRadius: 10,
        marginTop: 45,
    },   
})



export default withNavigation(Complete);