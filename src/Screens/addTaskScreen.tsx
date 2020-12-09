import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-dom";
import {item, FirstItem, LastItem }from "../Components/items"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export function addTaskScreen() {
  // const [hasPermission, setHasPermission] = useState();
  // const [pictureInfoList, setPictureInfoList] = useState();
  // const [hasPermission, setHasPermission] = useState();
  // const [pictureInfoList, setPictureInfoList] = useState();
  // const [hasPermission, setHasPermission] = useState();
  // const [pictureInfoList, setPictureInfoList] = useState();

  const navigation = useNavigation();

  const toTaskListScreen = () => {
    navigation.navigate("taskList")
  }

  const toBack = () => {
    navigation.navigate("taskList");
  };
  const backButton = "<";

  return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            toBack();
          }}
        >
          <Text style={styles.backText}>{backButton}</Text>
        </TouchableOpacity>

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
        {FirstItem()}
        {LastItem()}
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

  titleInputConatiner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  mainContainer: {
    flex: 1,
  },

  back: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "8%",
  },

  backText: {
    color: "#F7B3B3",
    fontSize: 50,
    position: "absolute",
    left: "5%",
  },

  inputLimit: {
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    position: "absolute",
    top: "15%",
    left: "10%",
    fontSize: 25,
  },

  inputTitle: {
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    position: "absolute",
    top: "20%",
    left: "10%",
    fontSize: 30,
  },

  space: {
    height: 50,
  },
});