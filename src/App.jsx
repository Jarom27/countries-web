import CardContainer from "./components/CardContainer";
import ControlsContainer from "./components/ControlsContainer";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import { CountriesProvider } from "./context/CountriesContext";
import CountryContext from "./context/CountryContext";
import './style.css';
import { useContext, useEffect, useState } from "react";

function App() {
    const {info} = useContext(CountryContext);
    return (
      <>
      <CountriesProvider>
        <Header/>
          {!info ? <HomeView /> : <CountryDetails/>}
      </CountriesProvider>
        
      </>
    )
}

export default App
