import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CardOutline from "@/components/ui/Card.Outline";
import Carousel from "@/components/ui/Carousel"

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    padding: 16,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  icon: {
    fontSize: 20,
  },
});

export default HomePage;
