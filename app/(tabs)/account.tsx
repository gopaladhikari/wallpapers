import { WallpaperBottomSheet } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  const [openSheet, setOpenSheet] = useState(false);

  const onClose = useCallback(() => {
    setOpenSheet((prev) => !prev);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Button
          title={openSheet ? "Close" : "Open"}
          onPress={() => setOpenSheet((prev) => !prev)}
        />

        {openSheet && <WallpaperBottomSheet onClose={onClose} />}

        <Link href="/accountinfo">
          <Text>Account info</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
