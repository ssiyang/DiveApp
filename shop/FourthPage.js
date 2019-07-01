import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Linking,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class FourthPage extends Component<Props> {

    render() {

      const { navigate } = this.props.navigation;

      return(
        <>
        <Header
          containerStyle={{
            backgroundColor: '#3FD2FF',

          }}
          centerComponent={{ text: 'FourthPage', style: { fontFamily: 'monospace',
                                                          fontSize: 31,
                                                          textAlign: 'center',
                                                          color: '#FFBC02' } }}
          rightComponent={<Image style={{width:30, height:20}} source={require('./img/12.png')} />}
        />
        <Text style={{padding: 30}}>This is Fourthpage</Text>
        </>
      );
    }
  }
