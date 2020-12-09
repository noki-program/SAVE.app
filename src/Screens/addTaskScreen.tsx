import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-dom";


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

  const item = (
    <View
      style={{
        width: "90%",
        height: "20%",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
        }}
      >
        <Text style={{ fontSize: 50, color: "#eee" }}>●</Text>
      </TouchableOpacity>

      <View
        style={{
          borderLeftWidth: 3,
          height: 100,
          position: "absolute",
          top: "40%",
          left: "16%",
        }}
      ></View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "10%",
          left: "30%",
          width: "30%",
          fontSize: 15,
          padding: 5,
        }}
        placeholder=" いつ "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "10%",
          left: "60%",
          width: "30%",
          fontSize: 15,
          padding: 5,
          marginLeft: 5,
        }}
        placeholder=" 誰が "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "34%",
          left: "30%",
          fontSize: 20,
          padding: 8,
          width: "61%",
        }}
        placeholder=" 何をする "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "65%",
          left: "30%",
          height: "30%",
          padding: 8,
          width: "61%",
        }}
        placeholder=" memo "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
    </View>
  );

  let nextItem;

  const addItem = () => {};


  const FirstItem = (
    <View
      style={{
        width: "90%",
        height: "20%",
        backgroundColor: "#fff",
        position: "absolute",
        top: "28%",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
        }}
      >
        <Text style={{ fontSize: 50, color: "#eee" }}>●</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: "45%",
          left: "2%",
        }}
        onPress={() => {
          addItem();
        }}
      >
        <Text style={{ fontSize: 50, color: "#eee" }}>+</Text>
      </TouchableOpacity>

      <View
        style={{
          borderLeftWidth: 3,
          height: 100,
          position: "absolute",
          top: "40%",
          left: "16%",
        }}
      ></View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "10%",
          left: "30%",
          width: "30%",
          fontSize: 15,
          padding: 5,
        }}
        placeholder=" いつ "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "10%",
          left: "60%",
          width: "30%",
          fontSize: 15,
          padding: 5,
          marginLeft: 5,
        }}
        placeholder=" 誰が "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "34%",
          left: "30%",
          fontSize: 20,
          padding: 8,
          width: "61%",
        }}
        placeholder=" 何をする "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 30,
          position: "absolute",
          top: "65%",
          left: "30%",
          height: "30%",
          padding: 8,
          width: "61%",
        }}
        placeholder=" memo "
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      {nextItem}
    </View>
  );

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
      {FirstItem}
      
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
});