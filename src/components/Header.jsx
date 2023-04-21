import React, { useContext } from 'react'
import DarkModeButton from './DarkModeButton'
import ThemeContext from '../context/ThemeContext'

export default function Header() {
    let {theme,handleTheme} = useContext(ThemeContext)
    return (

      <header className={theme =='dark' ? 'container-fluid dark-mode-lighter text-white fixed-top py-1' : 'container-fluid light-mode-lighter fixed-top py-1'}>
          <nav className='navbar container'>
              <h1 className='fs-2 nav-title'>Where in the world?</h1>
              <DarkModeButton></DarkModeButton>
          </nav>
          
      </header>
    )
}
