

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome'
import SearchAndMore from '../common/HeaderSearchAndMore'

// 引入轮播组件
import Swiper from 'react-native-swiper'
// 获取屏幕的宽高
import ScreenDimensions from '../common/ScreenDimensions'
const width = ScreenDimensions.window.width;
// 显示格子数据一行数量
const cols = 4;
// 格子的宽度
const cellWidth = 80;
const horizontalMargin = ((width)-cols*cellWidth)/(cols+1);







export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // 轮播图数据
            bannerData:null,
            //格子数据
            cellData:[
                {
                    title:'格子1',
                    img:require('../../assets/images/cell1.png')
                },
                {
                    title:'格子2',
                    img:require('../../assets/images/cell2.png')
                },
                {
                    title:'格子3',
                    img:require('../../assets/images/cell3.png')
                },
                {
                    title:'格子4',
                    img:require('../../assets/images/cell4.png')
                },
                {
                    title:'格子5',
                    img:require('../../assets/images/cell5.png')
                },
                {
                    title:'格子6',
                    img:require('../../assets/images/cell6.png')
                },
                {
                    title:'格子7',
                    img:require('../../assets/images/cell7.png')
                },
                {
                    title:'格子8',
                    img:require('../../assets/images/cell8.png')
                },
                // {
                //     title:'格子9',
                //     img:require('../../assets/images/cell9.png')
                // },
            ],
        }
    }


    static navigationOptions = {
        headerRight:<SearchAndMore />,

    };

    componentWillMount() {
        console.log(ScreenDimensions.window.width);
        console.log(ScreenDimensions.window.height);
    }



    // 渲染轮播图
    renderBanner(){
        return(
            <Swiper
                // 样式
                style={styles.swiper}
                // 组件的高度
                height={180}
                //是否循环滑动，如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片
                loop={true}
                // 自动轮播
                autoplay={true}
                // 设置每隔几秒切换
                autoplayTimeout={3}
                // 水平方向，为false时可设置为竖直方向
                horizontal={true}
                //如果在导入轮播图的页面使用FlatList或者ListView，这个时候只显示第一张，其他的不显示 解决办法加入此句
                removeClippedSubviews={false}
                // 小圆点的位置，距离底部多少
                paginationStyle={{bottom:10}}
                //是否显示下方小圆点
                showsPagination={true}
                // 是否显示左右切换的控制按钮
                showsButtons={true}
                // 未选中的圆点的样式
                dot={<View style={styles.dot} />}
                // 选中的圆点的样式
                activeDot={<View style={styles.activeDot}/>}
                // 轮播控制按钮
                prevButton={<Ionicons name={'angle-left'} size={30} color={'tomato'} />}
                nextButton={<Ionicons name={'angle-right'} size={30} color={'tomato'}/>}

            >
                <TouchableOpacity>
                    <Image style={styles.imgStyle} source={require('../../assets/images/banner1.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imgStyle} source={require('../../assets/images/banner2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imgStyle} source={require('../../assets/images/banner3.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imgStyle} source={require('../../assets/images/banner4.jpg')}/>
                </TouchableOpacity>

            </Swiper>
        )
    }

    // 渲染格子分类数据
    renderCell(){
        let allCell = [];
        let cellData = this.state.cellData;
        cellData.forEach((item,index) => {
            let img = item.img;
            console.log(img);
            console.log(item.img)
            console.log(item.title)
            allCell.push(
                <TouchableOpacity style={styles.outViewImgCell} key={index}>
                    <Image style={styles.imgCell} source={img}/>
                    <Text style={styles.cellText}>{item.title}</Text>
                </TouchableOpacity>
            )
        })
        return allCell;


    }

    // 进入视频播放页面
    showVideoPlay (){
        this.props.navigation.navigate('VideoPlay');
    }

    render() {
      return (
        <View style={styles.container}>
            {/* 轮播图banner */}
            <View style={styles.bannerContainer}>
                {this.renderBanner()}
            </View>
            {/* 九宫格分类 */}
            <View style={styles.cellContainer}>
                {this.renderCell()}
            </View>



          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          <Button title="进入视频播放页面" onPress={this.showVideoPlay.bind(this)} />
        </View>
      );
    }

    _showMoreApp = () => {
      this.props.navigation.navigate('Mine');
    };

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    };


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    bannerContainer:{
        width:width,
        height:180,
        marginBottom: 10,
    },
    swiper:{
        width:width,
        height:180,

    },
    imgStyle:{
        width:width,
        height:180,
    },
    dot:{
        backgroundColor:'black',
        opacity:0.2,
        width:8,
        height:8,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,

    },
    activeDot:{
        backgroundColor:'tomato',
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:10,
        marginRight:9,
    },
    bannerButton:{
        color:'tomato',
    },
    // 格子布局样式
    cellContainer:{
        width:width,
        marginBottom:15,
        // 横向显示
        flexDirection: 'row',
        // 换行
        flexWrap: 'wrap',
        backgroundColor:'#eee',
    },
    outViewImgCell:{
        width:cellWidth,
        height:cellWidth,
        // backgroundColor:'#eee',
        marginTop:10,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:horizontalMargin,

    },
    imgCell:{
        width:40,
        height:40,
        borderRadius:20,
    },
    cellText:{
        color:'#666',
        fontSize:14,
        marginTop:6,
    },
  });


