import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Setting" }} />
            <Text>Index page of Settings Tab</Text>
        </View>
    );
}