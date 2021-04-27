import React, {useContext} from 'react'
import {ThemeContext} from "./contexts/ThemeContext";

const PageContent = ({children}) => {
    const {isDarkTheme} = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkTheme ? "black" : "white",
        width: "100vw",
        height: "100vh"
    } 
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default PageContent
