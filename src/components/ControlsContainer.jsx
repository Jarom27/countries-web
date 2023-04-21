import React from 'react'
import CountrySearchBar from './CountrySearchBar'
import DropdownCountry from './DropdownCountry'

export default function ControlsContainer() {
  return (
    <div className='container controls pt-4 mb-3'>
        <div className='row justify-content-between'>
          <CountrySearchBar></CountrySearchBar>
          <DropdownCountry></DropdownCountry>
        </div>
        
    </div>
  )
}
