import { Stack } from "expo-router";
import { Header } from "../../../components/Header";

export default function ChatsLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        // headerTintColor: grayDark.gray11,
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleAlign: "center",
        // tabBarActiveTintColor: purple.purple8,
        // tabBarInactiveTintColor: grayDark.gray11,
        tabBarStyle: { backgroundColor: "black" },
      })}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Your Chats" }} />
      <Stack.Screen
        name="[id]"
        // pass in users name
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
    </Stack>
  );
}