import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function BorderTag({country_name}) {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <span className={theme == 'light'? ' col-3 light-mode-lighter border-tag': ' col-3 dark-mode-lighter border-tag'}>{country_name}</span>
    </>
    
  )
}
