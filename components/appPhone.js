import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AppPhone = (props) =>{
    return(
    <View style={props.infoCompStyle}>
        <Text style={props.txtStyle}>Phone</Text>
        <TouchableOpacity style={props.styles} onPress={() => props.navigation.navigate("Phone")}>
          <Text style={props.infoStyle}>{props.string}</Text>
          <Text style={props.carrotStyle}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AppPhone;