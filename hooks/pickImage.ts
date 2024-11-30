/**
 * pickImage is a custom hook for handling the selection of images
 * 
 * @returns { ImagePickerResult } - object containing:
 * - `image` : URI of selected image, will be `null` if no image is selected
 * - `pickImage` : function that launches the image picker to set selected image
 * 
 * example usage:
 * const { image , pickImage } = useImagePicker();
 * 
 * <Button onPress={pickImage} title="Choose a photo"/>
 * <Image source={{ uri: image }} />
 */

import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

interface ImagePickerResult {
  image: string | null;
  pickImage: () => Promise<void>;
}

export default function useImagePicker(): ImagePickerResult {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return { image, pickImage };
}
