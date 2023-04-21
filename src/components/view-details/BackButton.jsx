import React, { useContext } from 'react'
import CountryContext from '../../context/CountryContext'

export default function BackButton() {
    const {selectCountry}=useContext(CountryContext)
    const backToHome= ()=>{
        selectCountry(null)
    }
    return (
        <button className='mt-3 btn ' onClick={backToHome}><ion-icon name="arrow-back-outline"></ion-icon> Back</button>
    )
}
