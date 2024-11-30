import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFontContext } from '@/context/FontContext';  // Adjust the import path accordingly
import CardScreen from '@/components/common/CardScreen';
import TopBanner from '@/components/layout/TopBanner';

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
        <Text style={{...styles.customFontText, color:"black", fontSize:30}}>Open Sauce Font</Text>
      </TopBanner>
      <View style={styles.container}>
        <Text style={styles.customFontText}>Explore</Text>
        <CardScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
