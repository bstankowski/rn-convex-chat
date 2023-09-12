import { Box, Text, View } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { StyleSheet } from "react-native";

const ChatsList = () => {
    const chats = useQuery(api.chats.listChats);

    return (
        <View display="flex" flex={1} p="$2">
            {chats?.map((chat) => (
                <Box key={chat._id} bg="$purple400" borderRadius="$md" mb="$2">
                    <Link href={`/chat/${chat._id}`} style={styles.link}>
                        <Text color="white" fontWeight="500">
                            {chat.name}
                        </Text>
                    </Link>
                </Box>
            ))}

            {/* TODO: add a new chat */}
        </View>
    );
};

export default ChatsList;

const styles = StyleSheet.create({
    link: {
        display: "flex",
        padding: 10,
    },
});
