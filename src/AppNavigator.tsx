import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FormScreen from "./screens/FormScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Itens" }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: "Novo Item" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
