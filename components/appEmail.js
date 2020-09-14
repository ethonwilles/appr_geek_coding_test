import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';

const AppEmail = (props) =>{
    return(
    <View style={props.infoCompStyle}>
        <Text style={props.txtStyle}>Email</Text>
        <TouchableOpacity style={props.styles} onPress={() => props.navigation.navigate("Email")}>
          <Text style={props.infoStyle}>{props.string}</Text>
          <Text style={props.carrotStyle}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AppEmail;