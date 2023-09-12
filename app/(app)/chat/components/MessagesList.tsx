import { Center, ScrollView } from "@gluestack-ui/themed";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Message from "./Message";
import { Id } from "../../../../convex/_generated/dataModel";

interface MessagesProps {
    chatId: Id<"chats">;
}

const MessagesList = ({ chatId }: MessagesProps) => {
    const messages = useQuery(api.messages.listMessages, { chatId });

    return (
        <>
            {messages?.length ? (
                <ScrollView>
                    {messages?.map((message) => (
                        <Message message={message} key={message._id} />
                    ))}
                </ScrollView>
            ) : (
                <Center style={styles.container}>
                    <ActivityIndicator />
                </Center>
            )}
        </>
    );
};

export default MessagesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
