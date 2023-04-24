import React, { useContext } from 'react'
import Card from './Card'
import CountriesContext from '../context/CountriesContext'

export default function CardContainer() {
    const {countries} = useContext(CountriesContext)
    return (
        <div className='container container-md mx-auto row row-gap-5'>
            {countries.map((country,index)=> {
                return <Card key = {index} country = {country}></Card>
            })}
        </div>
    )
}
