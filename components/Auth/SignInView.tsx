import { Center, Input, InputField, Pressable, Text } from "@gluestack-ui/themed";
import { useAuth } from "./AuthContext";
import { useState } from "react";

const SignInView = () => {
    const { signIn } = useAuth();
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if (name.length) {
            signIn(name);
        }
    };

    return (
        <Center height="100%" bg="$purple100" p="$4">
            <Input size="md" width="100%">
                <InputField
                    placeholder="What's your name?"
                    value={name}
                    onChangeText={(v) => setName(v)}
                    backgroundColor="$white"
                    onSubmitEditing={handleSubmit}
                />
            </Input>
            <Pressable
                bg="$purple900"
                p="$2"
                m="$2"
                borderRadius="$md"
                minWidth="$40"
                onPress={handleSubmit}
                disabled={!name}
            >
                <Text textAlign="center" color="$primary0">
                    Sign in
                </Text>
            </Pressable>
        </Center>
    );
};

export default SignInView;
