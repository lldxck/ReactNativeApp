// App页面组件路由
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

import BottomTabBar from './AppBottomTabNavigator'

import Details from './Details'
export default AppRouterNavigator = createStackNavigator(
    {
        BottomTabNavigation:{
            screen:BottomTabBar,
            navigationOptions:{
                header:null,
            },
        },
        // 在这里写页面其他的组件路由
        Details:Details,
    }
);