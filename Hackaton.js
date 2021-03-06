import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMobileAlt, faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { ProFile } from './src/Components/Hackaton/Profile'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerSlider: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu:{
        height: '8%',
        flexDirection: 'row'
    },
    menuItems:{
        flex: 1, 
        backgroundColor: 'white',
        borderTopColor: '#DDDDDD',
        borderTopWidth: 1,
        alignItems: 'center'
    },
    menuIcons:{
        alignItems: 'center',
        marginTop: '4%'
    }
})

const menu = [
    {id: 1, title: 'Step 1'},
    {id: 2, title: 'Step 2'},
    {id: 3, title: 'Step 3'},
]

export default class Hackaton extends Component {
    constructor(props){
        super(props);
        this.state = {
            postList: '',
            tips: true,
            home: false,
            profile: false
        }
    }

    scrollToOn = (index) => {
        this.scroll.scrollTo({x: index * screenWidth, y: 0, animated: true})
        if(index == 0){
            this.setState({
                tips: true,
                home: false,
                profile: false
            })
        }
        if(index == 1){
            this.setState({
                tips: false,
                home: true,
                profile: false
            })
        }
        if(index == 2){
            this.setState({
                tips: false,
                home: false,
                profile: true
            })
        }
    }

    render(){
        const { postList, tips, home, profile } = this.state;
        return(
            <>
               <ScrollView 
               horizontal={true}
               pagingEnabled={true}
               showsHorizontalScrollIndicator={true}
               ref = {(ref) => this.scroll = ref}
               >
               { <FlatList
                    data={menu}
                    renderItem={({item}) => (
                        <>
                        {tips ? (
                            <Text  style={styles.containerSlider}>{item.title}</Text>
                        ) : null}
                        {home ? (
                            <Text  style={styles.containerSlider}>{item.title}</Text>
                        ) : null}
                        {profile ? (
                            <ProFile />
                        ) : null}
                         </>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    horizontal={true}
                /> }
                </ScrollView>
                <View style={styles.menu}>
                <TouchableOpacity  onPress={() => this.scrollToOn(0)} style={styles.menuItems}>
                    <View style={styles.menuIcons}><FontAwesomeIcon icon={ faMobileAlt } /><Text>TIPS</Text></View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.scrollToOn(1)} style={styles.menuItems}>
                    <View style={styles.menuIcons}><FontAwesomeIcon icon={ faHome } /><Text>HOME</Text></View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.scrollToOn(2)} style={styles.menuItems}>
                    <View style={styles.menuIcons}><FontAwesomeIcon icon={ faUserAlt } /><Text>PROFILE</Text></View>
                </TouchableOpacity>
                </View>
            </>
        )
    }
}