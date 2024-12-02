import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { useFontContext } from '@/context/FontContext';  // Adjust the import path accordingly
import { HelloWave } from "@/components/common/HelloWave";
import CardScreen from '@/components/ui/CardScreen';
import CardOutline from '@/components/ui/Card.Outline';
import TopBanner from '@/components/layout/TopBanner';
import SearchBar from '@/components/common/Searchbar';
import ParallaxScrollView from "@/components/ui/ParallaxScrollView";

export default function ExploreScreen() {
  const { fontsLoaded, error } = useFontContext();

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error loading fonts</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <>
      <TopBanner>
        <SearchBar />
      </TopBanner>

      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <View style={styles.content}>
          <CardOutline />
          <CardOutline />
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "auto",
    overflowY: "scroll",  
  },  
  content: {
    // padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Ensure the background color contrasts the text color
  },
  customFontText: {
    fontFamily: 'Text-Font-Extrabold',
    fontSize: 20,
    color: '#fff', // Ensure this color contrasts the background color
  },
  loadingText: {
    fontSize: 18,
    color: 'grey',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
