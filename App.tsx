import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { GluestackUIProvider, HStack, Text, config } from "@gluestack-ui/themed";
import Chat from "./components/Chat/Chat";
import AuthProvider from "./components/Auth/AuthContext";
import { CONVEX_URL } from "@env";
import Header from "./components/Header";

export default function App() {
    const convex = new ConvexReactClient(CONVEX_URL, {
        // We need to disable this to be compatible with React Native
        unsavedChangesWarning: false,
    });

    return (
        <ConvexProvider client={convex}>
            <GluestackUIProvider config={config.theme}>
                <StatusBar style="auto" />

                <SafeAreaView style={styles.container}>
                    <AuthProvider>
                        <Header />
                        <Chat />
                    </AuthProvider>
                </SafeAreaView>
            </GluestackUIProvider>
        </ConvexProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
