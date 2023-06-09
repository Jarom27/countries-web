import React, { createContext, useEffect, useState } from 'react'

const CountriesContext = createContext()

export function CountriesProvider({children}) {
    const URL = "https://restcountries.com/v3.1/all";
    const [countries,setCountries] = useState([]);
    const [allCountries,setAllCountries] = useState([])
    const [country_name,setCountryName]  = useState("")
    const [continent,setContinent] = useState("");
    useEffect(()=>{
        //Montamos los datos 
        fetch(URL)
          .then(response => response.json())
          .then(response => {
                setCountries(response)
                setAllCountries(response)
            })
          
    },[]);
    useEffect(()=>{
        setAllCountries(countries.filter(country =>{
            return country.name.common.toLowerCase().includes(country_name) && country.continents[0].toLowerCase().includes(continent)
        }))
    },[continent])
    useEffect(()=>{
        setAllCountries(countries.filter(country =>{
            return country.name.common.toLowerCase().includes(country_name) && country.continents[0].toLowerCase().includes(continent)
        }))
    },[country_name])
    const countries_list = {
        countries,
        filterCountriesByName(countryName){
            setCountryName(countryName.toLowerCase())
        },
        filteredCountriesByContinent(continent_name){
            setContinent(continent_name.toLowerCase())
            
            console.log(allCountries)
        },
        getCountriesFiltered(){
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
