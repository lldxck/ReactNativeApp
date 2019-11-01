import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Slider,
  } from 'react-native';
import Video from 'react-native-video';
import ScreenSize from './common/ScreenDimensions'

// 获取屏幕的宽度
const screenWidth=ScreenSize.window.width;
console.log(screenWidth);

export default class VideoPlay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoWidth:screenWidth,
            videoHeight:screenWidth*9/16,
            // 设置播放速率
            rate:1,
            // 设置音量
            volume:1,
            // 控制媒体是否播放
            paused:true,
            // 设置提示播放按钮
            tipsPlayVideoImg:'../assets/images/tips_play.png',
            // 判断是否显示播放按钮
            isShowTipsPlay:true,
            // 设置视频从开始处开始播放
            isStartInitial:true,
            duration:0.0,
            // 是否显示控制条
            isShowControlBar:false,
            // 当前播放的时间
            currentTime:0.0,

        }
    }
    componentWillMount(){
        console.log(this.state.paused)
        console.log(this.state.isShowTipsPlay)
    }

    // 点击播放按钮进行视频播放
    startVideoPlay=() =>{
        console.log('1111')
        this.setState({
            paused:false,
            isShowTipsPlay:false
        })
        if(this.state.isStartInitial){
            this.player.seek(0);
            this.setState({
                isStartInitial:false
            })
        }

    }

    _onLoad=(data) => {
        console.log('onLoad',data);
        this.setState({duration:data.duration});
    }

    // 处理时间（视频播放以及总时间）
    handleTime(time){
        let times = Math.floor(time);
        console.log(times);//秒
        let h="0";
        let m="0";
        let s="0";
        let getTime="";
        if(times>=60){
            // 计算时间是多少分钟
            m=parseInt(times/60);
            if(m>=60){
                h=parseInt(m/60);
                m=m%60;
            }
            // 计算余数是多少秒
            s=times%60;
            console.log(m);
            console.log(s);
            getTime=(h>=10?h:('0'+h))+':'+(m>=10?m:('0'+m))+':'+(s>=10?s:('0'+s));

        }else{
            // 小于60
            getTime='0'+h+':'+'0'+m+':'+(times>=10?times:('0'+times));
        }

        return getTime;
    }

    // 拖动Slider进度条改变进度条数值回调
    dragSliderValueChange(dragTime){
        console.log(dragTime);
        // 设置视频播放的位置
        this.player.seek(dragTime);
        // 判断是播放状态下进行拖动进度条还是暂停状态下拖动
        // paused  true==暂停  false===播放
        if(!this.state.paused){
            // 播放状态
            this.setState({
                currentTime:dragTime
            })

        }else{
            // 暂停状态下
            this.setState({
                paused:false,
                currentTime:dragTime,
            })
        }
    }

    // 视频在播放过程中一定时间间隔调用的回调
    _onProgress=(data) => {
        // console.log('onProgress',data);
        this.setState({
            currentTime:data.currentTime
        })

    }


    render(){
        return(
            <View>
                {/* 视频播放 */}
                {/* <View><Text>视频播放页面1</Text></View> */}
                <View>
                    <Video
                        //视频的地址/本地===也可以是音频.mp3
                        source={require('../assets/video/7.mp4')}
                        // source={uri:'http://'}
                        ref={(ref) => {this.player = ref}}
                        // 设置播放速率  0===暂停paused  1===播放normal
                        rate={this.state.rate}
                        // 设置音量  1===正常音量 0===静音  设置更大的数字表示放大的倍数
                        volume={this.state.volume}
                        // 控制音频是否静音   true===静音  false===不静音
                        muted={true}
                        // 控制媒体是否暂停   true===暂停媒体   false===不暂停媒体
                        paused={this.state.paused}
                        // 视频的自适应伸缩行为
                        resizeMode="contain"
                        // 是否重复播放   true===重复   false===不重复
                        repeat={false}
                        // 当App转到后台时是否暂停播放
                        playInBackground={true}
                        // 加载媒体并准备播放时调用的回调函数
                        onLoad={this._onLoad}
                        // 视频开始加载时的回调
                        // onLoadStart={this.loadStart}
                        // 视频播放过程中每个间隔进度单位调用的回调函数
                        onProgress={this._onProgress}
                        style={{width:this.state.videoWidth,height:this.state.videoHeight}}

                    />
                    {/* 视频播放控制条 */}
                    <View style={{
                        width:this.state.videoWidth,
                        height:50,
                        backgroundColor:'rgba(0,0,0,0.3)',
                        position:'absolute',
                        zIndex:100,
                        bottom:0,
                        left:0,
                        }}>
                            <View style={{flex:1,paddingHorizontal:16,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                {/* 后退15秒  */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/后退.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 上一个 */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/左箭头.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 播放/暂停 */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/暂停.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 下一个 */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/右箭头.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 前进15秒 */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/前进.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 播放时间 */}
                                <View style={{width:55}}>
                                    <Text>
                                        {this.handleTime(this.state.currentTime)}
                                    </Text>
                                </View>
                                {/* 播放进度 */}
                                <View style={{width:this.state.videoWidth-290}}>
                                    <Slider
                                        // 最小值
                                        minimumValue={0}
                                        // 最大值
                                        maximumValue={this.state.duration}
                                        // 滑块的初始值，默认值为0
                                        value={this.state.currentTime}
                                        // 在用户拖动滑块的过程中不断调用此回调
                                        onValueChange={(dragTime) => {this.dragSliderValueChange(dragTime)}}
                                    />
                                </View>

                                {/* 视频总时间 */}
                                <View style={{width:55,marginRight:6}}>
                                    <Text>
                                        {this.handleTime(this.state.duration)}
                                    </Text>
                                </View>
                                {/* 全屏 */}
                                <TouchableOpacity style={{marginRight:6}}>
                                    <Image source={require('../assets/images/全屏.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>
                                {/* 倍速 */}
                                <TouchableOpacity>
                                    <Image source={require('../assets/images/闪电.png')} style={{width:16,height:16}}/>
                                </TouchableOpacity>

                            </View>


                    </View>
                </View>

                 {/* 设置视频不播放时显示的背景即显示暂停按钮时的背景 */}
                 {
                        this.state.isShowTipsPlay?
                        <View
                        style={{
                            width:this.state.videoWidth,
                            height:this.state.videoHeight,
                            backgroundColor:'#000',
                            position:'absolute',
                            top:0,
                            left:0,
                            }}>

                        </View>:null
                    }
                    {
                        this.state.isShowTipsPlay?
                        <TouchableOpacity onPress={this.startVideoPlay.bind(this)}
                        style={{
                            width:50,
                            height:80,
                            position:'absolute',
                            top:this.state.videoHeight/2-40,
                            left:this.state.videoWidth/2-25,
                            cursor:'pointer'
                        }}><Image
                        source={require('../assets/images/tips_play.png')}
                        style={{
                            width:50,
                            height:50,
                        }}
                        resizeMode="contain"

                        /><Text style={{color:'#fff',marginTop:6,fontSize:18,textAlign:'center'}}>播放</Text></TouchableOpacity>:null
                    }




                <View><Text>视频播放页面2</Text></View>

            </View>
        )
    }
}

const styles=StyleSheet.create({

})

