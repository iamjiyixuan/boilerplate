import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);