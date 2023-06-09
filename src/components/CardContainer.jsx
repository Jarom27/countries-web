import React, { useContext } from 'react'
import Card from './Card'
import CountriesContext from '../context/CountriesContext'

export default function CardContainer() {
    const {countries,getCountriesFiltered} = useContext(CountriesContext)
    return (
        <div className='container-fluid gx-2 column-gap-4 row-gap-5 mx-auto row d-flex flex-column flex-lg-row justify-content-center'>
            {getCountriesFiltered().map((country,index)=> {
                return <Card key = {index} country = {country}></Card>
            })}
        </div>
    )
}
