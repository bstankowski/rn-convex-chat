import { Redirect, useLocalSearchParams } from "expo-router";
import { useAuth } from "../(auth)/AuthContext";
import { Id } from "../../../convex/_generated/dataModel";
import ChatView from "./components/ChatView";

const ChatPage = () => {
    const { id } = useLocalSearchParams<{ id: Id<"chats"> }>();
    const { user } = useAuth();

    // TODO: Redirects should not be handled by the views
    return user ? id ? <ChatView id={id} /> : null : <Redirect href="/" />;
};

export default ChatPage;
