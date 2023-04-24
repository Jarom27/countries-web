import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function DarkModeButton() {
    const {theme,handleTheme} = useContext(ThemeContext)
    return (
        <button className={theme == 'dark'? 'btn text-white' : 'btn text-black'} value={theme} onClick={handleTheme}>
            
            <div className='me-2 d-inline'>
                <ion-icon name={theme == 'light' ? "moon-outline":"moon"}></ion-icon>
            </div>
            Dark Mode
        </button>
    )
}
