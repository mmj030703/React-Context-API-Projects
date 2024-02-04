import React, { useContext } from "react";

const themeContext = React.createContext({
    currentThemeVal: "light",
    themeToggler: () => {}
});

export const ThemeContextProvider = themeContext.Provider;

export const useThemeContext = () => {
    return useContext(themeContext);
}; 