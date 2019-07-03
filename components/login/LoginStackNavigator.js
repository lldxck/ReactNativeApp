import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'

const LoginStack = createStackNavigator(
    {
        SignIn:LoginScreen,
        Register:RegisterScreen,
    }
);
export default LoginStack;



