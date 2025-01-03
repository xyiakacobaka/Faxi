import { Slide, SwiperProps } from "@/types/types";
import { FlatList, View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
export default function Swiper({
  data,
  autoplay = true,
  autoplayInterval = 3000,
  showPagination = true,
  showButtons = true,
}: SwiperProps) {
  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal={true}
      pagingEnabled={true}
      style={styles.faltList}
    />
  );
}
const styles = StyleSheet.create({
  faltList: {
    borderWidth: 2,
    maxHeight: "60%",
  },
  slide: {
    width: width,
    borderColor: "red",
    borderWidth: 2,
  },
  image: {},
});
