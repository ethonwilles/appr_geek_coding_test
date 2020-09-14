import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'
import { changeEmail } from '../../src/actions/funcs';

const editEmail = (props) =>{

    const [email, setEmail] = React.useState("")

    const update = () =>{
        
        props.change(`${email}`)
        
        props.navigation.goBack()
    }

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View>
        <Text>What's your email?</Text>
        <View>
            <Text>Your email address</Text>
            <TextInput onChangeText={text => setEmail(text)}/>
        </View>

    </View>
    <TouchableOpacity onPress={update}><Text>Update</Text></TouchableOpacity>
</SafeAreaView>
}


const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (info) => dispatch(changeEmail(info))
    }
}

export default connect(null, mapDispatchtoProps)(editEmail)

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    }
})