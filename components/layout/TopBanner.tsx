import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';

interface TopBannerProps {
    children?: React.ReactNode;
}

const TopBanner: React.FC<TopBannerProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android'
            ? StatusBar.currentHeight
            : 20,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderBottomWidth: 1, // Add border width
        borderBottomColor: '#CAC4D0', // Use the specified color
    }
});

export default TopBanner;