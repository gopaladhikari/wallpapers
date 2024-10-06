import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { images } from "@/constants/images";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={{
              uri: images[0].url,
              cache: "reload",
            }}
            style={{ width: "100%", height: 250, resizeMode: "cover" }} //
          />
        }
        headerBackgroundColor={{ light: "black", dark: "white" }}
      >
        <View style={styles.imageWrapper}>
          <FlatList
            data={images}
            renderItem={({ item }) => <ImageCard uri={item.url} />}
          />
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
