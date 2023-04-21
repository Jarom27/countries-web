import React from 'react'
import BackButton from './view-details/BackButton'

export default function CountryDetails(props) {
    console.log(props)
    return (
        <div className='container controls'>
            <BackButton></BackButton>
            <img></img>
        </div>
    )
}
