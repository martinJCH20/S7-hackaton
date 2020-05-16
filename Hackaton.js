import React, { Component, version } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';

//import { LinearGradient } from 'expo-linear-gradient';
import Input from './src/Components/Forms/InputHack';
import Avatar from './src/Components/Forms/Avatar';
import DatePicker from 'react-native-datepicker'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faEnvelope, faMobile, faCalendar, faEdit } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: '#DCDEE1',
        height: '100%'
      },
    header: {   
        position:'absolute',
        backgroundColor: '#cb60b3',
        height: '35%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    containerOptions: {
        position:'absolute',
        backgroundColor: '#FFFFFF',
        height: '70%',
        width: '90%',
        marginTop: '40%',
        marginLeft: '5%',
        marginRight: '5%',
        shadowColor: "#000",
        shadowOpacity:  0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: '5%',
        fontFamily: 'fantasy',
        fontWeight: 'bold'
    },
    contentIconEdit:{
        flexDirection: 'row',
        marginBottom: '2%'
    }
    ,
    iconEdit:{
        marginTop: '4%',
    }
})

const image = { uri: "https://img.pngio.com/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png" };

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          typingNick: false,
          user:'',
          email:'',
          phoneNumber:'',
          date: '',
          userName: 'Your nick',
          editableNick: false
        }
      }

      focus = (value) => {
        if(value === 'nick' ) {
          this.setState({
            typingNick: true
          })
        } 
      } 

      _editNick = () => {
          this.setState({
            editableNick: true,
            userName: '',            
            typingNick: true
          })
      }
render(){
    const { user, email, phoneNumber, date, userName, editableNick } = this.state;

    return (
        <>
        <View style={styles.container}>
        <View style={styles.header}>
            <Avatar image={image} />
            <View style={styles.contentIconEdit}>
                <TextInput value={userName} onChange={(userName) => this.setState({ userName})} editable={editableNick}
                onFocusInput={() => this.focus('nick')}
                ></TextInput>
                <TouchableOpacity  onPress={() => { this._editNick() }} style={styles.iconEdit} ><FontAwesomeIcon icon={ faEdit } /></TouchableOpacity>
            </View>
        </View>
            <View style={styles.containerOptions}>
            <ScrollView>
                <Text style={styles.title}>USER PROFILE</Text>
                <Input value={user} type='default' onChange={(user) => this.setState({ user})} textLabel={'User Name'} 
                holder={'Enter User Name'} icon={faUser} />
                <Input value={email} type='email-address' onChange={(email) => this.setState({ email})} textLabel={'E-mail'} 
                holder={'Enter E-mail'} icon={faEnvelope} />
                <Input value={phoneNumber} type='phone-pad' onChange={(phoneNumber) => this.setState({ phoneNumber})} textLabel={'Mobile Number'} 
                holder={'Enter your 10 digit mobile number'} 
                icon={faMobile} />
                <Input value={date} type='default' onChange={(date) => this.setState({ date})} textLabel={'Date of Birth'} 
                holder={'DD / MM / YYYY'} 
                icon={faCalendar} />
                {/* <DatePicker format="DD/MM/YYYY" mode="date"
                customStyles={{
                    dateIcon: {
                      display: 'none'
                    }
                  }}
                 /> */}
            </ScrollView>
            </View>
        </View>
        </>
    )
}
}