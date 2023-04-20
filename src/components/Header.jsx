import React from 'react'
import DarkModeButton from './DarkModeButton'

export default function Header() {
  return (
    <header className='container'>
        <nav className='navbar'>
            <h1 className='fs-2 nav-title'>Where in the world?</h1>
            <DarkModeButton></DarkModeButton>
        </nav>
        
    </header>
  )
}
