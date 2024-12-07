import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Button,
} from "react-native";
import CarouselSlider from "./Carousel.slider";

const { width: screenWidth } = Dimensions.get("window");

// Main carousel component
const Carousel = () => {
  return <CarouselSlider amount={6}>{renderItems()}</CarouselSlider>;
};

const CarouselItem = (props) => <View style={styles.carouselItem} {...props} />;

function renderItems() {
  const itemsArray = [1, 2, 3, 4, 5, 6];
  const items = [];

  for (let i = 0; i < itemsArray.length; i++) {
    items.push(<Item key={i} />);
  }

  return <>{items}</>;
}


const Item = () => {
  return (
    <CarouselItem>
      <View>
        <Text>Item</Text>
      </View>
    </CarouselItem>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    width: screenWidth - 20,
    height: 100,
  },
  slider: {},
});

export default Carousel;
