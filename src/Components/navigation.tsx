import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation();

export function toBack() {
  navigation.goBack();
}

export function toWelcome() {
  navigation.navigate("welcome");
}

export function signUp() {
  navigation.navigate("signUp");
}

export function signIn() {
  navigation.navigate("signIn");
}

export function toHome(user: signedInUser) {
  navigation.navigate("home", { user: user });
}

export function toTaskListScreen() {
  navigation.navigate("taskList");
}

export function toAddTaskScreen() {
  navigation.navigate("addTask");
}