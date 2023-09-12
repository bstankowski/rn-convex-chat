import { useMutation } from "convex/react";
import { useAuth } from "../../(auth)/AuthContext";
import { api } from "../../../../convex/_generated/api";
import { Message } from "../types";

export default function useMessage(message: Message) {
    const { user } = useAuth();

    const deleteMessage = useMutation(api.messages.deleteMessage);
    const likeMessage = useMutation(api.messages.likeMessage);

    // Has the user liked this message?
    const isLiked = !!message.likes?.find((l) => l.user === user);

    return {
        deleteMessage: () => deleteMessage({ id: message._id }),
        isLiked,
        isOwned: message.author === user,
        likeMessage: () => likeMessage({ messageId: message._id, user: user as string }),
    };
}
