import React, { createContext, useEffect, useState } from 'react'

const CountriesContext = createContext()

export function CountriesProvider({children}) {
    const URL = "https://restcountries.com/v3.1/all";
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        //Montamos los datos 
        fetch(URL)
          .then(response => response.json())
          .then(response => setCountries(response))
    },[]);
    const countries_list = {
        countries,
        filterCountriesByName(country_name){
            setCountries(countries.filter( country => country.name.common.includes(country_name)))
        }
    }
    return (
        <CountriesContext.Provider value={countries_list}>
            {children}
        </CountriesContext.Provider>
    )
}
export default CountriesContext;
