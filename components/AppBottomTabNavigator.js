// 底部导航页面
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
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen'
import MineScreen from './screen/MineScreen'
import SettingScreen from './screen/SettingScreen'

const HomeStack = createStackNavigator(
    {
        Home:HomeScreen,
    }
);
const MineStack = createStackNavigator(
    {
        Mine:MineScreen,
    }
);

const SettingStack = createStackNavigator(
    {
        Setting:SettingScreen,
    }
);

const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home:HomeStack,
        Setting:SettingStack,
        Mine:MineStack,
    },
    {
        defaultNavigationOptions:({navigation}) =>({
            tabBarIcon:({focused,horizontal,tintColor}) =>{
                const routeName = navigation.state.routeName;
                let iconName;
                console.log(navigation);
                if(routeName === 'Home'){
                    iconName = 'ios-home';
                }else if(routeName === 'Setting'){
                    iconName = 'ios-settings';
                }else if (routeName === 'Mine') {
                    iconName = 'ios-person';
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
);
 export default AppBottomTabNavigator;

