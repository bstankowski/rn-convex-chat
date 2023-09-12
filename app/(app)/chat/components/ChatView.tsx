import { Stack } from "expo-router";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import AddMessage from "./AddMessage";
import MessagesList from "./MessagesList";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

const ChatView = ({ id }: { id: Id<"chats"> }) => {
    const chat = useQuery(api.chats.getChatDetails, { chatId: id });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Stack.Screen options={{ title: `${chat?.name || "Chat"}` }} />
            {!!id && <MessagesList chatId={id} />}
            {!!id && <AddMessage chatId={id} />}
        </KeyboardAvoidingView>
    );
};

export default ChatView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
