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

export default class Shihlang extends Component<Props> {
    static navigationOptions = {
      title: '石朗',
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
        (<Image style={{width:30, height:20}} source={require('../../img/12.png')} />),
      headerRightContainerStyle: {padding: 10}
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                  <Hr align="left"><Text style={styles.subtitle}>實景照片</Text></Hr>
                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image style={styles.picsize} source={require('../../img/view1.jpg')} />
                  <Image style={styles.picsize} source={require('../../img/view2.jpg')} />
                  <Image style={styles.lastpicsize} source={require('../../img/view3.jpg')} />
                </ScrollView>

                <Hr align="left"><Text style={styles.subtitle}>潛點介紹</Text></Hr>

                <Text style={styles.textView}>
                  石朗浮潛、潛水區位於南寮村，由石朗浮潛、潛水區涼亭西面至潛水步道北到南寮漁港南方防坡堤，南三百公尺低潮線向外延伸七十五公尺的沿岸海域皆屬石朗浮潛、潛水區域。它是綠島規劃的三大潛點之一，機車停車位、涼亭、海中生態解說圖、浮潛、潛水步道一應俱全。此潛點也全年禁止採捕，相關業者與有心人士也長期於此餵食，魚族數量更勝柴口潛點，有綠島「海洋公園」之美譽。石朗浮潛、潛水區海底分佈大量的白穗軟珊瑚與傘型軟珊瑚。魚類以─點蝶魚、角蝶魚與鸚哥魚為最大宗。時而可見桶型海棉與大旋鰓蟲。
                </Text>
                <Hr align="left"><Text style={styles.subtitle}>潛店推薦</Text></Hr>

                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <TouchableHighlight underlayColor='gray' onPress={()=>{navigate('Rambo');}}>
                  <View>
                  <Image style={styles.picsize} source={require('../../img/view1.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  </TouchableHighlight>
                  <View>
                  <Image style={styles.picsize} source={require('../../img/view2.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  <View>
                  <Image style={styles.lastpicsize} source={require('../../img/view3.jpg')} />
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
