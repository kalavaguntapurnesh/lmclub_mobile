import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';

// // Prevent the splash screen from auto-hiding
// SplashScreen.preventAutoHideAsync();

const Splash = ({ navigation }) => {
  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Keep splash for 4 sec
      navigation.replace('Register');
    };

    prepare();
  }, [navigation]);

  // const onLayout = useCallback(async () => {
  //   await SplashScreen.hideAsync(); // Hide the splash screen only after rendering
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LMLogo.jpeg')}
        style={styles.image}      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Black background
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default Splash;