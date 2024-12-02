import { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width: screenWidth } = Dimensions.get("window");

function renderItems() {
  const itemsArray = [1, 2, 3, 4, 5, 6];
  const items = [];

  for (let i = 0; i < itemsArray.length; i++) {
    items.push(<Item key={i} />);
  }

  return <>{items}</>;
}

const Item = () => {
  return <CarouselItem>Deez nut 1</CarouselItem>;
};

const Carousel = () => {
  const scrollViewRef = useRef(null); // Correctly defining scrollViewRef

  const handleScroll = (event) => {
    const slideWidth = screenWidth;
    const currentOffset = event.nativeEvent.contentOffset.x; // Use lowercase 'x'
    const currentIndex = Math.round(currentOffset / slideWidth);

    scrollViewRef.current.scrollTo({
      x: currentIndex * slideWidth,
      animated: true,
    });
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      onScrollEndDrag={handleScroll}
      ref={scrollViewRef} // Correctly referring to scrollViewRef
      scrollEventThrottle={16}
    >
      <CarouselSlider>{renderItems()}</CarouselSlider>
    </ScrollView>
  );
};

const CarouselSlider = (props) => (
  <View style={styles.carouselSlider} {...props} />
);
const CarouselItem = (props) => <View style={styles.carouselItem} {...props} />;

const styles = StyleSheet.create({
  carouselSlider: {
    flexDirection: "row", // Ensure items are laid out in a row
    width: 1000,
  },
  carouselItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    width: screenWidth - 20,
    height: 100,
  },
});

export default Carousel;
