import React from 'react'

export default function Card({country}) {
  return (
    <div className='card col-lg-3 px-0'>
        <img src={country.flags.svg} alt="" className='card-img-top object-fit-cover'/>
        <div className='card-body'>
            <h2 className='card-title fw-bold fs-4'>{country.name.official}</h2>
            <div>
                <p><span className='sub-title-cards'>Population: </span>{country.population}</p>
                <p><span className='sub-title-cards'>Region: </span>{country.continents == "North America" || country.continents ==  "South America" ? "America" : country.continents}</p>
                <p><span className='sub-title-cards'>Capital: </span>{country.capital}</p>
            </div>
        </div>
    </div>
  )
}
