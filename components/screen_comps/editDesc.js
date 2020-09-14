import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {changeDesc} from "../../src/actions/funcs"

const editDesc = (props) =>{
    const [description, setDescription] = React.useState()

    const update = () =>{
        
        props.change(`${description}`)
        props.navigation.goBack()
    }

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View>
        <Text>What type of passenger are you?</Text>
        <View>
            <Text>Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.</Text>
            <TextInput onChangeText={e => setDescription(e)}/>
        </View>

    </View>
    <TouchableOpacity onPress={update}><Text>Update</Text></TouchableOpacity>
</SafeAreaView>
}


const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (info) => dispatch(changeDesc(info))
    }
}

export default connect(null, mapDispatchtoProps)(editDesc)

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    }
})