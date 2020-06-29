import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import RootStackScreen from './RootStackScreen';
import HomeTabScreen from '../components/HomeBottomTab';

const HomeStack = createStackNavigator();

function Login(){
    return(
      <RootStackScreen/>
    )
  }
  
const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="Login" component={Login}  />
        <HomeStack.Screen name="HomeScreen" component={HomeTabScreen} />
    </HomeStack.Navigator>
);

export default HomeStackScreen;