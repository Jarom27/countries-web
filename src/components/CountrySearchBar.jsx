import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function CountrySearchBar() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className='col-md-4 col-12'>
            <input type="text" name="" id="" placeholder='Search for a country...' className={theme == 'dark' ? 'dark-mode-lighter form-control text-white' : 'light-mode-lighter form-control'}/>
        </div>
    )
}
