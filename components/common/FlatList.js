/**
 * 下拉刷新上拉加载
 */
import React from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'
// ActivityIndicator 该组件的效果就是在Android或iOS中看到的加载中

import ScreenDimensions from './ScreenDimensions'


export default class FlatList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            listData:this.props.data,
            refreshing:false,
            fresh:true,
            animating:true,
            nomore:false,
            // 每页显示个数
            pageSize:0,
            // 显示的页数
            pageNumber:1,
            // item的高度
            // itemHeight:this.props.itemHeight,

        }
    }

    // 计算屏幕高度，然后减去导航的头部，根据列表高度计算出每页的个数，然后向上取整
    // 这样做的目的是防止不满屏状态下，onEndReached函数的主动触发

    // 满屏页面判断
    fullScreenJusting(itemHeight) {
        // 屏幕高度
        const screenHeight = ScreenDimensions.window.width;
        // 计算列数的个数
        const listNum = (screenHeight - 40 ) / itemHeight;
        return Math.ceil(listNum);
    }

    componentDidMount() {
        // 初始化的时候要判断长度，控制上拉加载

        const ListNums = this.fullScreenJusting(this.props.itemHeight);
        this.setState({
            pageSize:ListNums,
        })

        // 获取数据
        this.getOrderList(ListNums,1,true);

    }

    // 获取列表数据
    getOrderList(ListNums,pageNumber,fresh){
        let nomore;
        this.props.refreshData(pageNumber,ListNums).then(res => {
            console.log('请求的刷新数据'+res);
            // 请求成功之后执行以下操作
            if(res.code == 200) {
                const data = res.data;
                if(data.length < ListNums) {
                    // 当请求的数据小于满屏显示的数据时，说明已经请求完数据了
                    // 没有更多数据了
                    nomore = true
                }else{
                    // 还有数据
                    nomore = false
                }

                if(fresh) {
                    this.setState({
                        data:data,
                        nomore:nomore,
                    })
                }else {
                    this.setState({
                        data:this.state.data.concat(data),
                        nomore:nomore
                    })
                }

            }
        })

    }

    // 渲染列表的每一项数据  FlatList在加载的时候会传入一个item对象，这个item对象就是data对象数组的每一子项数据
    _renderItem(item){
        return(
            <TouchableOpacity style={styles.itemContainer}>
                <Image source={require('../../assets/images/cell4.png')} style={styles.itemImg}/>
                <View style={styles.textContainer}>
                    <Text>title</Text>
                    <Text>2019-07-19</Text>
                </View>
            </TouchableOpacity>
        )

    }
    // FlatList头部数据界面
    _ListHeaderComponent = () => {
        return (this.props.ListHeaderComponent || null);
    }
    // FlatList的footer界面
    _ListFooterComponent = () => {
        return(
            <View style={styles.bottomFoot}>
                {/* ActivityIndicator 加载中组件 */}
                {this.state.data.length !=0 ?
                this.state.nomore ? (<Text style={styles.footText}>--我是有底线的--</Text>):(<View>
                    <ActivityIndicator />
                    <Text>加载更多...</Text>
                </View>)
                : null
                }

            </View>
        )
    }

    // 生成自己的key
    _keyExtracto = (item,index) => index.toString();

    render(){
        return(
            <FlatList
                data={this.state.data}
                renderItem={({item}) => {this._renderItem(item)}}
                ListHeaderComponent={this._ListHeaderComponent}
                ListFooterComponent={this._ListFooterComponent}
                keyExtractor={this._keyExtractor}

            >

            </FlatList>

        )
    }

}


const styles = StyleSheet.create({

    // 列表项样式
    itemContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },
    textContainer:{
        flex:1
    },
    itemImg:{
        width:100,
        height:100
    },


})

