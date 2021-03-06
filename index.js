// generated code:
// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// AppRegistry.registerComponent(appName, () => App);

// Import a library to help create a component


// create a component
const App = () => (
    <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// render to a device
AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
