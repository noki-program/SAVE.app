import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export function signUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  
  const toSignIn = () => {
    navigation.navigate("signIn");
  };
  
  const toWelcome = () => {
    navigation.navigate("welcome")
  }
  const backButton = "<"

  //Submitが押されたときにSign Up(登録処理)する関数
  const pressedSubmit = (email: string, password: string) => {
    //ここでFirebaseでの登録
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //登録成功したらログイン画面に戻る
        Alert.alert("登録成功！", "サインインできるようになりました");
        back();
      })
      .catch((error) => {
        //エラーが返ってきたらその内容をアラートで表示
        console.log(error);
        Alert.alert("エラー", `${error}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleAndFieldView}>
          <TouchableOpacity
            style={styles.backWelcome}
            onPress={() => {
              toWelcome();
            }}
          >
            <Text style={styles.backWelcomeText}>{backButton}</Text>
          </TouchableOpacity>

          <Text style={styles.screenTitle}>アカウントを作成</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputContainerItem}
              placeholder="  メールアドレス"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(email) => {
                setEmail(email);
              }}
            />
            <TextInput
              style={styles.inputContainerItem}
              placeholder="  パスワード"
              keyboardType="visible-password"
              secureTextEntry={true}
              onChangeText={(password) => {
                setPassword(password);
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                toSignIn();
              }}
            >
              <Text style={styles.signUpText}>ログイン</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextStep}
              onPress={() => {
                pressedSubmit(email, password);
              }}
            >
              <Text style={styles.nextStepText}>次へ</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ExpoStatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleAndFieldView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  backWelcome: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "5%",
  },

  backWelcomeText: {
    color: "#F7B3B3",
    fontSize: 50,
    position: "absolute",
    left: "5%",
  },

  screenTitle: {
    fontSize: 25,
    marginBottom: 50,
    position: "absolute",
    top: "20%",
  },

  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    position: "absolute",
    top: "35%",
    flex: 1,
    //backgroundColor:"#eee",
  },

  inputContainerItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    marginBottom: 30,
    width: "80%",
    padding: 10,
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: "1%",
    width: "100%",
    backgroundColor: "#eee",
    position: "absolute",
  },

  signUp: {
    width: 120,
    height: 40,
    position: "absolute",
    bottom: "3%",
    left: "8%",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    color: "#F7B3B3",
  },

  nextStep: {
    backgroundColor: "#F7B3B3",
    width: 60,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "3%",
    right: "8%",
  },

  nextStepText: {
    color: "#fff",
    fontSize: 18,
  },
});
