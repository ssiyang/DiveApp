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
    Button,
    Alert,
} from 'react-native';
import Hr from '@genesy/react-native-hr'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

// const Space = {
//   latitude: 25.206375,
//   longitude: 121.690234,
//   latitudeDelta: 0.005,
//   longitudeDelta: 0.005,
// };

// const Space = {
//   latitude: this.props.navigation.state.params.item.latitude,
//   longitude: this.props.navigation.state.params.item.longitude,
//   latitudeDelta: this.props.navigation.state.params.item.latitudeDelta,
//   longitudeDelta: this.props.navigation.state.params.item.longitudeDelta,
// };



export default class ViewResult extends Component {

  // const name = this.props.navigation.state.params.item.name;



//   navigationOptions: ({ navigation }) => ({
//   title: ${navigation.state.params.name},
// })

  static navigationOptions = {

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


  constructor(props) {
    super(props);
    this.state = {
      region : null
    };
  }


    handlePress = () => {
      this.setState({
        region : {
          latitude: this.props.navigation.state.params.item.latitude,
          longitude: this.props.navigation.state.params.item.longitude,
          latitudeDelta: this.props.navigation.state.params.item.latitudeDelta,
          longitudeDelta: this.props.navigation.state.params.item.longitudeDelta,
        }
      });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                  <Hr align="left"><Text style={styles.subtitle}>實景照片</Text></Hr>
                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image style={styles.picsize} source={require('./img/view1.jpg')} />
                  <Image style={styles.picsize} source={require('./img/view2.jpg')} />
                  <Image style={styles.lastpicsize} source={require('./img/view3.jpg')} />
                </ScrollView>

                <Hr align="left"><Text style={styles.subtitle}>潛點介紹</Text></Hr>

                <Text style={styles.textView}>
                  野柳海域的潛點大多集中在野柳風景區內與右側九孔池周遭；欲於風景區內從事活動的潛水員必須在停車場換穿裝備，整裝後由管理處購票入內，接著須步行一大段路。此區域較富盛名的潛點為〝三塊石〞，可以從土地公廟旁或者從漁港邊入水，此海域是由多塊礁岩組成的景點，最大深度約21米左右，有大量的石珊瑚和海綿。此海域在漲退潮時海流強勁，應特別注意。
                </Text>

                <Hr align="left"><Text style={styles.subtitle}>地圖位置</Text></Hr>
                <View style={{height: 300}}>
                  <MapView
                    style={{flex: 1}}
                    initialRegion={{
                      latitude: this.props.navigation.state.params.item.latitude,
                      longitude: this.props.navigation.state.params.item.longitude,
                      latitudeDelta: this.props.navigation.state.params.item.latitudeDelta,
                      longitudeDelta: this.props.navigation.state.params.item.longitudeDelta,
                    }}
                    region = {this.state.region}
                  >
                  <Marker
                    coordinate={{latitude:this.props.navigation.state.params.item.latitude, longitude:this.props.navigation.state.params.item.longitude}}
                  />
                  </MapView>
                  <Button title='返回位置' onPress={this.handlePress} />

                </View>

                <Hr align="left"><Text style={styles.subtitle}>潛店推薦</Text></Hr>

                <ScrollView contentContainerStyle={styles.piccontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                  <TouchableHighlight underlayColor='gray' onPress={()=>{navigate('Rambo');}}>
                  <View>
                  <Image style={styles.picsize} source={require('./img/view1.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  </TouchableHighlight>
                  <View>
                  <Image style={styles.picsize} source={require('./img/view2.jpg')} />
                  <Text style={styles.imgtxt}>88潛水俱樂部</Text>
                  </View>
                  <View>
                  <Image style={styles.lastpicsize} source={require('./img/view3.jpg')} />
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
