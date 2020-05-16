import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native'

let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    containerSlider: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu:{
        height: '10%',
        flexDirection: 'row'
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
            postList: ''
        }
    }
    render(){
        const { postList } = this.state;
        return(
            <>
               <ScrollView 
               horizontal={true}
               pagingEnabled={true}
               showsHorizontalScrollIndicator={true}
               >
               <FlatList
                    data={menu}
                    renderItem={({item}) => (
                        <>
                        <Text  style={styles.containerSlider}>{item.title}</Text>
                         </>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    horizontal={true}
                />
                </ScrollView>
                <View style={styles.menu}>
                <View  style={{flex: 1, backgroundColor: 'blue'}}><Text>Tips</Text></View >
                <View  style={{flex: 1, backgroundColor: 'blue'}}><Text>Home</Text></View >
                <View  style={{flex: 1, backgroundColor: 'blue'}}><Text>Profile</Text></View >
                </View>
            </>
        )
    }
}