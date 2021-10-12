import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Myorder from '../screens/Myorder';
import Mycart from '../screens/Mycart';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="My order" component={Myorder} />
        <Drawer.Screen name="My cart" component={Mycart} />
      </Drawer.Navigator>
    );
  };
  
  export default DrawerNavigator;