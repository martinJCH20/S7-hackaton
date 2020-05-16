import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})
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
            <View style={styles.container}>
               <Text>Hola</Text>
            </View>
        )
    }
}