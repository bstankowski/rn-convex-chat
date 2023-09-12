import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { CONVEX_URL } from "@env";
import AuthProvider from "./(app)/(auth)/AuthContext";
import { Slot } from "expo-router";

const RootLayout = () => {
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
                        <Slot />
                    </AuthProvider>
                </SafeAreaView>
            </GluestackUIProvider>
        </ConvexProvider>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
