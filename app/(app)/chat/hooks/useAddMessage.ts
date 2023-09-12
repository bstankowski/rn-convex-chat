import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";
import { useAuth } from "../../(auth)/AuthContext";
import { Id } from "../../../../convex/_generated/dataModel";

const useAddMessage = ({ chatId }: { chatId: Id<"chats"> }) => {
    const [messageText, setMessageText] = useState("");
    const [error, setError] = useState<string | null>(null);

    const { user } = useAuth();
    const sendMessage = useMutation(api.messages.sendMessage);

    const handleSubmit = async () => {
        setError(null);

        if (messageText.length) {
            try {
                await sendMessage({
                    body: messageText,
                    author: user as string,
                    chatId,
                });
            } catch (error) {
                setError((error as Error).message || "Unknown error");
            }

            setMessageText("");
        }
    };

    return {
        error,
        handleChangeText: setMessageText,
        handleSubmit,
        messageText,
    };
};

export default useAddMessage;
