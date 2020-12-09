import React from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens.tsでまとめたものをimport
import {
  addTaskScreen,
  editTaskScreen,
} from "./screens";

import "./src/Fire";

const Stack = createStackNavigator<RootStackParamList2>();

export function taskScreens() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="addTask"
          component={addTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editTask"
          component={editTaskScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}
