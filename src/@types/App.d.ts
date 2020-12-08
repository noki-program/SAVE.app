type RootStackParamList = {
    welcome: undefined;
    signIn: undefined;
    signUp: undefined;
    home: { user: signedInUser };
};

type signedInUser = {
    email: string;
    uid: string;
};