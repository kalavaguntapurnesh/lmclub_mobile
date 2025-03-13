import axios from 'axios';

import {createContext, useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const backendUrl = 'http://localhost:4000';

  const [userData, setUserData] = useState(null);

  const [token, setToken] = useState(null);

  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = itemId => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          console.log('The token from the backend is : ', storedToken);
          loadUserProfileData(storedToken);
        }
      } catch (error) {
        console.log('Error loading token: ', error);
      }
    };

    loadToken();
  }, []);

  //we will save the token when it arrives from backend

  useEffect(() => {
    const saveToken = async () => {
      if (token) {
        AsyncStorage.setItem('token', token);
        loadUserProfileData(token);
      } else {
        AsyncStorage.removeItem('token');
        setUserData(null);
      }
    };

    saveToken();
  }, [token]);

  const loadUserProfileData = async userToken => {
    try {
      console.log('Calling the getProfile API from the frontend');
      const {data} = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: {token: userToken},
      });
      console.log('User profile data is : ', data);

      if (data.success) {
        setUserData(data.userData);
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to fetch user data');
    }
  };

  const login = async (email, password) => {
    try {
      if (email === '' || password === '') {
        Alert.alert('Fields required', 'Enter email or password fields');
      } else {
        const {data} = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (data.success) {
          await AsyncStorage.setItem('token', data.token);
          setToken(data.token);
          loadUserProfileData(data.token);
          console.log('Login Successful, token stored.', data.token);
          return true;
        } else {
          Alert.alert('Login Failed', data.message);
          return false;
        }
      }
    } catch (error) {
      console.log('error');
      Alert.alert('Login Failed', 'Please check your credentials');
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
    setUserData(null);
  };

  const value = {
    token,
    setToken,
    userData,
    setUserData,
    backendUrl,
    loadUserProfileData,
    login,
    logout,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
