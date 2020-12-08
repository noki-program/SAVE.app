import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function welcomeScreen() {
  const navigation = useNavigation();

  const toSignIn = () => {
    navigation.navigate("signIn");
  };

  const toSignUp = () => {
    navigation.navigate("signUp");
  };

  const firstMessage = `こんにちは。\nあなたのメモリになります。`

  return (
    <View style={styles.container}>
      <Text style={styles.firstMessage}>{firstMessage}</Text>
      <TouchableOpacity 
        style={styles.mkAcount}
        onPress={() => {toSignUp()}}
      >
        <Text style={styles.mkAcountText}>アカウントを作成</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logIn}
        onPress={() => {toSignIn()}}
      >
        <Text style={styles.logInText}>ログイン</Text>
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

  firstMessage: {
    fontSize: 28,
    fontWeight: "bold",
    position: "absolute",
    top: "30%",
    color: "#707070",
  },

  mkAcount: {
    backgroundColor: "#F7B3B3",
    width: 280,
    height: 50,
    borderRadius: 30,
    position: "absolute",
    top: "55%",
    alignItems: "center",
    justifyContent: "center",
  },

  mkAcountText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  logIn: {
    position: "absolute",
    bottom: "5%",
    right: "10%",
  },

  logInText: {
    color: "#F7B3B3",
  },
});
