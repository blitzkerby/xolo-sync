import { createContext, useContext, useEffect, useState } from "react";
import * as Font from "expo-font"
import { Fonts } from "@/constants/Fonts"

type FontContextType = {
    fontsLoaded: boolean;
    error: Error | null;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

const FontProvider: React.FC = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync(Fonts);
                setFontsLoaded(true);
            } catch (e) {
                setError(e);
            }
        }
        loadFonts();
    }, [])

    return (
        <FontContext.Provider value={{ fontsLoaded, error }}>
            {children}
        </FontContext.Provider>
    )
}

export const useFontContext = () => {
    const context = useContext(FontContext);
    if (context === undefined) {
        throw new Error("useFontContext must be used within a FontProvider");
    }
    return context;
}

export default FontProvider;