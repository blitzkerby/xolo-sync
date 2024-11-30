import { useState, useEffect } from "react";
import * as Font from 'expo-font';

const useFonts = (fontMap: string) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function loadFonts() {
            try{
                await Font.loadAsync(fontMap);
                setFontsLoaded(true);
            } catch(e) {
                setError(e);
            }
        }
        loadFonts();
    }, [fontMap])

    return [fontsLoaded, error];
}

export default useFonts;