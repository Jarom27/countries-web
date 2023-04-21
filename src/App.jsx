import CardContainer from "./components/CardContainer";
import ControlsContainer from "./components/ControlsContainer";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import './style.css';
import { useEffect, useState } from "react";

function App() {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState("");
  let country_filtered;
  useEffect(()=>{
      //Montamos los datos 
      fetch(URL)
        .then(response => response.json())
        .then(response => setCountries(response))
  },[]);
  useEffect(()=>{
    console.log(country)
    country_filtered = countries.filter( el => el.name.official == country)
    console.log(country_filtered)
  },[country])
  
  return (
    <>
      <Header/>
      {country === "" ? <ControlsContainer/> : ""}
      {country === "" ? <CardContainer countries={countries} country_selected = {{country,setCountry}}/> : <CountryDetails info = {country_filtered}/>}
      
    </>
  )
}

export default App
