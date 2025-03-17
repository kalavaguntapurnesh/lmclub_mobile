/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import AppContextProvider from './context/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import './global.css';
import {verifyInstallation} from 'nativewind';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontFamily: 'Outfit',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
