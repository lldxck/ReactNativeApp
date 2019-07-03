import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
  } from 'react-native';

class SignInScreen extends React.Component {
    static navigationOptions = {
      title: '登录页',
    };

    render() {
      return (
        <View style={styles.container}>
          <Button title="登录!" onPress={this._signInAsync} />

          <Text style={{marginTop:15,marginBottom:15,fontSize:12,color:'#999'}}>登录之后进入App主页</Text>
          <Button title="注册" onPress={() => this.props.navigation.navigate('Register')}/>
        </View>
      );
    }

    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default SignInScreen;




