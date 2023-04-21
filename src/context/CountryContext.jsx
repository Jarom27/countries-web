import React, { createContext, useState } from 'react'

const CountryContext = createContext();
export function CountryProvider({children}){
    const [info,setInfo] = useState(null);
    const country_info = {
        info,
        selectCountry(country){
            setInfo(country)
        }
    }
    return <CountryContext.Provider value={country_info}>{children}</CountryContext.Provider>
}

export default CountryContext;
