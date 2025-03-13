import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import countriesData from '../assets/countries.json';
import {AppContext} from '../context/AppContext';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const Register = () => {
  const navigation = useNavigation();

  const {backendUrl} = useContext(AppContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedRole, setSelectedRole] = useState('Not Selected');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = country => {
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');

    const countryObj = countriesData.find(c => c.name === country);
    setStates(countryObj ? countryObj.states : []);
  };

  // Handle State Selection
  const handleStateChange = state => {
    setSelectedState(state);
    setSelectedCity('');

    const countryObj = countriesData.find(c => c.name === selectedCountry);
    const stateObj = countryObj?.states.find(s => s.name === state);
    setCities(stateObj ? stateObj.cities : []);
  };

  const handleRegister = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !selectedCountry ||
      !selectedState ||
      !selectedCity ||
      !selectedRole ||
      !zipCode
    ) {
      Alert.alert('Error', 'Please fill in all fields');
    }

    try {
      const {data} = await axios.post(backendUrl + '/api/user/register', {
        firstName,
        lastName,
        email,
        country: selectedCountry,
        stateResidence: selectedState,
        cityResidence: selectedCity,
        password,
        selectedRole,
        zipCode,
      });

      if (data.success) {
        Alert.alert('Success', 'Registration Successful');
        console.log('Registration was successful');

        navigation.replace('Main');
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.log('Error', error);
      Alert.alert('Error', 'Failed to register, Please try again');
    }
  };

  return (
    <View style={styles.container}>
      {/* Upper Curve for Create Account */}
      <View style={styles.upperCurve}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          {/* <Ionicons name='arrow-back' size={24} color='#000' /> */}
          {/* <Text>X</Text> */}
        </TouchableOpacity>

        {/* Create an Account Text */}
        <Text style={styles.loginTitle}>Create an Account</Text>
      </View>

      {/* Form Container */}
      <View style={[styles.formContainer]}>
        {/* First Name - Full Width */}

        <View style={styles.fullInputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              placeholderTextColor="#aaa"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          {/* Last Name - Full Width */}
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              placeholderTextColor="#aaa"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Country</Text>
            <ModalSelector
              data={countriesData.map((country, index) => ({
                key: index,
                label: country.name,
                value: country.name,
              }))}
              initValue="Select Country"
              onChange={option => handleCountryChange(option.value)}
              style={styles.modalSelector}>
              <Text style={styles.selectorText}>
                {selectedCountry || 'Select Country'}
              </Text>
            </ModalSelector>
          </View>

          <View style={styles.halfInputContainer}>
            {' '}
            <Text style={styles.label}>State</Text>
            <ModalSelector
              data={states.map((state, index) => ({
                key: index,
                label: state.name,
                value: state.name,
              }))}
              initValue="Select State"
              onChange={option => handleStateChange(option.value)}
              style={styles.modalSelector}
              disabled={states.length === 0}>
              <Text style={styles.selectorText}>
                {selectedState || 'Select State'}
              </Text>
            </ModalSelector>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>City</Text>
            <ModalSelector
              data={cities.map((city, index) => ({
                key: index,
                label: city.name,
                value: city.name,
              }))}
              initValue="Select City"
              onChange={option => setSelectedCity(option.value)}
              style={styles.modalSelector}
              disabled={cities.length === 0}>
              <Text style={styles.selectorText}>
                {selectedCity || 'Select City'}
              </Text>
            </ModalSelector>
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your zipCode"
              placeholderTextColor="#aaa"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
        </View>

        <View style={styles.fullInputContainer}>
          <Text style={styles.label}>User Type</Text>

          <ModalSelector
            data={[
              {key: 1, label: 'Not Selected', value: 'Not Selected'},
              {key: 2, label: 'Business User', value: 'Business User'},
              {key: 3, label: 'General User', value: 'General User'},
            ]}
            initValue="Select Role"
            onChange={option => setSelectedRole(option.value)}
            style={styles.modalSelector}>
            <Text style={styles.selectorText}>
              {selectedRole || 'Select Role'}
            </Text>
          </ModalSelector>
        </View>

        {/* Password Input */}
        <View style={styles.fullInputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            // secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      {/* Register Button */}
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Social Logins - Side by Side */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, {marginRight: 10}]}>
          <Image
            source={require('../assets/Google.jpeg')}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/Apple.jpeg')} style={styles.icon} />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Login Navigation */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already Registered?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Login')}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  upperCurve: {
    height: height * 0.12,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  loginTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderStyle: 'dashed',
    borderColor: 'red',
    borderWidth: 2,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  fullInputContainer: {
    width: '100%',
    marginBottom: 8,
  },
  halfInputContainer: {
    width: '48%',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  }, // Added missing comma and closing brace
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
    marginBottom: 12,
  },

  modalSelector: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  selectorText: {
    fontSize: 14,
    color: '#000',
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: -10,
    paddingHorizontal: 20,
    marginBottom: 15,
  }, // Added missing comma
  button: {
    width: '100%',
    backgroundColor: '#22C55E',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -8,
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  socialText: {
    fontSize: 14,
    color: '#000',
  },
  footerContainer: {
    marginTop: -1,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  linkText: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
});

export default Register;
