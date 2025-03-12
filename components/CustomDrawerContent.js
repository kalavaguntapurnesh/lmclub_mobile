import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerContent = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Welcome, User</Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.drawerText}>🏠 Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Rewards')}>
        <Text style={styles.drawerText}>🎁 Rewards</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Accounts')}>
        <Text style={styles.drawerText}>➕ Add a Post</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerItem: {
    paddingVertical: 15,
    paddingLeft: 20,
  },
  drawerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  logoutButton: {
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: '#FF3B30',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomDrawerContent;
