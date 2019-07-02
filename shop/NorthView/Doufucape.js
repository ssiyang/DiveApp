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

export default class Doufucape extends Component<Props> {
    static navigationOptions = {
      title: '豆腐岬公園',
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
                  豆腐岬公園潛點是一人工漁港內灣型態之潛區，岸上設有公廁、涼亭與販賣部，是一處辦理大型浮潛活動的好場所。此潛場上下岸安全且方便，水中能見度約5米左右，水底呈緩坡地型，最大深度約8米左右。魚類以小型魚為主角、雀鯛等各類熱帶魚時而可見，偶可發現大花枝的蹤跡，水底有大量的魔鬼海膽。此潛點安全性高，適合初級浮潛員於此活動。
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
