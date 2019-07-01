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


export default class SearchShopList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: [
        {name : '藍波潛水', location:'北部', address: '基隆市中山區文化路100號', tel:'(02) 2423-0895', pic: require('./imgforsearch/1.png')},
        {name : '亞潮潛水', location:'北部', address: '台北市中正區汀州路三段275號', tel:'(02)2367-3037', pic: require('./imgforsearch/2.png')},
        {name : '巡航艦潛水', location:'北部', address: '桃園桃園市宏昌六街76號', tel:'(03)220-4896', pic: require('./imgforsearch/3.png')},
        {name : '潛立方旅館', location:'中部', address: '台中市西屯區安和西路69號', tel:'(04)2355-2208', pic: require('./imgforsearch/4.png')},
        {name : '乖巧鯊潛水訓練中心', location:'中部', address: '台中市北區太原路一段460-5號', tel:'(04)2202-3257', pic: require('./imgforsearch/1.png')},
        {name : '高手潛水', location:'南部', address: '台南市東門路2段384號', tel:'(06)336-8292', pic: require('./imgforsearch/2.png')},
        {name : '龍璟潛水', location:'南部', address: '屏東縣恆春鎮南灣路467號', tel:'(08)888-0661', pic: require('./imgforsearch/3.png')},
        {name : '東河潛水', location:'東部', address: '台東縣東河鄉東河村13鄰364號', tel:'0932-660-348', pic: require('./imgforsearch/4.png')},
        {name : '島澳七七潛水', location:'外島', address: '澎湖縣望安鄉將軍村111-1號', tel:'(06)990-2303', pic: require('./imgforsearch/3.png')},
        {name : '藍沙潛水中心', location:'外島', address: '綠島鄉公館村72號', tel:'(089)671888', pic: require('./imgforsearch/4.png')},

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
                        navigate(item.name);
                    }}>
           <View style={styles.container}>
             <Image style={styles.thumbnail} source={item.pic} />
             <Text style={styles.txt}>店家名稱: {item.name}</Text>
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
