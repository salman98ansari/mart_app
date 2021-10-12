const { View } = require('native-base');

        <ScrollView
        scrollEventThrottle={16}
        >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <View style={styles.categorytext}>
                    <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                        Categories
                    </Text> 
                    <Text style={{paddingHorizontal:15,}}>
                        See All
                    </Text>
                </View>
                <View>
                    <View style={{height:130, marginTop :10}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="baskets"
                            />   
                        </ScrollView>
                    </View>
                </View>


                <View style={styles.categorytext}>
                    <Text style={{fontSize:20, flex:1, fontWeight:'500', paddingHorizontal:15}}>
                        Categories
                    </Text> 
                    <Text style={{paddingHorizontal:15,}}>
                        See All
                    </Text>
                </View>
                <View>
                    <View style={{height:130, marginTop :10}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/fruits.png')}
                            name="Home"
                            />
                            <Category imageUri={require('../assets/img/baskets.png')}
                            name="baskets"
                            />
                            
                        </ScrollView>

                    </View>

                </View>
                </View>
            </ScrollView>





