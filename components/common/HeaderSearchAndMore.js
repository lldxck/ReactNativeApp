// 标题栏的搜索和更多按钮
import React from 'react'
import {StyleSheet,Platform,View,Text,Image,Button,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Menu,MenuOption,MenuOptions,MenuTriggers, MenuTrigger} from 'react-native-popup-menu'


export default class SearchAndMore extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isvisible:false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.search} onPress={() => alert('进入搜索页面')}>
                    <Ionicons name="md-search" size={30}/>
                </TouchableOpacity>
                <View>
                    <Menu>
                        <MenuTrigger>
                            <View style={{marginLeft:5,width:20,alignItems:'center'}}>
                                <Ionicons name="md-more" size={30}/>
                            </View>
                        </MenuTrigger>
                        <MenuOptions style={styles.menuOptions} optionsContainerStyle={{ marginTop: 44,marginLeft:5, borderRadius: 4,width:120,backgroundColor:'black'}}>
                            {/* 弹出框菜单三角指向标签 */}
                            <View style={styles.triangle}></View>
                            <MenuOption onSelect={() => alert('进入more1页面')} style={styles.menuOption}>
                                <View style={styles.MenuOptionConstainer}>
                                    <Ionicons name='ios-more' size={25} color={'#fff'}/>
                                    <Text style={styles.text}>more1</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => alert('进入more2页面')}>
                                <View style={styles.MenuOptionConstainer}>
                                    <Ionicons name='ios-more' size={25} color={'#fff'}/>
                                    <Text style={styles.text}>more2</Text>
                                </View>
                           </MenuOption>
                        </MenuOptions>
                    </Menu>

            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        marginRight: 16,
        // justifyContent:'space-between',
    },
    search:{
        paddingHorizontal: 12,

    },
    more:{
        paddingHorizontal:12,
    },
    menuOptions:{
        backgroundColor:'black',
        width:120,
        borderRadius: 4,


    },

    menuOption:{

        borderBottomColor:'#fff',
        borderBottomWidth: 0.5,
    },
    text:{
        fontSize:15,
        color:'#fff',
        marginLeft: 8,
    },
    MenuOptionConstainer:{
        flexDirection:'row',

    },
    // 弹出框三角指向样式
    triangle:{
        position:'absolute',
        top:-16,
        right:8,
        width:0,
        height:0,
        borderWidth:8,
        borderStyle:'solid',
        borderTopColor: 'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:'black',
    }
})