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

export default class Shihchu extends Component<Props> {
    static navigationOptions = {
      title: '石珠',
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
                  由沿海公路往貓鼻頭方向，路旁有一塊約一樓大小的岩石，即為石珠。潛水員可由石珠旁小徑進入，在下水時須通過約30米的銳利礁石群，下水後可是當時的水流狀況向左或向右行進，水底礁石地形落差極大。最大深度在離岸80米左右即達到30米以上。海底有大量的軟珊瑚、石珊瑚、大型海扇、海百合等。熱帶魚群種類多樣，偶有大型迴游性魚類出沒，此潛點水流方向均向外海流動，流勢強勁，須十分小心。適合高層級潛水員從事潛水活動。
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
