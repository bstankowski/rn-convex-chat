/**
 * Not really 'auth', just a way to get the user's name for the chat.
 * TODO: try Convex auth and expo-secure-store instead of asyncStorage
 */

import { createContext, useContext, useEffect, useState } from "react";
import * as asyncStorage from "../../../lib/asyncStorage";
import { Auth, User } from "./types";

const AuthContext = createContext<Auth>({
    signIn: () => {},
    signOut: () => {},
    user: undefined,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(undefined);

    const signIn = (user: string) => {
        setUser(user);
        asyncStorage.storeData("user", { user });
    };

    const signOut = () => {
        setUser(undefined);
        asyncStorage.storeData("user", { user: undefined });
    };

    // Get the logged in user from AsyncStorage and set in auth state
    useEffect(() => {
        const getSignedInUser = async () => {
            const stored = (await asyncStorage.getData("user")) as { user: User };

            if (stored) {
                setUser(stored.user);
            }
        };

        getSignedInUser();
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * Custom hook to use the auth context
 */
export const useAuth = () => {
    const { signIn, signOut, user } = useContext(AuthContext);
    return { signIn, signOut, user };
};
