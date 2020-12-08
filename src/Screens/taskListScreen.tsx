import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


export function taskListScreen() {
  const navigation = useNavigation();

  const toAddTaskScreen = () => {
    navigation.navigate("addTask")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listAddBotton} onPress={() => {toAddTaskScreen()}}>
        <Text style={styles.listAddBottonText}>+</Text>
      </TouchableOpacity>
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

  listAddBotton: {
    backgroundColor: "#F7B3B3",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "5%",
    right: "10%",
    borderRadius: 30,
  },

  listAddBottonText: {
    fontSize: 40,
    color: "#fff",
    height: "100%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  }
});
