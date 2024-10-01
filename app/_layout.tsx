import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
