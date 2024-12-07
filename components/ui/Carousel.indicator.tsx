import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, RadioButton } from "react-native-paper"

const IndicatorButton = ({ isActive, handlePress, invert = false }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        (isActive) 
            ? setChecked(true) 
            : setChecked(false)
    }, [isActive])

    const handleOnPress = () => {
        setChecked(!checked);
        handlePress();
    };

    return (
        <RadioButton
            status={checked ? "checked" : "unchecked"}
            onPress={handleOnPress}
            style={styles.button}
        />
    );
};

const CarouselIndicator = ({ amount, activeIndex, setActiveIndex }) => {
    return (
        <View style={styles.container}>
            {[...Array(amount)].map((_, index) => (
                <IndicatorButton
                    key={index}
                    isActive={index === activeIndex}
                    handlePress={() => setActiveIndex(index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        // justifyContent:'space-between',
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        // backgroundColor: '#F5F5F5'
    },
    button: {
        width: 100,
        height: 100
    }
});

export default CarouselIndicator