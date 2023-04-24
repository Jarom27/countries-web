import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import CountryContext from '../context/CountryContext';

export default function Card({country}) {
    let {theme,handleTheme} = useContext(ThemeContext);
    let {selectCountry} = useContext(CountryContext);
    const getCountry = (e)=>{
        selectCountry(country)
    }
    return (
      <div className={theme == 'dark' ? 'card col-lg-3 px-0 dark-mode-lighter text-white rounded-0' : 'card col-lg-3 px-0 rounded-0'} onClick={getCountry}>
            <div className='img-object-fit card-img-top'>
                <img src={country.flags.png} alt="" className='object-fit-cover'/>
            </div>
            
            <div className='card-body'>
                <h2 className='card-title fw-bold fs-4'>{country.name.common}</h2>
                <div>
                    <p><span className='sub-title-cards'>Population: </span>{country.population.toLocaleString('en-US')}</p>
                    <p><span className='sub-title-cards'>Region: </span>{country.continents == "North America" || country.continents ==  "South America" ? "America" : country.continents}</p>
                    <p><span className='sub-title-cards'>Capital: </span>{country.capital}</p>
                </div>
            </div>
      </div>
  )
}
