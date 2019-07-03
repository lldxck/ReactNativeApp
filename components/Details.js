import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: '详情页!',
    };

    render() {
      return (
        <View style={styles.container}>
            <Text>详情页面</Text>
        </View>
      );
    }


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default DetailsScreen;