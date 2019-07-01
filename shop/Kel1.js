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
import Hr from '@genesy/react-native-hr'

export default class SecondPage extends Component<Props> {
    static navigationOptions = {
        title: '國傑潛水會',
        headerTitleStyle : {
          flex : 1,
          textAlign: 'center'
        },
        headerRight: (<View/>),
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                  <Hr align="left"><Text style={styles.subtitle}>Photo</Text></Hr>
                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  <Image style={{width :Dimensions.get('window').width}} source={require('./img/view1.jpg')} />
                  <Image style={{width :Dimensions.get('window').width}} source={require('./img/view2.jpg')} />
                  <Image style={{width :Dimensions.get('window').width}} source={require('./img/view3.jpg')} />
                </ScrollView>
                <Text style={styles.subtitle}>
                    店家介紹
                </Text>
                <Text style={styles.textView}>
                  這是一段介紹文字。這是一段介紹文字。這是一段介紹文字。這是一段介紹文字。這是一段介紹文字。這是一段介紹文字。
                </Text>
                <Text style={styles.subtitle}>
                    店家資訊
                </Text>
                <Text style={styles.textView}>
                  店名：國傑潛水會{'\n'}
                  聯絡電話：(02)2469-2437{'\n'}
                  地址：基隆市中正區北寧路362號之1{'\n'}
                  <Text onPress={() => {
                    Linking.openURL('http://www.kjdv.com.tw/');}}>
                    相關連結：<Text style={styles.linktxt}>官網</Text>
                  </Text>
                </Text>
                <Text style={styles.subtitle}>
                    課程資訊
                </Text>
                <Text style={styles.textView}>
                  學科課程：這是一段說明文字{'\n'}
                  浮潛技術課程：這是一段說明文字{'\n'}
                  水肺技術課程：這是一段說明文字{'\n'}
                </Text>
                <Text style={styles.subtitle}>
                    評論
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97cbff',
    },
    piccontainer: {
        height: 180,
        paddingTop: 10
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        padding: 10,
        color:'black'
    },
    linktxt: {
      fontSize: 16,
      color: 'blue'
    }
});
