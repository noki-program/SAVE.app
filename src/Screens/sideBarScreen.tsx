import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens.tsでまとめたものをimport

const Stack = createStackNavigator<RootStackParamList>();
/* ここまで追加 */

export function sideBarScreen() {
  return (
    <Text>sideBar</Text>
  );
}
