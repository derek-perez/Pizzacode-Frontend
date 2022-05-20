import { createContext, Dispatch, SetStateAction, useState } from "react";


export interface ThemeContextProps {
    themeChange: string;
    setThemeChange: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: any) => {
    const [themeChange, setThemeChange] = useState('predetermined');

    return (
        <ThemeContext.Provider 
            value={{ 
                themeChange, 
                setThemeChange 
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
};