import React , {useState} from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';

const DATA = [
    {
      id: "1",
      title: "shrewapura, mirapur, dhaka-1216 ,\nhouse no 938,\nroad no 9",
    },
    {
      id: "2",
      title: "Chatkhil naokhali,\nhouse no:22,\nroad no :7",
    },
    {
      id: "3",
      title: "Third Item",
    },
  ];

  const Item = ({ item, onPress, style ,textstyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text onPress={onPress} style={[styles.title, textstyle]}>{item.title}</Text>
      <FontAwesome5 name="dot-circle" onPress={onPress} style={[styles.iconstyle, textstyle]} />
    </TouchableOpacity>
  );


const Address = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#101010" : "#FFF";
        const color = item.id === selectedId ? "#FFF" : "#000";
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ backgroundColor }}
            textstyle={{ color }}
          />
        );
      };

    return(
        <SafeAreaView style={styles.container}>
            <View style={{marginTop:15}}>
              <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              style={styles.flatlist}
              />
            </View>

            <View>
                <TouchableOpacity 
                style={[styles.button , {marginTop:"45%"}]}
                >
                <Text style={{color:'#FFF'}}>Add New Address</Text>
                </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity 
                style={[styles.button , {marginBottom:"5%"}]}
                >
                <Text style={{color:'#FFF'}}>Confirm Address</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: 'flex',
        flex: 1,
        backgroundColor:'#F4F4F8',
    },
    item: {
        height:140,
        width:'100%',
        borderWidth:0.5,
        borderColor:'#000',
        flexDirection:'row',
        position:'relative',
      },

      title: {
        fontSize: 25,
        marginHorizontal:10,
        flex:1,
        position:'relative',
        marginTop:10
      },
      iconstyle:{
        color:'#FFF',
        fontSize:20,
        position:'relative',
        marginHorizontal:25,
        marginTop:20,
      },
      button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#353536',
        height: 50,
        width: '80%',
        borderRadius: 10,
        marginTop: 10,
      },

    
})



export default withNavigation(Address);