import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContext} from '../context/AppContext';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const {userData, backendUrl, logout} = useContext(AppContext);

  const navigation = useNavigation();

  const [firstName, setFirstName] = useState(userData?.firstName || '');
  const [lastName, setLastName] = useState(userData?.lastName || '');
  const [country, setCountry] = useState(
    userData?.billingAddress?.country || '',
  );
  const [state, setState] = useState(userData?.billingAddress?.state || '');
  const [city, setCity] = useState(userData?.billingAddress?.city || '');
  const [zipCode, setZipCode] = useState(
    userData?.billingAddress?.pinCode || '',
  );
  const [image, setImage] = useState(userData?.image || null);
  const [selectedImageBase64, setSelectedImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 0.8, includeBase64: true},
      response => {
        if (response.didCancel) {
          console.log('User Cancelled Image Picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0];
          setImage(selectedImage.uri);
          setSelectedImageBase64(selectedImage.base64);
        }
      },
    );
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        backendUrl + '/api/user/update-profile',
        {
          userId: userData?._id,
          firstName,
          lastName,
          country,
          state,
          city,
          zipCode,
          image: selectedImageBase64
            ? `data:image/jpeg;base64,${selectedImageBase64}`
            : image,
        },
      );

      if (response.data.success) {
        Alert.alert('Success', 'Profile updated successfully!');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      console.log('Upload Error: ', error);
      Alert.alert('Upload Failed', 'Something Went Wrong');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

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
            <TouchableOpacity onPress={pickImage}>
              {' '}
              <Image
                source={{
                  uri:
                    image ||
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.labelStyle}>First Name</Text>
            <TextInput
              style={styles.input}
              value={userData?.firstName}
              placeholder="First Name"
            />
            <Text style={styles.labelStyle}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={userData?.lastName}
              placeholder="Last Name"
            />
            <Text style={styles.labelStyle}>Email Address</Text>
            <TextInput
              style={[
                styles.input,
                userData?.email ? styles.disabledInput : null,
              ]}
              placeholder="Email"
              keyboardType="email-address"
              editable={false}
              value={userData?.email}
            />
            <Text style={styles.labelStyle}>Country</Text>
            <TextInput
              style={styles.input}
              value={userData?.billingAddress?.country}
              placeholder="Country"
            />
            <Text style={styles.labelStyle}>State</Text>
            <TextInput
              style={styles.input}
              value={userData?.billingAddress?.state}
              placeholder="State"
            />
            <Text style={styles.labelStyle}>City</Text>
            <TextInput
              style={styles.input}
              value={userData?.billingAddress?.city}
              placeholder="City"
            />

            <Text style={styles.labelStyle}>Zip Code</Text>
            <TextInput
              style={styles.input}
              value={userData?.billingAddress?.pinCode}
              placeholder="Zip Code"
            />

            {/* <View style={styles.readOnlyContainer}>
              <Text style={styles.label}>Membership Plan:</Text>
              <Text style={styles.readOnlyText}>Bronze</Text>
            </View> */}

            <TouchableOpacity onPress={updateProfile} style={styles.button}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogout}
              style={[styles.button, styles.logoutButton]}>
              <Text style={styles.buttonText}>Logout</Text>
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

  disabledInput: {
    backgroundColor: 'lightgray',
    color: 'gray',
  },

  logoutButton: {
    backgroundColor: '#D32F2F', // Red color for logout button
  },
});
