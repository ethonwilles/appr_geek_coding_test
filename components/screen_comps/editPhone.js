import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {connect} from "react-redux"
import {changePhone} from "../../src/actions/funcs"


const editPhone = (props) =>{
    const [num, setNum] = React.useState(props.items.phone)

    const update = () =>{
        
        props.change(`${num}`)
        
        props.navigation.goBack()
    }

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View style={{paddingLeft: 40}}>
        <Text style={styles.headerText}>What's your phone number?</Text>
        <View style={styles.nameBoxStyles}>
            <Text style={styles.nameInputTextStyles}>Your Phone Number</Text>
            <TextInput style={styles.nameInputinputStyles} value={num} onChangeText={e => setNum(e)}/>
        </View>

    </View>
    <TouchableOpacity style={styles.touchOpacUpdate} onPress={update}><Text style={{color: "white", alignSelf: "center", fontWeight: "700"}}>Update</Text></TouchableOpacity>
</SafeAreaView>
}

const mapStatetoProps = (state) =>{
    return{
        items: state.states
    }
}

const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (info) => dispatch(changePhone(info))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(editPhone)

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
        marginTop: 250,
        justifyContent: "center",
        borderRadius: 2,
        
    },
    headerText: {
        fontSize: 23, fontWeight: "700", paddingVertical: 40, alignSelf: "flex-start"
      },
      nameBoxStyles: {
        height: 75,
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