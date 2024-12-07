import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Button,
  StyleSheet,
  Text,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const CarouselSlider = ({ children, amount }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const scrollViewRef = useRef(null);

  // const handleScroll = (event) => {
  //   const slideWidth = screenWidth;
  //   const currentOffset = event.nativeEvent.contentOffset.x;
  //   const currentIndex = Math.round(currentOffset / slideWidth);

  //   setCurrentItem(currentIndex);
  // };

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
    setCurrentItem(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        
        ref={scrollViewRef}
        scrollEventThrottle={16}
        style={styles.carouselSlider}
      >
        {children}
      </ScrollView>
      <View style={styles.controller}>
        <Button
          title="Previous"
          onPress={() => scrollToIndex(currentItem > 0 ? currentItem - 1 : 0)}
        />
        <Button
          title="Next"
          onPress={() =>
            scrollToIndex(currentItem < amount - 1 ? currentItem + 1 : amount - 1)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150, // Set a height for the container to ensure the height of the ScrollView is respected
  },
  carouselSlider: {
    flexDirection: "row",
    height: 100, // Set the height of the ScrollView
  },
  controller: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default CarouselSlider;
