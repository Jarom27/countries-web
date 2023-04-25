import React, { useContext } from 'react'
import BackButton from './view-details/BackButton'
import CountryContext from '../context/CountryContext'
import ThemeContext from '../context/ThemeContext'
import CountriesContext from '../context/CountriesContext'
import BorderContainer from './view-details/BorderContainer'

export default function CountryDetails() {
    const {countries} = useContext(CountriesContext)
    const {info} = useContext(CountryContext)
    const {theme} = useContext(ThemeContext)

    console.log(info.borders)
    let languages = info.languages;
    let languages_abreviations = Object.keys(languages)
    let currencies = info.currencies;
    currencies = [currencies]
    currencies = currencies.map((currency,index) =>{
        currency = [Object.values(currency)]
        return " "+currency[index][index].name;
    });
    languages = Object.values(languages);


    return (
        <div className={theme == 'light' ? 'container controls' : 'container controls text-white'}>
            <BackButton></BackButton>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <img src={info.flags.svg} className='img-fluid h-75' alt= {info.flags.alt}></img>
                </div>
                <div className='row col-md-6 row-gap-4'>
                    <h2 className='fw-bold col-12'>{info.name.common}</h2>
                    <div className='col-12 col-md-6'>
                        <p><span className='fw-bold'>Native name: </span>{getNativeName(info,languages_abreviations)}</p>
                        <p><span className='fw-bold'>Population: </span>{info.population.toLocaleString("en-US")}</p>
                        <p><span className='fw-bold'>Region: </span>{info.region}</p>
                        <p><span className='fw-bold'>Sub region: </span>{info.subregion}</p>
                        <p><span className='fw-bold'>Capital: </span>{[info.capital]}</p>
                    </div>

                    <div className='col-12 col-md-6'>
                        <p><span className='fw-bold'>Top level domain: </span>{[info.tld]}</p>
                        <p><span className='fw-bold'>Currencies: </span>{currencies}</p>
                        <p><span className='fw-bold'>Languages: </span>{languages.toString()}</p>
                    </div>
                    
                    {info.borders !== undefined ? <BorderContainer borders = {info.borders} countries = {countries}></BorderContainer> : ""}
                </div>
                
            </div>
        </div>
    )
}

function getNativeName(info,languages_abreviations){
    let {nativeName} = info.name;
    nativeName = nativeName[languages_abreviations[0]]
    nativeName = Object.values(nativeName)[1];
    return nativeName;
}
