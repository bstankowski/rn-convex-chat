import { Redirect, Stack } from "expo-router";
import { useAuth } from "./(auth)/AuthContext";
import ChatsList from "./chat/components/ChatsList";

export default function HomePage() {
    const { user } = useAuth();

    return user ? (
        <>
            <Stack.Screen options={{ title: "Home" }} />
            <ChatsList />
        </>
    ) : (
        // TODO: Redirects should not be handled by the views
        <Redirect href="/signin" />
    );
}
