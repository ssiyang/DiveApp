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
    Linking
} from 'react-native';
import Hr from '@genesy/react-native-hr'
import Swiper from 'react-native-swiper'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class rambo extends Component<Props> {
  static navigationOptions = {
          title: '藍波潛水',
          headerStyle: {
            backgroundColor : '#3FD2FF'
          },
          headerTitleStyle : {
            flex : 1,
            fontFamily: 'monospace',
            fontSize: 20,
            textAlign: 'center',
            color: '#FFFFFF'
          },
          headerRight:
            (<Image style={{width:30, height:20}} source={require('./img/12.png')} />),
          headerRightContainerStyle: {padding: 10}
      };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                <Swiper style={styles.piccontainer} showsButtons={true} dotColor='white' activeDotColor='#00fff7'>
                  <Image style={{width :Dimensions.get('window').width, height: height * 0.3}} source={require('./img/view1.jpg')} />
                  <Image style={{width :Dimensions.get('window').width, height: height * 0.3}} source={require('./img/view2.jpg')} />
                  <Image style={{width :Dimensions.get('window').width, height: height * 0.3}} source={require('./img/view3.jpg')} />
                </Swiper>
                
                <Hr align="left"><Text style={styles.subtitle}>店家介紹</Text></Hr>
                <Text style={styles.textView}>
                水肺充氣、潛水訓練召生、進階訓練召生、潛水器材選購専業潛水船(藍波八號) 、專營體驗潛水,潛水教學,器材維修,水底工程,攝影 、水肺充氣,器材販售，歡迎來店參觀選購
                </Text>

                <Hr align="left"><Text style={styles.subtitle}>聯絡介紹</Text></Hr>

                <Text style={styles.textView}>
                  地址: 基隆市中山區文化路100號{'\n'}
                  電話: (02) 2423-0895、(02) 2428-7578{'\n'}
                  <Text>
                    相關連結：<Text onPress={() => {Linking.openURL('http://www.kjdv.com.tw/');}} style={styles.linktxt}>官方網站</Text>
                </Text>
                </Text>

                <Hr align="left"><Text style={styles.subtitle}>潛客評價</Text></Hr>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    piccontainer: {
        flexDirection: 'row',
        height: height * 0.3,
        justifyContent: 'space-evenly'

    },
    picsize: {
        height:160,
        width :Dimensions.get('window').width * 0.8,
        borderRadius: 20,
        marginLeft:20,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    textView: {
        fontSize: 14,
        padding: 10,
        color:'black'
    },
    imgtxt: {
      fontSize: 12,
      color: '#707070',
      paddingLeft: 20
    },

    linktxt: {
      fontSize: 16,
      color: 'blue'
    }
});
