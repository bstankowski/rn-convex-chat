import { LockIcon, Button, ButtonText } from "@gluestack-ui/themed";
import { useAuth } from "./AuthContext";

const SignOutButton = () => {
    const { signOut } = useAuth();

    return (
        <Button size="sm" variant="link" action="secondary" onPress={signOut}>
            <ButtonText mr="$2" color="$textLight300">
                Sign out
            </ButtonText>
            <LockIcon color="white" size="sm" />
        </Button>
    );
};

export default SignOutButton;
