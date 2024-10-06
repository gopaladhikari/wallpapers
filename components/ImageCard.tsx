import { View, Image, StyleSheet } from "react-native";

type Props = {
  uri: string;
};

export default function ImageCard({ uri }: Props) {
  return <Image style={styles.image} source={{ uri }} />;
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    flexBasis: "48%",
    resizeMode: "cover",
    marginTop: 12,
    borderRadius: 8,
  },
});
