
import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView} from 'react-native';
import profPic from "./assets/profile_pic.jpg"
import MainName from './components/mainName';
import AppPhone from './components/appPhone';
import AppEmail from './components/appEmail';
import AppDesc from './components/appDesc';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';









const Main = (props) =>{
  const [check, setCheck] = React.useState(props.items.image_uri)

  const changeToImage = () =>{
    props.navigation.navigate("Image")
  }


  React.useEffect(()=>{
    console.log(check, props.items.image_uri)
    if(props.items.image_uri !== false){
      setCheck(true)
    }
  })

  return (
    

    
    <SafeAreaView style={styles.container}>
      
      <Text style={{
        fontSize: 30,
        fontWeight: "700",
        color: "#446bd5",
        paddingBottom: 15,
        paddingTop: 40
      }}>Edit Profile</Text>
      <TouchableOpacity activeOpacity={1} onPress={changeToImage}>
        {check === false ? <Image style={styles.image} source={profPic} /> : <Image style={styles.image} source={{uri: props.items.image_uri}}/>}
        <View style={{position: "absolute", alignSelf: "flex-end", padding: 10, backgroundColor: "#fafafa", borderRadius: 100, marginRight: 20}}>
        <FontAwesomeIcon size={32} color={"#446bd5"}  icon={faPencilAlt}/>
        </View>
        
      </TouchableOpacity>
      <MainName styles={styles.infoContainer} txtStyle={styles.header} infoStyle={styles.text} carrotStyle={styles.carrot} infoCompStyle={styles.infoComp} navigation={props.navigation} string={props.items.name}/>
      <AppPhone  styles={styles.infoContainer} txtStyle={styles.header} infoStyle={styles.text} carrotStyle={styles.carrot} infoCompStyle={styles.infoComp} navigation={props.navigation} string={props.items.phone}/>
      <AppEmail  styles={styles.infoContainer} txtStyle={styles.header} infoStyle={styles.text} carrotStyle={styles.carrot} infoCompStyle={styles.infoComp} navigation={props.navigation} string={props.items.email}/>
      <AppDesc styles={styles.infoContainer} txtStyle={styles.header} infoStyle={styles.infoDescStyle} carrotStyle={styles.carrot} infoCompStyle={styles.infoComp} navigation={props.navigation} string={props.items.desc}/>
    </SafeAreaView>
    
    
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }, infoContainer : {
    flexDirection: "row", justifyContent: "space-between", width: 300, borderBottomWidth: 1, borderBottomColor: "#b3b3b3"
  },
  infoComp: {
    paddingTop: 20
  },
  header: {
    color: "#b3b3b3",
    fontWeight: "700"
  },
  image:{
    width: 175,
    height: 175,
    borderWidth: 6,
    borderColor: "#446bd5",
    borderRadius: 100
  },
  text: {
    paddingBottom: 20, paddingTop: 8, fontWeight: "700"
  },
  carrot: {
     fontSize: 25, color: "#b3b3b3",
  },
  infoDescStyle: {
    paddingBottom: 20, paddingTop: 8, fontWeight: "700", height: 100
  }
});


const mapStatetoProps = (state) =>{

  return {
    items: state.states
  }

}

const mapDispatchtoProps = (dispatch) =>{

}

export default connect(mapStatetoProps)(Main)