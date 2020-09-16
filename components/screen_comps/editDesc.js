import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {changeDesc} from "../../src/actions/funcs"

const editDesc = (props) =>{
    const [description, setDescription] = React.useState("")

    const update = () =>{
        
        props.change(`${description}`)
        props.navigation.goBack()
    }

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View style={{paddingLeft: 40}}>
        <Text style={styles.headerText}>What type of passenger are you?</Text>
        <View style={styles.nameBoxStyles}>
            <Text style={styles.nameInputTextStyles}>Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.</Text>
            <TextInput style={styles.nameInputinputStyles} onChangeText={e => setDescription(e)}/>
        </View>

    </View>
    <TouchableOpacity style={styles.touchOpacUpdate} onPress={update}><Text style={{color: "white", alignSelf: "center", fontWeight: "700"}}>Update</Text></TouchableOpacity>
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
    },
    touchOpacUpdate:{
        alignSelf: "center",
        height: 60,
        width: 290,
        backgroundColor: "black",
        marginRight: 5,
        marginTop: 175,
        justifyContent: "center",
        borderRadius: 2,
        
    },
    headerText: {
        fontSize: 23, fontWeight: "700", paddingTop: 40, paddingBottom: 20, width: 280, alignSelf: "flex-start"
      },
      nameBoxStyles: {
        height: 150,
        width: 290,
        paddingLeft: 5,
        borderColor: "#b3b3b3",
        borderRadius: 2,
        borderWidth: 1
    },
    nameInputTextStyles:{
        paddingLeft: 10,
        paddingVertical: 10,
        textAlign: 'left',
        fontWeight: "700",
        color: "#b3b3b3",
        
    },
    nameInputinputStyles: {
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: "700"
    }
})