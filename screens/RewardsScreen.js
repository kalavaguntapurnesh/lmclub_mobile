import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const RewardsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>My Rewards</Text>
      </View>

      <View>
        <View>
          <Text>Hello</Text>
        </View>

        <View style={styles.lottieContainer}>
          <LottieView
            source={require('../assets/Rewards.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </View>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  heading: {
    fontWeight: '800',
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 16,
  },
  scrollContent: {
    paddingTop: 120,
    paddingBottom: 80,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },

  lottieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
