import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Card({country,country_selected}) {
    let {theme,handleTheme} = useContext(ThemeContext);
    const getCountry = (e)=>{
        country_selected.setCountry(country.name.official);
    }
    return (
      <div className={theme == 'dark' ? 'card col-lg-3 px-0 dark-mode-lighter text-white' : 'card col-lg-3 px-0'} onClick={getCountry}>
          <img src={country.flags.svg} alt="" className='card-img-top object-fit-cover'/>
          <div className='card-body'>
              <h2 className='card-title fw-bold fs-4'>{country.name.official}</h2>
              <div>
                  <p><span className='sub-title-cards'>Population: </span>{country.population}</p>
                  <p><span className='sub-title-cards'>Region: </span>{country.continents == "North America" || country.continents ==  "South America" ? "America" : country.continents}</p>
                  <p><span className='sub-title-cards'>Capital: </span>{country.capital}</p>
              </div>
          </div>
      </div>
  )
}
