

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import SearchAndMore from '../common/HeaderSearchAndMore'

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerRight:<SearchAndMore />,

    };

    render() {
      return (
        <View style={styles.container}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }

    _showMoreApp = () => {
      this.props.navigation.navigate('Mine');
    };

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default HomeScreen;
