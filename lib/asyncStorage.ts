import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: Record<string, unknown>) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error("Unable to write to async storage");
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error("Unable to read from async storage");
    }
};
