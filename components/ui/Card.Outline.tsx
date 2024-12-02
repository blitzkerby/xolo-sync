import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import {
  Text,
  Button as PaperButton,
  IconButton as PaperIconButton,
} from "react-native-paper";

interface CardOutlineProps {
  imageUri?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

const CardOutline: React.FC<CardOutlineProps> = ({
  imageUri = "https://i.pinimg.com/736x/7a/0e/55/7a0e557f57730ba81597dc1c091b4bdc.jpg",
  title = "Card Title",
  subtitle = "Subtitle goes here",
  buttonLabel = "button label",
  primaryButtonText = "Ok",
  secondaryButtonText = "Cancel",
  onPrimaryPress,
  onSecondaryPress,
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </ImageWrapper>
      <ContentWrapper>
        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", color: "white"}}>
          {title}
        </Text>
        <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
          {subtitle}
        </Text>
      </ContentWrapper>
      <Action>
        <PaperButton mode="contained">
          { buttonLabel }
        </PaperButton>
      </Action>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 300 / 328, // Maintains the width:height ratio as 300:328
    padding: 16,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 300 / 212,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 5,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    marginTop: 10,
  },
  actionContainer: {
    marginTop: 30,
  }
});

const CardContainer = (props) => <View style={styles.container} {...props} />;
const ImageWrapper = (props) => <View style={styles.imageContainer} {...props} />;
const ContentWrapper = (props) => <View style={styles.contentContainer} {...props} />;
const Action = (props) => <View style={styles.actionContainer} {...props} />;

export default CardOutline;
