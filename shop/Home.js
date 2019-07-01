import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator, ScrollView, Dimensions} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Hr from '@genesy/react-native-hr'
import { SearchBar } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class Home extends React.Component {

  static navigationOptions = {
          title: 'DIVERTING',
          headerStyle: {
            backgroundColor : '#3FD2FF',
            elevation: 0
          },
          headerTitleStyle : {
            flex : 1,
            fontFamily: 'monospace',
            fontSize: 31,
            textAlign: 'center',
            color: '#FFBC02'
          },
          headerRight:
            (<Image style={{width:30, height:20}} source={require('./img/12.png')} />),
          headerRightContainerStyle: {padding: 10},
          headerLeft:
            (<View/>)
      };

  constructor(props) {
    super(props);
  }

     render () {

       const { navigate } = this.props.navigation;

       return (
        <ScrollView style={styles.container}>
          <SearchBar
            containerStyle={
              {
                backgroundColor : '#FFFFFF',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                padding: 20
              }
            }
            inputContainerStyle={
              {backgroundColor : '#EDEEF0'}
            }
            placeholder="搜尋"
            round= {true}
          />

          <Hr align="left"><Text style={styles.subtitle}>熱門潛點</Text></Hr>

          <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableHighlight underlayColor='#F8F8FF' onPress={()=>{navigate('Yehliu');}}>
                  <Image style={styles.picsize} source={require('./imgp1/1.png')} />
            </TouchableHighlight>
                  <Image style={styles.picsize} source={require('./imgp1/2.png')} />
                  <Image style={styles.lastpicsize} source={require('./imgp1/1.png')} />
          </ScrollView>

          <Hr align="left"><Text style={styles.subtitle}>熱門潛店</Text></Hr>

          <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                <TouchableHighlight underlayColor='#F8F8FF' onPress={()=>{navigate('Rambo');}}>
                  <Image style={styles.picsize} source={require('./imgp1/3.png')} />
                </TouchableHighlight>
                  <Image style={styles.picsize} source={require('./imgp1/4.png')} />
                  <Image style={styles.lastpicsize} source={require('./imgp1/3.png')} />
          </ScrollView>

          <Hr align="left"><Text style={styles.subtitle}>在我附近</Text></Hr>

          <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  <Image style={styles.picsize} source={require('./imgp1/5.png')} />
                  <Image style={styles.picsize} source={require('./imgp1/6.png')} />
                  <Image style={styles.lastpicsize} source={require('./imgp1/5.png')} />
          </ScrollView>

        </ScrollView>
       );
     }

   }


   const styles = StyleSheet.create({
     container: {
       backgroundColor: '#FFFFFF'
     },

     subtitle: {
       color: '#707070',
       fontSize: 20,
       padding: 10,
     },

    piccontainer: {
      flexDirection: 'row',
      height: height * 0.25,
      justifyContent: 'space-evenly'
    },

    picsize: {
        height : height *0.25,
        width : width * 0.8,
        borderRadius: 20,
        marginLeft:20,
    },

    lastpicsize: {
        height : height *0.25,
        width : width * 0.8,
        borderRadius: 20,
        marginLeft:20,
        marginRight:20,
    },
   });
