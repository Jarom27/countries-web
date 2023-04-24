import React, { useContext } from 'react'
import CountryContext from '../../context/CountryContext'
import ThemeContext from '../../context/ThemeContext'

export default function BackButton() {
    const {selectCountry}=useContext(CountryContext);
    const {theme} = useContext(ThemeContext);
    const backToHome= ()=>{
        selectCountry(null)
    }
    return (
        <button className={theme == 'light' ? 'mt-3 btn light-mode-lighter rounded-0':'mt-3 btn text-white dark-mode-lighter rounded-0'} onClick={backToHome}><ion-icon name="arrow-back-outline"></ion-icon> Back</button>
    )
}
