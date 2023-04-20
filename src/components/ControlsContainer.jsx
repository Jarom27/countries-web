import React from 'react'
import CountrySearchBar from './CountrySearchBar'
import DropdownCountry from './DropdownCountry'

export default function ControlsContainer() {
  return (
    <div className='container'>
        <CountrySearchBar></CountrySearchBar>
        <DropdownCountry></DropdownCountry>
    </div>
  )
}
