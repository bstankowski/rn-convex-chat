import { HStack, Text, LockIcon, Box, Center, Button, ButtonText } from "@gluestack-ui/themed";
import { useAuth } from "./Auth/AuthContext";

const Header = () => {
    const { user, signOut } = useAuth();

    return (
        <Box bg="$purple900" borderBottomWidth={2} p="$3">
            {user ? (
                <HStack justifyContent="flex-end">
                    <Button size="sm" variant="outline" action="secondary" onPress={signOut}>
                        <ButtonText mr="$2" color="white">
                            Sign out
                        </ButtonText>
                        <LockIcon color="white" size="sm" />
                    </Button>
                </HStack>
            ) : (
                <Center>
                    <Text color="white" fontWeight="bold">
                        Sign in
                    </Text>
                </Center>
            )}
        </Box>
    );
};

export default Header;
