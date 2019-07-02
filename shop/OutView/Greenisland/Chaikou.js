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

export default class Chaikou extends Component<Props> {
    static navigationOptions = {
      title: '柴口',
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
                  柴口浮潛區位於柴口村，是綠島三大主要浮潛點之ㄧ。由柴口浮潛區涼亭前方浮潛步道向東一百公尺，西四百公尺，低潮線向外延伸一百公尺間的沿岸海域皆屬柴口浮潛區域。此潛點規劃有機車停車位、涼亭、海中生物解說圖及浮潛、潛水步道等設施。此潛點區為全年禁止採補區，再加上帶客浮潛業者及潛水業者長期於此潛點餵食，因此魚族豐富且不怕人，是極優良的潛點。
                  柴口浮潛、潛水區海底礁石林立，海底更有大量的巨枝鹿角珊瑚、團塊微孔珊瑚及中國角菊珊瑚，魚類以耳帶鰈魚、白條海葵於及鸚哥魚最為大宗，此區偶可見到數量極少的長硨磲蛤。
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
