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
  const [info,setInfo] = useState({});

  let country_filtered;
  useEffect(()=>{
      //Montamos los datos 
      fetch(URL)
        .then(response => response.json())
        .then(response => setCountries(response))
  },[]);
  useEffect(()=>{
    country_filtered = countries.filter( el => el.name.official == country)
    setInfo(country_filtered[0]);
  },[country])
  
  return (
    <>
      <Header/>
      {country === "" ? <ControlsContainer/> : ""}
      {country === "" ? <CardContainer countries={countries} country_selected = {{country,setCountry}}/> : <CountryDetails info = {info}/>}
      
    </>
  )
}

export default App
