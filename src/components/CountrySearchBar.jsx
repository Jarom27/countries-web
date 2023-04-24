import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import CountriesContext from '../context/CountriesContext'

export default function CountrySearchBar() {
    const {filterCountriesByName} = useContext(CountriesContext);
    function handleSearch(e){
        filterCountriesByName(e.target.value)
    }
    const {theme} = useContext(ThemeContext)
    return (
        <div className=' col-12 col-md-4 ps-0 '>
            <div className='input-group'>
                <span className = {theme == 'light'? "material-symbols-outlined input-group-text light-mode-lighter border-0" : "material-symbols-outlined input-group-text dark-mode-lighter border-0 text-white"}>search</span>
                <input type="text" name="" id="" placeholder='Search for a country...' className={theme == 'dark' ? 'dark-mode-lighter form-control text-white rounded-0 border-0' : 'light-mode-lighter form-control rounded-0 border-0'} onKeyUp={handleSearch} onFocus={handleSearch}/>
            </div>
            
        </div>
    )
}

