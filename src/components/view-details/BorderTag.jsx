import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function BorderTag({country_name}) {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <span className={theme == 'light'? '  light-mode-lighter border-tag me-3 px-2': '  dark-mode-lighter border-tag me-3 px-2'}>{country_name}</span>
    </>
    
  )
}
