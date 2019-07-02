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

export default class Maobitou extends Component<Props> {
    static navigationOptions = {
      title: '貓鼻頭',
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
        (<Image style={{width:30, height:20}} source={require('../img/12.png')} />),
      headerRightContainerStyle: {padding: 10}
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                  <Hr align="left"><Text style={styles.subtitle}>實景照片</Text></Hr>
                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image style={styles.picsize} source={require('../img/view1.jpg')} />
                  <Image style={styles.picsize} source={require('../img/view2.jpg')} />
                  <Image style={styles.lastpicsize} source={require('../img/view3.jpg')} />
                </ScrollView>

                <Hr align="left"><Text style={styles.subtitle}>潛點介紹</Text></Hr>

                <Text style={styles.textView}>
                  貓鼻頭的潛水活動主要以船潛為主。岸潛須行走相當長的一段距離是十分艱苦的，因此岸潛方式幾乎沒有。海底珊瑚種類多、數量龐大、變化萬千。由岸邊延伸出去約100米處有一獨立大礁岩，深度約35米，礁岩頂部有大量的軟珊瑚與大海扇，礁岩中間有一道大裂縫，是各式各樣魚群聚集的地方。此海域時有上升流及下降流，潛水時須多加留意。適合中高級潛水員從事潛水活動。
                </Text>

                <Hr align="left"><Text style={styles.subtitle}>潛店推薦</Text></Hr>

                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <TouchableHighlight underlayColor='gray' onPress={()=>{navigate('Rambo');}}>
                  <View>
                  <Image style={styles.picsize} source={require('../img/view1.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  </TouchableHighlight>
                  <View>
                  <Image style={styles.picsize} source={require('../img/view2.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  <View>
                  <Image style={styles.lastpicsize} source={require('../img/view3.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                </ScrollView>

                <Hr align="left"><Text style={styles.subtitle}>誰來打卡</Text></Hr>

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
        height: 180,
        justifyContent: 'space-evenly'

    },
    picsize: {
        height:160,
        width :Dimensions.get('window').width * 0.8,
        borderRadius: 20,
        marginLeft:20,
    },
    lastpicsize: {
        height:160,
        width :Dimensions.get('window').width * 0.8,
        borderRadius: 20,
        marginLeft:20,
        marginRight:20,
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
    }
});
