import { View, StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
