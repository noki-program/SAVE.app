import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import {
  taskListScreen,
  tweetListScreen,
} from "./screens";

type taskListScreenRouteProps = RouteProp<RootStackParamList, "home">;
type Props = {
  route: taskListScreenRouteProps;
};

export function homeScreen(props: Props) {
  const currentUser = props.route.params.user;
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="taskList" component={taskListScreen} />
        <Tab.Screen name="tweetList" component={tweetListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
