import { ScrollView, Text } from "@gluestack-ui/themed";

interface AddMessageErrorProps {
    error: string;
}

const AddMessageError = ({ error }: AddMessageErrorProps) => {
    return (
        <ScrollView
            bg="$error700"
            borderRadius="$xl"
            p="$2"
            marginVertical="$2"
            minHeight="$10"
            maxHeight="$40"
        >
            <Text color="$error00">{error}</Text>
        </ScrollView>
    );
};

export default AddMessageError;
