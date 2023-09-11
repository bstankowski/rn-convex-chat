import { Box, HStack, Pressable, Text, TrashIcon, FavouriteIcon } from "@gluestack-ui/themed";
import { Message } from "./types";
import useMessage from "./hooks/useMessage";

interface MessageComponentProps {
    message: Message;
}

const MessageComponent = ({ message }: MessageComponentProps) => {
    const { deleteMessage, isLiked, isOwned, likeMessage } = useMessage(message);

    return (
        <Box padding="$2" ml={isOwned ? "20%" : 0} mr={isOwned ? 0 : "20%"}>
            <HStack justifyContent={isOwned ? "flex-end" : "flex-start"}>
                <Text fontSize="$sm" fontWeight="$bold">
                    {message.author}
                </Text>
            </HStack>

            <HStack justifyContent={isOwned ? "flex-end" : "flex-start"}>
                <Box borderRadius="$xl" bg={isOwned ? "$purple600" : "$warmGray300"} p="$3">
                    <Text
                        fontSize="$md"
                        color={isOwned ? "$primary0" : "$textDark950"}
                        flexWrap="wrap"
                    >
                        {message.body}
                    </Text>

                    <HStack justifyContent="flex-end" mt="$1" position="relative" top="$1">
                        {/*
                            Author can delete their own message.
                            TODO: Confirm delete
                        */}
                        {isOwned && (
                            <Pressable onPress={deleteMessage}>
                                <TrashIcon color="white" size="xs" />
                            </Pressable>
                        )}

                        {/* 
                            User can like other peoples' messages.
                            TODO: Toggle a like on/off.
                        */}
                        {!isOwned && (
                            <Pressable
                                onPress={likeMessage}
                                flexDirection="row"
                                alignItems="center"
                                disabled={isLiked}
                            >
                                {message.likes?.length ? (
                                    <Text mr="$1" size="sm">
                                        {message.likes.length}
                                    </Text>
                                ) : null}
                                <FavouriteIcon color={isLiked ? "$purple400" : "white"} size="sm" />
                            </Pressable>
                        )}
                    </HStack>
                </Box>
            </HStack>
        </Box>
    );
};

export default MessageComponent;
