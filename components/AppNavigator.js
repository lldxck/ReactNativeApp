//
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


import AuthLoadingScreen from './AuthLoadingScreen'
import AppRouterNavigator from './AppRouterNavigator'
import LoginStack from './login/LoginStackNavigator'


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppRouterNavigator,
    Login: LoginStack,
  },
  {
    //   默认先进入判断是否是登录状态
    initialRouteName: 'AuthLoading',
  }
));
