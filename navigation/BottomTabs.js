import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PricingDetailScreen from '../screens/PricingDetailScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import AboutScreen from '../screens/AboutScreen';
import Splash from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RewardsScreen from '../screens/RewardsScreen';

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
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarLabel: 'Beehive',
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
