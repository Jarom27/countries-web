import React from 'react'
import BorderTag from './BorderTag'

export default function BorderContainer({borders,countries}) {
    let country_borders = []
    borders.forEach(border => {
        countries.forEach( country => {
            if(country.cca3 == border){
                country_borders.push(country.name.common)
            }
        })
    })
    return (
        <div className='d-flex flex-row column-gap-1'>
            <p className='col-3'>Border Countries: </p>
            <div className='col-9 d-flex flex-row columng-gap-2 flex-wrap'>
                {country_borders.map((country_border,index) => <BorderTag key={index} country_name={country_border}></BorderTag>)} 
            </div>
                   
        </div>
    )
}
