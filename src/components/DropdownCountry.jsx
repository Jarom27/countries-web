import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function DropdownCountry() {
    let {theme} = useContext(ThemeContext)
    return (
      <div className = {theme == 'dark' ? "dropdown col-md-2 dark-mode-lighter pe-0 container" : "dropdown col-2 light-mode-lighter pe-0 container"}>
          <button className = {theme == 'dark' ? "btn dropdown-toggle px-0 text-end text-white" : "btn dropdown-toggle px-0 text-end"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
