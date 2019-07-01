import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator, ScrollView, Dimensions} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Hr from '@genesy/react-native-hr'
import { SearchBar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton
} from "react-native-selectmultiple-button";
import _ from "lodash";
import { Container, Header, Content, Tab, Tabs } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const multipleData = ["北部", "中部", "南部", "東部", "外島"];





export default class Search extends React.Component {

  static navigationOptions = {
          title: 'SearchPage',
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

    this.state = {
      multipleSelectedData: [],
    };
  }

  _singleTapMultipleSelectedButtons(location) {
    let newArr=[]
    if (this.state.multipleSelectedData.length > 0) {
      newArr=_.drop(this.state.multipleSelectedData , 1);
      newArr.push(location);
    } else {
      newArr.push(location);
    }

    this.setState({
      multipleSelectedData: newArr
    });
  }

  render() {

    const { navigate } = this.props.navigation;
    const { state } = this.state;

    return(
      <Container>
      <Tabs>
      <Tab heading="找潛點">

        <Hr style={{color:'#D1CBCB'}} align="left"><Text style={styles.subtitle}>區域</Text></Hr>

        <View style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center"
          }}>
        {multipleData.map(location => (
            <SelectMultipleButton
              key={location}
              buttonViewStyle={{
                borderRadius: 16,
                height: 40,
                width: 80,
                margin: 15,
              }}
              textStyle={{
                fontSize: 15
              }}
              highLightStyle={{
                borderColor: "#5CA0FC",
                backgroundColor: "transparent",
                textColor: "#5CA0FC",
                borderTintColor: "white",
                backgroundTintColor: "#5CA0FC",
                textTintColor: "white"
              }}
              value={location}
              multiple={false}
              selected={this.state.multipleSelectedData.includes(location)}
              singleTap={valueTap =>
                this._singleTapMultipleSelectedButtons(location)
              }
            />
          ))}
        </View>

        <Hr style={{color:'#D1CBCB'}} align="left"><Text style={styles.subtitle}>難度</Text></Hr>

        <Button
            containerStyle ={{alignItems: 'center'}}
            buttonStyle= {{borderRadius: 22, height:45, width: width*0.75}}
            titleStyle= {{fontSize: 20}}
            title="GO !"
            color="#5CA0FC"
            onPress = {()=>{navigate('SearchViewList', {loca : this.state.multipleSelectedData})}}
          />
          </Tab>

          <Tab heading="找潛店">

            <Hr style={{color:'#D1CBCB'}} align="left"><Text style={styles.subtitle}>區域</Text></Hr>

            <View style={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center"
              }}>
            {multipleData.map(location => (
                <SelectMultipleButton
                  key={location}
                  buttonViewStyle={{
                    borderRadius: 16,
                    height: 40,
                    width: 80,
                    margin: 15,
                  }}
                  textStyle={{
                    fontSize: 15
                  }}
                  highLightStyle={{
                    borderColor: "#5CA0FC",
                    backgroundColor: "transparent",
                    textColor: "#5CA0FC",
                    borderTintColor: "white",
                    backgroundTintColor: "#5CA0FC",
                    textTintColor: "white"
                  }}
                  value={location}
                  multiple={false}
                  selected={this.state.multipleSelectedData.includes(location)}
                  singleTap={valueTap =>
                    this._singleTapMultipleSelectedButtons(location)
                  }
                />
              ))}
            </View>

            <Hr style={{color:'#D1CBCB'}} align="left"><Text style={styles.subtitle}>難度</Text></Hr>

            <Button
                containerStyle ={{alignItems: 'center'}}
                buttonStyle= {{borderRadius: 22, height:45, width: width*0.75}}
                titleStyle= {{fontSize: 20}}
                title="GO !"
                color="#5CA0FC"
                onPress = {()=>{navigate('SearchShopList', {loca : this.state.multipleSelectedData})}}
              />
              </Tab>

          </Tabs>
      </Container>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },

  subtitle: {
    color: '#5CA0FC',
    fontSize: 18,
    padding: 15,
  },

  searchtab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    height : 70
  },

  searchtabtxt: {
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "blue",
  }
});
