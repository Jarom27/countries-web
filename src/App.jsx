import CardContainer from "./components/CardContainer";
import ControlsContainer from "./components/ControlsContainer";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import CountryContext from "./context/CountryContext";
import './style.css';
import { useContext, useEffect, useState } from "react";

function App() {
    const URL = "https://restcountries.com/v3.1/all";
    const [countries,setCountries] = useState([]);
    const {info} = useContext(CountryContext);
    useEffect(()=>{
        //Montamos los datos 
        fetch(URL)
          .then(response => response.json())
          .then(response => setCountries(response))
    },[]);
    
    return (
      <>
        <Header/>
        {!info ? <HomeView countries={countries}/> : <CountryDetails countries={countries}/>}
      </>
    )
}

export default App
