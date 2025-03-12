import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Profile Image */}
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
              }}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.labelStyle}>First Name</Text>
            <TextInput style={styles.input} placeholder="First Name" />
            <Text style={styles.labelStyle}>Last Name</Text>
            <TextInput style={styles.input} placeholder="Last Name" />
            <Text style={styles.labelStyle}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Text style={styles.labelStyle}>Country</Text>
            <TextInput style={styles.input} placeholder="Country" />
            <Text style={styles.labelStyle}>State</Text>
            <TextInput style={styles.input} placeholder="State" />
            <Text style={styles.labelStyle}>City</Text>
            <TextInput style={styles.input} placeholder="City" />

            <View style={styles.readOnlyContainer}>
              <Text style={styles.label}>Membership Plan:</Text>
              <Text style={styles.readOnlyText}>Bronze</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // scrollContainer: {
  //   flexGrow: 1,
  // },

  scrollContainer: {
    paddingTop: 120,
    paddingBottom: 80,
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

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 99,
    objectFit: 'cover',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  readOnlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelStyle: {
    fontWeight: '600',
    paddingVertical: 4,
    fontSize: 12,
    color: '#555',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  readOnlyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
