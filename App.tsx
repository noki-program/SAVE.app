import React from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens.tsでまとめたものをimport
import { signInScreen, signUpScreen, welcomeScreen, homeScreen, addTaskScreen } from "./src/Screens/screens";

import "./src/Fire";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={welcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signIn"
          component={signInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signUp"
          component={signUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={homeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addTask"
          component={addTaskScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
