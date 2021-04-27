import React, {createContext} from 'react'
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDarkTheme, setTheme] = useToggleState(false);
    return (
        <ThemeContext.Provider value={{isDarkTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
