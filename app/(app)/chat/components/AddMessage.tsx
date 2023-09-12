import { Box, Input, InputField } from "@gluestack-ui/themed";
import AddMessageError from "./AddMessageError";
import { Id } from "../../../../convex/_generated/dataModel";
import useAddMessage from "../hooks/useAddMessage";

interface AddMessageProps {
    chatId: Id<"chats">;
}

const AddMessage = ({ chatId }: AddMessageProps) => {
    const { error, handleChangeText, handleSubmit, messageText } = useAddMessage({ chatId });

    return (
        <Box paddingHorizontal="$2" pb="$2">
            {error && <AddMessageError error={error} />}

            {/* 
                'Invalid prop `placeholderTextColor` warnings:
                https://github.com/gluestack/gluestack-ui/issues/869
            */}
            <Input size="md">
                <InputField
                    placeholder="Your message…"
                    onSubmitEditing={handleSubmit}
                    value={messageText}
                    onChangeText={handleChangeText}
                />
            </Input>
        </Box>
    );
};

export default AddMessage;
