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

export default class FifthPage extends Component<Props> {
    static navigationOptions = {
        title: 'FifthPage',
        headerTitleStyle : {
          flex : 1,
          textAlign: 'center'
        },
        headerRight: (<View/>)
    };

    render() {
      return(
        <>
        <Header
          containerStyle={{
            backgroundColor: '#3FD2FF',

          }}
          centerComponent={{ text: 'FifthPage', style: { fontFamily: 'monospace',
                                                          fontSize: 31,
                                                          textAlign: 'center',
                                                          color: '#FFBC02' } }}
          rightComponent={<Image style={{width:30, height:20}} source={require('./img/12.png')} />}
        />
        <Text style={{padding: 30}}>This is FifthPage</Text>
        </>
      );
    }
}
