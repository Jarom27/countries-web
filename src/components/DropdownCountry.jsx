import React from 'react'

export default function DropdownCountry() {
  return (
    <div className = "dropdown">
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Region
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
  )
}
