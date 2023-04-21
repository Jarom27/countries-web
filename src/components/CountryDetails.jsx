import React, { useContext } from 'react'
import BackButton from './view-details/BackButton'
import CountryContext from '../context/CountryContext'

export default function CountryDetails() {
    const {info} = useContext(CountryContext)
    let languages = info.languages;
    let languages_abreviations = Object.keys(languages)
    let {nativeName} = info.name;
    console.log(languages_abreviations)
    nativeName = nativeName[languages_abreviations[0]]
    nativeName = Object.values(nativeName)[1];
    console.log(nativeName)
    let currencies = info.currencies;
    currencies = [currencies]
    currencies = currencies.map((currency,index) =>{
        currency = [Object.values(currency)]
        return " "+currency[index][index].name;
    });
    console.log(currencies)
    return (
        <div className='container controls'>
            <BackButton></BackButton>
            <img src={info.flags.svg} className='img-fluid' alt= {info.flags.alt}></img>
            <h2 className='fw-bold'>{info.name.common}</h2>
            <div className='row'>
                <div className='col-12'>
                    <p><span className='fw-bold'>Native name: </span>{nativeName}</p>
                    <p><span className='fw-bold'>Population: </span>{info.population}</p>
                    <p><span className='fw-bold'>Region: </span>{info.region}</p>
                    <p><span className='fw-bold'>Sub region: </span>{info.subregion}</p>
                    <p><span className='fw-bold'>Capital: </span>{[info.capital]}</p>
                </div>
                <div className='col-12'>
                    <p><span className='fw-bold'>Top level domain: </span>{[info.tld]}</p>
                    <p><span className='fw-bold'>Currencies: </span>{currencies}</p>
                    <p><span className='fw-bold'>Languages: </span></p>
                </div>
            </div>
        </div>
    )
}
