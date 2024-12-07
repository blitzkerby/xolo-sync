import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import CarouselIndicator from "./Carousel.indicator";

const { width: screenWidth } = Dimensions.get("window");

const CarouselSlider = ({ children, amount }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const scrollViewRef = useRef(null);

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
    setCurrentItem(index);
  };

  useEffect(() => {
    console.log(`need to scroll to ${scrollToIndex}`)
    scrollToIndex(currentItem)
  }, [currentItem])

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

      <CarouselIndicator
        amount={amount}
        activeIndex={currentItem}
        setActiveIndex={setCurrentItem}
      />

      <View style={styles.controller}>
        <Button
          title="Previous"
          onPress={() => scrollToIndex(currentItem > 1 ? currentItem - 1 : 0)}
        />
        <Button
          title="Next"
          onPress={() =>
            scrollToIndex(
              currentItem < amount - 1 ? currentItem + 1 : amount - 1
            )
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
