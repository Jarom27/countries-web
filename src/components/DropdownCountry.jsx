import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function DropdownCountry() {
    let {theme} = useContext(ThemeContext)
    return (
      <div className = {theme == 'dark' ? "dropdown col-md-2 dark-mode-lighter pe-0 container ms-0 me-1" : "dropdown col-2 light-mode-lighter pe-0 container ms-0 me-1"}>
          <button className = {theme == 'dark' ? "w-100 btn dropdown-toggle px-0 text-center text-white" : "w-100 btn dropdown-toggle px-0 text-end"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter By Region
          </button>
          <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">America</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
    )
}
