import React, { Component } from 'react';
import Home from './Home';
import Kel1 from './Kel1';
import Rambo from './Rambo';
import SearchViewList from './SearchViewList'
import SearchShopList from './SearchShopList'
import FirstPage from './FirstPage';
import Search from './Search';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import Yehliu from './NorthView/Yehliu'
import GueiHou from './NorthView/GueiHou'
import Tapurun from './NorthView/Tapurun'
import Badouzi from './NorthView/Badouzi'
import Shenao from './NorthView/Shenao'
import Bitou from './NorthView/Bitou'
import Lungtung from './NorthView/Lungtung'
import Homei from './NorthView/Homei'
import Jinshawan from './NorthView/Jinshawan'
import Maoao from './NorthView/Maoao'
import Dali from './NorthView/Dali'
import Doufucape from './NorthView/Doufucape'
import Houwan from './SouthView/Houwan'
import Shihchu from './SouthView/Shihchu'
import Wanlitong from './SouthView/Wanlitong'
import Shanhaikang from './SouthView/Shanhaikang'
import Hongchaikeng from './SouthView/Hongchaikeng'
import Hejie from './SouthView/Hejie'
import Tingposha from './SouthView/Tingposha'
import Maobitou from './SouthView/Maobitou'
import Houbihu from './SouthView/Houbihu'
import Nanwan from './SouthView/Nanwan'
import Siangjiaobay from './SouthView/Siangjiaobay'
import Eluanbi from './SouthView/Eluanbi'
import Jialeshuei from './SouthView/Jialeshuei'
import Chihsiangyen from './SouthView/Chihsiangyen'
import Shihyusan from './EastView/Shihyusan'
import Sansianta from './EastView/Sansianta'
import Shanyuan from './EastView/Shanyuan'
import Siaoyeliou from './EastView/Siaoyeliou'
import Kaiyuan from './OutView/Lanyu/Kaiyuan'
import Landtemple from './OutView/Lanyu/Landtemple'
import Wukungtung from './OutView/Lanyu/Wukungtung'
import Yunuyen from './OutView/Lanyu/Yunuyen'
import Chiyen from './OutView/Lanyu/Chiyen'
import Shuangshihyen from './OutView/Lanyu/Shuangshihyen'
import Tungchingwan from './OutView/Lanyu/Tungchingwan'
import Yehyin from './OutView/Lanyu/Yehyin'
import Chaikou from './OutView/Greenisland/Chaikou'
import Shihlang from './OutView/Greenisland/Shihlang'
import Dabaisha from './OutView/Greenisland/Dabaisha'
import HRCulturepark from './OutView/Greenisland/HRCulturepark'
import Yutzuhu from './OutView/Greenisland/Yutzuhu'


import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View} from 'react-native';
import {
    createStackNavigator, createAppContainer, createBottomTabNavigator,
} from 'react-navigation';
export default class Pages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <AppContainer/>

        )
    }
}


const HomeNavigator = createStackNavigator({
    Home: {screen: Home},
    Kel1: {screen: Kel1},
    Rambo: {screen: Rambo},
    Yehliu: {screen: Yehliu},
},{
     initialRouteName: 'Home',
 })
;

const SearchNavigator = createStackNavigator({
    Search: {screen: Search},
    SearchViewList: {screen: SearchViewList},
    SearchShopList: {screen: SearchShopList},
    野柳: {screen: Yehliu},
    龜吼: {screen: GueiHou},
    大武崙灣: {screen: Tapurun},
    藍波潛水: {screen: Rambo},
    八斗子: {screen: Badouzi},
    深澳: {screen: Shenao},
    鼻頭角: {screen: Bitou},
    龍洞: {screen: Lungtung},
    和美: {screen: Homei},
    金沙灣: {screen: Jinshawan},
    卯澳: {screen: Maoao},
    大里大溪: {screen: Dali},
    豆腐岬公園: {screen: Doufucape},
    後灣: {screen: Houwan},
    石珠: {screen: Shihchu},
    萬里桐: {screen: Wanlitong},
    山海港: {screen: Shanhaikang},
    紅柴坑: {screen: Hongchaikeng},
    合界: {screen: Hejie},
    頂白沙: {screen: Tingposha},
    貓鼻頭: {screen: Maobitou},
    後壁湖: {screen: Houbihu},
    南灣: {screen: Nanwan},
    香蕉灣: {screen: Siangjiaobay},
    鵝鑾鼻: {screen: Eluanbi},
    佳洛水: {screen: Jialeshuei},
    七星岩: {screen: Chihsiangyen},
    石雨傘: {screen: Shihyusan},
    三仙台: {screen: Sansianta},
    杉原: {screen: Shanyuan},
    小野柳: {screen: Siaoyeliou},
    開元港: {screen: Kaiyuan},
    土地公廟: {screen: Landtemple},
    五孔洞: {screen: Wukungtung},
    玉女岩: {screen: Yunuyen},
    母雞岩: {screen: Chiyen},
    雙獅岩: {screen: Shuangshihyen},
    東靖灣: {screen: Tungchingwan},
    野銀: {screen: Yehyin},
    柴口: {screen: Chaikou},
    石郎: {screen: Shihlang},
    大白沙: {screen: Dabaisha},
    人權紀念公園: {screen: HRCulturepark},
    柚子湖: {screen: Yutzuhu},
    Rambo: {screen: Rambo},
},{
     initialRouteName: 'Search',
 })
;

const TabNavigator = createBottomTabNavigator({
    page1:
    {
      screen: FirstPage,
      navigationOptions: {
        tabBarLabel: "People",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-people' : 'md-people' }
                     size={24}
                 />
             ),
      }
    },

    Search:
    {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-search' : 'md-search' }
                     size={24}
                 />
             ),
      }
    },

    Home:
    {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-home' : 'md-home' }
                     size={24}
                 />
             ),
      }
    },

    page4:
    {
      screen: FourthPage,
      navigationOptions: {
        tabBarLabel: "Notifications",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-notifications' : 'md-notifications' }
                     size={24}
                 />
             ),
      }
    },

    page5:
    {
      screen: FifthPage,
      navigationOptions: {
        tabBarLabel: "Person",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-person' : 'md-person' }
                     size={24}
                 />
             ),
      }
    },

},{
     initialRouteName: 'Home',
     tabBarOptions: {
          inactiveTintColor: "#FFFFFF",
          activeTintColor: "#444444",
          labelStyle: {
             fontSize: 12,
          },
          activeBackgroundColor: '#E8E7E7'
       }
 })
;

const AppContainer = createAppContainer(TabNavigator);
