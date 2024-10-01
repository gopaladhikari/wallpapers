import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

type Props = {
  onClose: () => void;
};

export function WallpaperBottomSheet({ onClose }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["95%"]}
        enablePanDownToClose
        handleIndicatorStyle={{
          display: "none",
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
