import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator } from 'react-native';
import Pages from './shop/Pages';
import Search from './shop/Search'; //Delete after search page completed
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {

  render () {
    return (
      <Pages/>
    );
  }

}
