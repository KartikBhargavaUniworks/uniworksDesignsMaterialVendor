import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import WalletScreen from '../screens/WalletScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import InventoryScreen from '../screens/InventoryScreen';

const Tab = createBottomTabNavigator();

const HomeTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Wallet"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-balance-wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default HomeTabScreen;

