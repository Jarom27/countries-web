import React from 'react'
import BackButton from './view-details/BackButton'

export default function CountryDetails({info}) {
    return (
        <div className='container controls'>
            <BackButton></BackButton>
            <img src={info.flags.svg} className='img-fluid'></img>
            <h2 className='fw-bold'>{info.name.official}</h2>
            <div className='row'>
                <div className='col-12'>
                    <p><span>Native name: </span></p>
                    <p><span></span></p>
                    <p><span></span></p>
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
                <div className='col-12'>
                    <p><span></span></p>
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
            </div>
        </div>
    )
}
