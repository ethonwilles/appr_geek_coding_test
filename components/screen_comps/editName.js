import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faRoute } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {changeName} from "../../src/actions/funcs"


const editName = (props) =>{

    
    const [firstName, setFirstName] = React.useState(props.items.name.split(" ")[0])
    const [lastName, setLastName] = React.useState(props.items.name.split(" ")[1])


    const update = () =>{
        
        props.change(`${firstName} ${lastName}`)
        console.log(firstName, lastName)
        props.navigation.goBack()
    }
    
    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View style={{paddingLeft: 40}}>
        <Text style={props.route.params.headerStyles}>What's your name?</Text>
        <View style={styles.nameBoxStyles}>
            <View style={styles.nameInputStyles}>
                <Text style={styles.nameInputTextStyles}>First Name</Text>
                <TextInput style={styles.nameInputinputStyles} value={firstName} onChangeText={e => setFirstName(e)}/>
            </View>
            <View style={styles.nameInputStyles}>
                <Text style={styles.nameInputTextStyles}>Last Name</Text>
                <TextInput style={styles.nameInputinputStyles} value={lastName} onChangeText={e => setLastName(e)}/>
            </View>
        </View>
    </View>
    <View>
        <TouchableOpacity style={styles.touchOpacUpdate} onPress={update}><Text style={{color: "white", alignSelf: "center", fontWeight: "700"}}>Update</Text></TouchableOpacity>
    </View>
</SafeAreaView>


}
const mapStatetoProps = (state) =>{
    return{
        items: state.states
    }
}
const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (name) => dispatch(changeName(name))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(editName);

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    },
    nameBoxStyles: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 75,
        width: 290,
        
    },
    nameInputStyles:{
        
        borderWidth: 1,
        height: "100%",
        width: "48%",
        borderColor: "#b3b3b3",
        borderRadius: 2
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
        
    }
})