import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export function item() {
  return (
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
}

export function LastItem() {
  return (
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
}

export function FirstItem() {
  return (
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
          top: "48%",
          left: "2%",
        }}
        onPress={() => {}}
      >
        <Text style={{ fontSize: 50, color: "#eee" }}>+</Text>
      </TouchableOpacity>

      <View
        style={{
          borderLeftWidth: 3,
          height: 100,
          position: "absolute",
          top: "45%",
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
}


