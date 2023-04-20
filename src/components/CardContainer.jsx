import React from 'react'
import Card from './Card'

export default function CardContainer({countries}) {
    return (
        <div className='container mx-auto row'>
            {countries.map((country,index)=> {
                return <Card key = {index} country = {country}></Card>
            })}
        </div>
    )
}
