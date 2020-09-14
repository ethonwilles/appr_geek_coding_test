import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {connect} from "react-redux"
import {changePhone} from "../../src/actions/funcs"


const editPhone = (props) =>{
    const [num, setNum] = React.useState()

    const update = () =>{
        
        props.change(`${num}`)
        
        props.navigation.goBack()
    }

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View>
        <Text>What's your phone number?</Text>
        <View>
            <Text>Your Phone Number</Text>
            <TextInput onChangeText={e => setNum(e)}/>
        </View>

    </View>
    <TouchableOpacity onPress={update}><Text>Update</Text></TouchableOpacity>
</SafeAreaView>
}

const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (info) => dispatch(changePhone(info))
    }
}

export default connect(null,mapDispatchtoProps)(editPhone)

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    }
})