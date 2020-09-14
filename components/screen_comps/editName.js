import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {changeName} from "../../src/actions/funcs"


const editName = (props) =>{

    
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")


    const update = () =>{
        
        props.change(`${firstName} ${lastName}`)
        console.log(firstName, lastName)
        props.navigation.goBack()
    }
    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View>
        <Text>What's your name?</Text>
        <View>
            <View>
                <Text>First Name</Text>
                <TextInput onChangeText={e => setFirstName(e)}/>
            </View>
            <View>
                <Text>Last Name</Text>
                <TextInput onChangeText={e => setLastName(e)}/>
            </View>
        </View>
    </View>
    <View>
        <TouchableOpacity onPress={update}><Text>Update</Text></TouchableOpacity>
    </View>
</SafeAreaView>


}

const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (name) => dispatch(changeName(name))
    }
}
export default connect(null,mapDispatchtoProps)(editName);

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    }
})