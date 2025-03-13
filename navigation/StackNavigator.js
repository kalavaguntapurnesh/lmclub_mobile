import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PricingDetailScreen from '../screens/PricingDetailScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import AboutScreen from '../screens/AboutScreen';
import Splash from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RewardsScreen from '../screens/RewardsScreen';
import BottomTabs from './BottomTabs';
import {AppContext} from '../context/AppContext';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {token} = useContext(AppContext);

  return (
    // <Stack.Navigator initialRouteName="Splash">
    //   {token ? (
    //     <>
    //       <Stack.Screen
    //         name="Main"
    //         component={BottomTabs}
    //         options={{headerShown: false}}
    //       />

    //       <Stack.Screen
    //         name="PricingDetail"
    //         component={PricingDetailScreen}
    //         options={{title: 'Plan Details'}}
    //       />

    //       <Stack.Screen
    //         name="TermsConditions"
    //         component={TermsConditionsScreen}
    //         options={{headerShown: false}}
    //       />

    //       <Stack.Screen
    //         name="About"
    //         component={AboutScreen}
    //         options={{headerShown: false}}
    //       />

    //       <Stack.Screen
    //         name="Rewards"
    //         component={RewardsScreen}
    //         options={{headerShown: false}}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       {' '}
    //       <Stack.Screen
    //         name="Splash"
    //         component={Splash}
    //         options={{headerShown: false}}
    //       />
    //       <Stack.Screen
    //         name="Register"
    //         component={RegisterScreen}
    //         options={{headerShown: false}}
    //       />
    //       <Stack.Screen
    //         name="Login"
    //         component={LoginScreen}
    //         options={{headerShown: false}}
    //       />
    //     </>
    //   )}
    // </Stack.Navigator>

    <Stack.Navigator initialRouteName={token ? 'Main' : 'Splash'}>
      {/* Public Screens (before login) */}
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />

      {/* Private Screens (after login) */}
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PricingDetail"
        component={PricingDetailScreen}
        options={{title: 'Plan Details'}}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditionsScreen}
        options={{title: 'Terms & Conditions', headerShown: false}}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{title: 'My Cart'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
