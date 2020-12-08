import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function addTaskScreen() {
  const navigation = useNavigation();

  const toTaskListScreen = () => {
    navigation.navigate("taskList")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputLimit}
        placeholder="締め切り"
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.inputTitle}
        placeholder="タスク名"
        autoCapitalize="none"
        onChangeText={() => {}}
      />

      <TouchableOpacity
        onPress={() => {
          toTaskListScreen();
        }}
      >
        <Text>戻る</Text>
      </TouchableOpacity>

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

  inputLimit: {
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    position: "absolute",
    top: "12%",
    left: "10%",
    fontSize: 25,
  },

  inputTitle: {
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    position: "absolute",
    top: "18%",
    left: "10%",
    fontSize: 30,
  },
});