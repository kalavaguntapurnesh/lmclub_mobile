import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RewardsScreen from '../screens/RewardsScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: true,
        tabBarStyle: {height: 90},
        tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: 'black',
          },
        }}
      />

      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarLabel: 'Rewards',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: 'black',
          },
        }}
      />

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'My Cart',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: 'black',
          },
        }}
      />

      <Tab.Screen
        name="E-Store"
        component={AccountsScreen}
        options={{
          tabBarLabel: 'E-Store',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: 'black',
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
