type RootStackParamList = {
    welcome: undefined;
    signIn: undefined;
    signUp: undefined;
    home: { user: signedInUser };
    addTask: undefined;
};

type RootStackParamList2 = {
    addTask: undefined;
    editTask: undefined;
};

type signedInUser = {
    email: string;
    uid: string;
};