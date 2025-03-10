import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {Card} from 'react-native-paper';
  
  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        {/* Set StatusBar background to transparent and bar style to dark-content */}
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
  
        <View style={styles.header}>
          <View style={styles.downHeader}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Y</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Purnesh</Text>
          <Text style={styles.welcomeTwo}>
            To the world's best membership club!
          </Text>
        </View>
  
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <View style={styles.imageRow}>
              <Image
                source={{
                  uri: 'https://www.lmclub.club/assets/beehive-CqYcaS-I.webp',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://www.lmclub.club/assets/broadcast-CWHhJIqs.webp',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://www.lmclub.club/assets/estore-DhiTkpHR.webp',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://www.lmclub.club/assets/enroll-CJF6H07Z.webp',
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://www.lmclub.club/assets/network-Cwi2h2ca.webp',
                }}
                style={styles.image}
              />
            </View>
          </Card>
        </View>
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#4CAF50',
      paddingVertical: 30, // Increased padding for more height
      paddingHorizontal: 20,
      paddingTop: 50, // Increased top padding to move everything down
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    downHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15, // This moves the X and Y buttons slightly down
    },
    button: {
      padding: 10, // Adds touchable space
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    welcomeContainer: {
      padding: 20,
    },
    welcomeText: {
      fontSize: 16,
      fontWeight: '600',
    },
    welcomeTwo: {
      fontSize: 14,
      fontWeight: '400',
    },
    cardContainer: {
      padding: 10,
      backgroundColor: 'transparent',
    },
    card: {
      padding: 15,
      marginBottom: 15,
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: 'transparent',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
      borderWidth: 0,
    },
    imageRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 8,
    },
  });
  