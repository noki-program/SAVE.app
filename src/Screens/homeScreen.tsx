import React from "react";
import { useNavigation, RouteProp } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { taskListScreen } from "./taskListScreen";
import { tweetListScreen } from "./tweetListScreen";
const Tab = createBottomTabNavigator();

type taskListScreenRouteProps = RouteProp<RootStackParamList, "home">;
type Props = {
  route: taskListScreenRouteProps;
};

export function homeScreen(props: Props) {
  const currentUser = props.route.params.user;
  return (
    <Tab.Navigator>
      <Tab.Screen name="taskList" component={taskListScreen} />
      <Tab.Screen name="tweetList" component={tweetListScreen} />
    </Tab.Navigator>
  );
}
