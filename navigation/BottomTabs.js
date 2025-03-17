import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RewardsScreen from '../screens/RewardsScreen';
import CartScreen from '../screens/CartScreen';
import AboutScreen from '../screens/AboutScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            color: '#8a8a8a',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="home"
              size={24}
              color={focused ? '#333333' : '#8a8a8a'}
            />
          ),
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
            color: '#8a8a8a',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="gift"
              size={24}
              color={focused ? '#333333' : '#8a8a8a'}
            />
          ),
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
            color: '#8a8a8a',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="shopping-cart"
              size={24}
              color={focused ? '#333333' : '#8a8a8a'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            color: '#8a8a8a',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="info-circle"
              size={24}
              color={focused ? '#333333' : '#8a8a8a'}
            />
          ),
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
            color: '#8a8a8a',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="user"
              size={24}
              color={focused ? '#333333' : '#8a8a8a'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
