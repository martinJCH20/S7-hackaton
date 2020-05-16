import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ImageBackground } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboard, faHeart, faCommentDots, faDownload, faEdit, faChevronRight } from '@fortawesome/free-solid-svg-icons'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: screenWidth,
        backgroundColor: '#DDDDDD'
    },
    header: {
        height: '40%',
        backgroundColor: '#3B8EDA',
        marginBottom: '6%',
        alignItems: 'center',
        // paddingTop: '10%',
        // shadowOpacity:  0.5,
        // shadowRadius:20,
        // shadowColor: "red"
    },
    itemsList: {
        padding: '3%',
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    avatar:{
        borderWidth: 1,
        borderRadius: 75,
        width: 125,
        height: 125
    },
    imageAvatar: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})

const listaItems = [
    {id: 1, title: 'Order', icon: faClipboard},
    {id: 2, title: 'Like', icon: faHeart},
    {id: 3, title: 'Coment', icon: faCommentDots},
    {id: 4, title: 'Download', icon: faDownload},
    {id: 5, title: 'Edit', icon: faEdit}
]

export const ProFile = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}  >
                <ImageBackground style={styles.imageAvatar} source={{uri: 'https://img.pngio.com/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png'}} />
                </View>
            </View>
            <FlatList
                    data={listaItems}
                    renderItem={({item}) => (
                        <View style={styles.itemsList}>
                            <View style={{ width: '95%', flexDirection: 'row'}}>
                            <FontAwesomeIcon icon={ item.icon } style={{ marginRight: '2%'}} />
                            <Text>{item.title}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '5%'}} ><FontAwesomeIcon icon={ faChevronRight } /></View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    horizontal={true}
            />
        </View>
    )
}
