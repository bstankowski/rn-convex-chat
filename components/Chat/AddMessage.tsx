import { Box, Input, InputField } from "@gluestack-ui/themed";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import AddMessageError from "./AddMessageError";

const AddMessage = () => {
    const { user } = useAuth();
    const [messageText, setMessageText] = useState("");
    const [error, setError] = useState<string | null>(null);

    const sendMessage = useMutation(api.messages.sendMessage);

    const handleSubmit = async () => {
        setError(null);

        if (messageText.length) {
            try {
                await sendMessage({
                    body: messageText,
                    author: user as string,
                });
            } catch (error) {
                setError((error as Error).message || "Unknown error");
            }

            setMessageText("");
        }
    };

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
                    onChangeText={setMessageText}
                />
            </Input>
        </Box>
    );
};

export default AddMessage;
