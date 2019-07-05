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
    FlatList
} from 'react-native';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
const width = Dimensions.get('window').width;


export default class SearchViewList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: [
        {name : '野柳', location:'北部', depth: '21米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '龜吼', location:'北部', depth: ' ', need:' ', pic: require('./imgforsearch/2.png'), latitude: 25.197521, longitude: 121.690197, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '大武崙灣', location:'北部', depth: '12米', need:'OW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '八斗子', location:'北部', depth: '25米', need:'AOW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '深澳', location:'北部', depth: '25米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '鼻頭角', location:'北部', depth: '25米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '龍洞', location:'北部', depth: '24米', need:'AOW', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '和美', location:'北部', depth: '25米', need:'AOW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '金沙灣', location:'北部', depth: '20米', need:'AOW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '卯澳', location:'北部', depth: '17米', need:'OW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '大里大溪', location:'北部', depth: '15米', need:'OW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '豆腐岬公園', location:'北部', depth: '8米', need:'OW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '後灣', location:'南部', depth: '20-27米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '石珠', location:'南部', depth: '30米', need:'AOW', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '萬里桐', location:'南部', depth: '22米', need:'AOW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '山海港', location:'南部', depth: '22米', need:'AOW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '紅柴坑', location:'南部', depth: '22米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '合界', location:'南部', depth: '24米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '頂白沙', location:'南部', depth: ' ', need:'AOW', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '貓鼻頭', location:'南部', depth: '35米', need:'AOW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '後壁湖', location:'南部', depth: '16米', need:'OW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '南灣', location:'南部', depth: '18米', need:'AOW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '香蕉灣', location:'南部', depth: '10米', need:'OW', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '鵝鑾鼻', location:'南部', depth: '16米', need:'OW', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '佳洛水', location:'南部', depth: '18米', need:'AOW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '七星岩', location:'南部', depth: '', need:'', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '石雨傘', location:'東部', depth: ' ', need:' ', pic: require('./imgforsearch/1.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '三仙台', location:'東部', depth: ' ', need:' ', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '杉原', location:'東部', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '小野柳', location:'東部', depth: ' ', need:' ', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '開元港', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '土地公廟', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '五孔洞', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '玉女岩', location:'外島', depth: '20米', need:'AOW', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '母雞岩', location:'外島', depth: ' ', need:'AOW', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '雙獅岩', location:'外島', depth: '38', need:'AOW', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '東清灣', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '野銀', location:'外島', depth: '', need:'', pic: require('./imgforsearch/4.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '柴口', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '石朗', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '大白沙', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '人權紀念公園', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/2.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},
        {name : '柚子湖', location:'外島', depth: ' ', need:' ', pic: require('./imgforsearch/3.png'), latitude: 25.206375, longitude: 121.690234, latitudeDelta: 0.005, longitudeDelta: 0.005,},

      ],
      list:[]
    };
  }



  static navigationOptions = {
      title: 'SearchList',
      headerStyle: {
        backgroundColor : '#3FD2FF'
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
      headerRightContainerStyle: {padding: 10}
  };


  componentDidMount() {
    if (this.props.navigation.state.params.loca == '北部') {

      let resultlist = this.state.info.filter((item) => item.location =='北部').map((item) => item);

      this.setState({
        list: resultlist
      })

      }

    if (this.props.navigation.state.params.loca == '中部') {

      let resultlist = this.state.info.filter((item) => item.location =='中部').map((item) => item);

      this.setState({
        list: resultlist
      })
    }

    if (this.props.navigation.state.params.loca == '南部') {

      let resultlist = this.state.info.filter((item) => item.location =='南部').map((item) => item);

      this.setState({
        list: resultlist
      })

      }

    if (this.props.navigation.state.params.loca == '東部') {

      let resultlist = this.state.info.filter((item) => item.location =='東部').map((item) => item);

      this.setState({
        list: resultlist
      })

    }

    if (this.props.navigation.state.params.loca == '外島') {

      let resultlist = this.state.info.filter((item) => item.location =='外島').map((item) => item);

      this.setState({
        list: resultlist
      })

      }
  }

  componentWillReceiveProps() {
    if (this.props.navigation.state.params.loca == '北部') {

      let resultlist = this.state.info.filter((item) => item.location =='北部').map((item) => item);

      this.setState({
        list: resultlist
      })

    }

    if (this.props.navigation.state.params.loca == '中部') {

      let resultlist = this.state.info.filter((item) => item.location =='中部').map((item) => item);

      this.setState({
        list: resultlist
      })
    }

    if (this.props.navigation.state.params.loca == '南部') {

      let resultlist = this.state.info.filter((item) => item.location =='南部').map((item) => item);

      this.setState({
        list: resultlist
      })

      }

    if (this.props.navigation.state.params.loca == '東部') {

      let resultlist = this.state.info.filter((item) => item.location =='東部').map((item) => item);

      this.setState({
        list: resultlist
      })

    }

    if (this.props.navigation.state.params.loca == '外島') {

      let resultlist = this.state.info.filter((item) => item.location =='外島').map((item) => item);

      this.setState({
        list: resultlist
      })

      }
  }


    SearchResult = () => {
      return this.props.navigation.state.params.loca.map((item, index) => <Text key={index}>{item}/</Text>);
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => {
      const { navigate } = this.props.navigation;
         return (
         //<Image style={styles.thumbnail} source={require('./img/house.jpg')} />
         /*<DiveList name={item.name} tel={item.tel} address={item.address} path={item.path} />*/
         <TouchableHighlight onPress={()=>{
                        navigate('ViewResult', {item});
                    }}>
           <View style={styles.container}>
             <Image style={styles.thumbnail} source={item.pic} />
             <Text style={styles.txt}>{item.name} 最大深度: {item.depth} 需要證照: {item.need}</Text>
           </View>
         </TouchableHighlight>
       );

    }

    render() {

      const result = this.props.navigation.state.params.loca;

      return(
        <View style={{flex: 1}}>
        <Text style={{fontSize: 12, color: '#3FD2FF' ,padding: 10}}>搜尋結果 {this.SearchResult()}</Text>
        <FlatList data={this.state.list}
                   renderItem={this._renderItem}
                   keyExtractor = {this._keyExtractor}
         />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      height: 180,
    },

    thumbnail: {
       flex:4,
       resizeMode: 'contain',
       width: width,
       backgroundColor: '#FFFFFF'
     },

     txt: {
       flex : 1,
       paddingLeft: 10,
       color: '#12A4D1',
       fontSize: 12
     },
  })
