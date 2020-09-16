import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



const MainName = (props) =>{


    return(
        <View style={props.infoCompStyle}>
        <Text style={props.txtStyle}>Name</Text>
        <TouchableOpacity style={props.styles} onPress={() => props.navigation.navigate("Name", {headerStyles: styles.headerText})}>
          <Text style={props.infoStyle}>{props.string}</Text>
          <Text style={props.carrotStyle}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
}




export default MainName;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25, fontWeight: "700", paddingVertical: 40, paddingLeft: 5
  }
})