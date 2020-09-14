
import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView } from 'react-native';
import MainName from './components/mainName';
import AppPhone from './components/appPhone';
import AppEmail from './components/appEmail';
import AppDesc from './components/appDesc';
import {connect} from 'react-redux';









const Main = (props) =>{


  return (
    

    
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 30,
        fontWeight: "700",
        color: "#446bd5",
        paddingBottom: 15
      }}>Edit Profile</Text>
      <View>
        <Image style={styles.image} source={require('./assets/profile_pic.jpg')} />
      </View>
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
    width: 150,
    height: 150,
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