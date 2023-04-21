import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function DarkModeButton() {
    const {theme,handleTheme} = useContext(ThemeContext)
    return (
        <button className={theme == 'dark'? 'btn text-white' : 'btn text-black'} value={theme} onClick={handleTheme}>
            <ion-icon name="moon-outline"></ion-icon>
            Dark Mode
        </button>
    )
}
