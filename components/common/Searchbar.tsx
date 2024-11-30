import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface SearchBarProps {
    placeholder?: string;
    containerStyle?: ViewStyle;
    testID?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    containerStyle,
    testID = 'search-bar'
}) => {
    const theme = useTheme();

    return (
        <View
            style={[styles.container, containerStyle]}
            testID={testID}
        >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                mode="outlined"
                placeholderTextColor={theme.colors.placeholder}
                left={
                    <TextInput.Icon
                        icon="magnify"
                        color={theme.colors.onSurfaceVariant}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    input: {
        flex: 1,
    },
});

export default SearchBar;
