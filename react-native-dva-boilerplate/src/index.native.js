import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import dva, { connect } from 'dva-no-router';
import Model from './models/index';

//
const app = dva();
//
app.model(Model);

//
const App = connect(({ count }) => ({ count }))((props) => {
  const { dispatch, count } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Count: { count }
      </Text>
      <Button title='add' onPress={() => { dispatch({ type: 'count/add' }) }} />
      <Button title='delay_add' onPress={() => { dispatch({ type: 'count/addDelay' }) }}/>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

//
app.router(() => <App />);

AppRegistry.registerComponent('App', () => app.start());