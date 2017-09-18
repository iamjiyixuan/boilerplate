import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import dva, { connect } from 'dva-no-router';
import CountModel from './models/count';
import GankModel from './models/gank';
//
const app = dva();
//
app.model(CountModel);
app.model(GankModel);

//
const App = connect(({ count }) => ({ count }))((props) => {
  const { dispatch, count } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Count: { count }
      </Text>
      <Button title='add' onPress={() => { 
        console.log('onPress add');
        dispatch({ type: 'count/add' }); 
        }} />
      <Button title='delay_add' onPress={() => { dispatch({ type: 'count/addDelay' }) }}/>
      <Button title='gank' onPress={() => { dispatch({ type: 'gank/getGankData' }) }}/>
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