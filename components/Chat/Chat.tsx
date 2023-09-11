import { useAuth } from "../Auth/AuthContext";
import SignInView from "../Auth/SignInView";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import AddMessage from "./AddMessage";
import Messages from "./Messages";

const Chat = () => {
    const { user } = useAuth();

    return user ? (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Messages />
            <AddMessage />
        </KeyboardAvoidingView>
    ) : (
        <SignInView />
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
