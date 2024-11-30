import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button as PaperButton, IconButton as PaperIconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import ImageViewer from '@/components/common/ImageViewer';

// hooks
import useImagePicker from '@/hooks/pickImage';

const PlaceholderImage = 'https://i.pinimg.com/736x/78/98/d6/7898d62868ce3c3f9e2e6bb0e3aadfde.jpg';

export default function Account() {
  const { image, pickImage } = useImagePicker();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {};

  const onSaveImageAsync = () => {};

  return (
    <SafeAreaView style={styles.container}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={image} />
        {showAppOptions ? (
            <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
                <PaperIconButton icon="refresh" size={20} onPress={onReset} />
                <PaperIconButton icon="plus" size={20} onPress={onAddSticker} />
                <PaperIconButton icon="content-save" size={20} onPress={onSaveImageAsync} />
            </View>
            </View>
        ) : (
            <View style={styles.footerContainer}>
            <PaperButton mode="contained" onPress={pickImage}>
                Choose a photo
            </PaperButton>
            <PaperButton onPress={() => setShowAppOptions(true)}>Use this photo</PaperButton>
            </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
