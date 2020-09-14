
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Main from './main';
import editName from "./components/screen_comps/editName"
import editPhone from "./components/screen_comps/editPhone"
import editEmail from "./components/screen_comps/editEmail"
import editDesc from "./components/screen_comps/editDesc"
import {Provider} from 'react-redux'
import configStore from "./src/store"


  const store = configStore()
  const App = () => {
    const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} navigation={Stack.Navigator.navigation}/>
        <Stack.Screen name='Name' component={editName} options={{headerShown: false}} navigation={Stack.Navigator.navigation}/>
        <Stack.Screen name='Phone' component={editPhone} options={{headerShown: false}} navigation={Stack.Navigator.navigation}/>
        <Stack.Screen name='Email' component={editEmail} options={{headerShown: false}} navigation={Stack.Navigator.navigation}/>
        <Stack.Screen name='Desc' component={editDesc} options={{headerShown: false}} navigation={Stack.Navigator.navigation}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}




export default App;


