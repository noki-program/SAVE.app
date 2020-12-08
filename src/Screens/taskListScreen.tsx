import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();   

type taskListScreenRouteProps = RouteProp<RootStackParamList, "home">;
type Props = {
  route: taskListScreenRouteProps;
};

export function taskListScreen(props: Props) {
  const currentUser = props.route.params.user;
  return (
    <View style={styles.container}>
      <Text>{`${currentUser.email}`}でログイン中</Text>
      <StatusBar style="auto" />
    </View>
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
