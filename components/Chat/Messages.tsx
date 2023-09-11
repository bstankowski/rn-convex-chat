import { Center, ScrollView } from "@gluestack-ui/themed";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Message from "./Message";

const Messages = () => {
    const messages = useQuery(api.messages.listMessages);

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

export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
