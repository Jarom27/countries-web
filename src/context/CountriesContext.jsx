import React, { createContext, useEffect, useState } from 'react'

const CountriesContext = createContext()

export function CountriesProvider({children}) {
    const URL = "https://restcountries.com/v3.1/all";
    const [countries,setCountries] = useState([]);
    const [allCountries,setAllCountries] = useState([])
    useEffect(()=>{
        //Montamos los datos 
        fetch(URL)
          .then(response => response.json())
          .then(response => {
                setCountries(response)
                setAllCountries(response)
            })
          
    },[]);
    const countries_list = {
        countries,
        filterCountriesByName(country_name){
            setAllCountries(countries.filter( country => country.name.common.toLowerCase().includes(country_name.toLowerCase())))
            console.log(allCountries)
        },
        getCountriesFiltered(){
            // if(allCountries.length == 0){
                
            // }
            return allCountries;
        }
    }
    return (
        <CountriesContext.Provider value={countries_list}>
            {children}
        </CountriesContext.Provider>
    )
}
export default CountriesContext;
