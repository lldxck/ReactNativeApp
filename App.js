import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu'

import AppNavigator from './components/AppNavigator'

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MenuProvider>
                    <AppNavigator />
                </MenuProvider>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})









