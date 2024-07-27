import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import First from './First';
import Second from './Second';
import Third from './Third';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}