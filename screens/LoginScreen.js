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
import {AppContext} from '../context/AppContext';
// import { LinearGradient } from 'expo-linear-gradient';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();

  const {login} = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleLogin = async () => {
    console.log('Mail is : ', email);
    console.log('Password is : ', password);

    const success = await login(email, password);
    if (success) {
      navigation.replace('Main');
    }
  };

  return (
    <View style={styles.container}>
      {/* Gradient Background */}

      <View
        colors={['#6a11cb', '#2575fc']} // Replace with your gradient colors
        style={styles.gradientBackground}>
        {/* Top Section - Placeholder for GIF/Image */}
        <View style={styles.topSection}>
          {/* Add your GIF or large image here */}
          <Image
            source={require('../assets/LMLogo.jpeg')} // Updated logo path
            style={styles.topImage}
          />
        </View>
      </View>

      {/* Curved White Container */}
      <View style={styles.curvedContainer}>
        {/* Login to LM Club Text */}
        <Text style={styles.loginTitle}>
          Log in to <Text style={{fontWeight: 'bold'}}>LM Club</Text>
        </Text>

        {/* Form Container */}
        <View style={[styles.formContainer]}>
          {/* Email Input */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Keep me signed in & Forgot Password */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.keepSignedInContainer}
              onPress={() => setKeepSignedIn(!keepSignedIn)}>
              <View
                style={keepSignedIn ? styles.checkboxChecked : styles.checkbox}
              />
              <Text style={styles.optionText}>Keep me signed in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.optionText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('Main');
            // }}
            onPress={handleLogin}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
            <Image
              source={require('../assets/Apple.jpeg')}
              style={styles.icon}
            />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Register Navigation */}
        <Text style={styles.footerText}>
          Not Registered?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Register')}>
            Create an Account
          </Text>
        </Text>

        {/* Business User Enroll Button */}
        {/* <TouchableOpacity style={styles.businessButton}>
          <Text style={styles.businessButtonText}>Business User Enroll</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientBackground: {
    height: height * 0.4,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  topImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20, // Added padding to accommodate the new button
  },
  loginTitle: {
    fontSize: 22,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 12, // Reduced gap
    fontSize: 14,
    color: '#000',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  keepSignedInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
    borderRadius: 4,
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    backgroundColor: '#22C55E',
    borderRadius: 4,
    marginRight: 8,
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#22C55E',
    padding: 15,
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
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
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
  footerText: {
    fontSize: 14,
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
  },
  linkText: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
  businessButton: {
    width: '100%',
    backgroundColor: '#495057', // Dark gray color
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20, // Added margin to separate from the footer text
  },
  businessButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
