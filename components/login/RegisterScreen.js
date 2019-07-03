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

class RegisterScreen extends React.Component {
    static navigationOptions = {
      title: '注册页',
    };

    render() {
      return (
        <View style={styles.container}>
          <Button title="注册!" onPress={() => this.props.navigation.navigate('SignIn')} />
          <Text style={{marginTop:15,fontSize:12,color:'#999'}}>注册之后进入登录页面</Text>
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
  export default RegisterScreen;




