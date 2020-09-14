import React from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppDesc = (props) =>{
    return(
    <View style={props.infoCompStyle}>
        <Text style={props.txtStyle}>Tell us about yourself</Text>
        <TouchableOpacity style={props.styles} onPress={() => props.navigation.navigate("Desc")}>
          <Text style={props.infoStyle}>{props.string}</Text>
          <Text style={props.carrotStyle}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AppDesc;