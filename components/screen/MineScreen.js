

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class MineScreen extends React.Component {
    static navigationOptions = {
      title: 'Mine',
    };

    render() {
      return (
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync}/>
          <Button title="Details" onPress={() => this.props.navigation.navigate('Details')}/>
          <StatusBar barStyle="default" />
        </View>
      );
    }

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

  export default MineScreen;