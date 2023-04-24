import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import CountriesContext from '../context/CountriesContext'

export default function DropdownCountry() {
    let {theme} = useContext(ThemeContext)
    let {filteredCountriesByContinent} = useContext(CountriesContext);
    function handleContinent(e){
        filteredCountriesByContinent(e.target.textContent)
    }
    return (
      <div className = {theme == 'dark' ? "dropdown col-md-2 dark-mode-lighter pe-0 container ms-0 me-1" : "dropdown col-2 light-mode-lighter pe-0 container ms-0 me-1"}>
          <button className = {theme == 'dark' ? "w-100 btn dropdown-toggle px-0 text-center text-white" : "w-100 btn dropdown-toggle px-0 text-center"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter By Region
          </button>
          <ul className={theme == 'light' ? "dropdown-menu w-100 light-mode-lighter":"dropdown-menu w-100 dark-mode-lighter text-white"}>
              <li className='dropdown-item' onClick={handleContinent}>Africa</li>
              <li className='dropdown-item' onClick={handleContinent}>America</li>
              <li className='dropdown-item' onClick={handleContinent}>Asia</li>
              <li className='dropdown-item' onClick={handleContinent}>Europe</li>
              <li className='dropdown-item' onClick={handleContinent}>Oceania</li>
          </ul>
      </div>
    )
}
