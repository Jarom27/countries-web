import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function CountrySearchBar() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className=' col-12 col-md-4 ps-0 '>
            <div className='input-group'>
                <span className = "material-symbols-outlined input-group-text light-mode-lighter border-0 rounded-0">search</span>
                <input type="text" name="" id="" placeholder='Search for a country...' className={theme == 'dark' ? 'dark-mode-lighter form-control text-white rounded-0 border-0' : 'light-mode-lighter form-control rounded-0 border-0'}/>
            </div>
            
        </div>
    )
}
