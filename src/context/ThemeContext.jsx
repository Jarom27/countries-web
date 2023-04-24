import React, { createContext, useState } from 'react'

const ThemeContext = createContext();
export function ThemeProvider({children}) {
    const [theme,setTheme] = useState("light");

    const theme_data = {
        theme,
        handleTheme(e){
            console.log(e.target.value)
            if(e.target.value == "light"){
                setTheme("dark")
                document.getElementById("root").className = "dark-mode-darker"
                document.body.style.backgroundColor = "#202d36"
            }
            else{
                setTheme("light")
                document.getElementById("root").className = "light-mode-darker"
                document.body.style.backgroundColor = "#fafafa"
            }
        }
    }
    return (
        <ThemeContext.Provider value={theme_data}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext;
