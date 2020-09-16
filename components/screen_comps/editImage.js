import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {changeImg} from "../../src/actions/funcs"
import profPic from "../../assets/profile_pic.jpg"

const editImage = (props) =>{
    
    const [check, setCheck] = React.useState(false)
    const [image, setImage] = React.useState(props.items.image_uri)


    

    const upload = async () =>{
        
        
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        
        if (permissionResult.granted === false){
            alert("permission required to acess camera roll")
            return;
        }else{

        
        
            let result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                
              
              props.change(result.uri)
              
              props.navigation.goBack()
              
            }
      
            
          
    }
    
}




React.useEffect(()=>{
    if(image !== false){
        setCheck(true)
    }
})

    

    return <SafeAreaView>
    <TouchableOpacity style={styles.touchOpac} onPress={() => props.navigation.goBack()}><FontAwesomeIcon size={32}  icon={faArrowLeft}/></TouchableOpacity>
    <View style={{paddingLeft: 40}}>
        <Text style={styles.headerText}>Upload a photo of yourself:</Text>
        <View style={styles.nameBoxStyles}>
        {check === false ? <Image style={styles.selectedImage} source={require("../../assets/profile_pic.jpg")} /> : <Image style={styles.selectedImage} source={{uri: props.items.image_uri}}/>}
        
        </View>

    </View>
    <TouchableOpacity style={styles.touchOpacUpdate} onPress={upload}><Text style={{color: "white", alignSelf: "center", fontWeight: "700"}}>Update</Text></TouchableOpacity>
</SafeAreaView>
}


const mapStatetoProps = (state) =>{
    return{
        items: state.states
    }
}

const mapDispatchtoProps =(dispatch) =>{
    
    return{
        change: (info) => dispatch(changeImg(info))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(editImage)

const styles = StyleSheet.create({
    touchOpac: {
        paddingLeft: 10
    },
    touchOpacUpdate:{
        alignSelf: "center",
        height: 60,
        width: 300,
        backgroundColor: "black",
        marginLeft: 13,
        marginTop: 175,
        justifyContent: "center",
        borderRadius: 2,
        
    },
    headerText: {
        fontSize: 23, fontWeight: "700", paddingTop: 40, paddingBottom: 20, alignSelf: "flex-start"
      },
      nameBoxStyles: {
        height: 150,
        width: 290,
        paddingLeft: 5,
        
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
    selectedImage: {
        width: 300,
        height: 300
    }
})