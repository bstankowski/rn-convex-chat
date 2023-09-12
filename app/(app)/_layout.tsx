import { Stack } from "expo-router";
import { useAuth } from "./(auth)/AuthContext";
import SignOutButton from "./(auth)/SignOutButton";

const AppLayout = () => {
    const { user } = useAuth();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#581c87",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "500",
                },
                headerRight: () => (user ? <SignOutButton /> : null),
            }}
        />
    );
};

export default AppLayout;
