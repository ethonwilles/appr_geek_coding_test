import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const MainName = (props) =>{


    return(
        <View style={props.infoCompStyle}>
        <Text style={props.txtStyle}>Name</Text>
        <TouchableOpacity style={props.styles} onPress={() => props.navigation.navigate("Name")}>
          <Text style={props.infoStyle}>{props.string}</Text>
          <Text style={props.carrotStyle}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
}



export default MainName;