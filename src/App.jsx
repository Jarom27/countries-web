import Card from "./components/Card"
import CardContainer from "./components/CardContainer"
import ControlsContainer from "./components/ControlsContainer";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import './style.css'
import { useEffect, useState } from "react"

function App() {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
      fetch(URL)
        .then(response => response.json())
        .then(response => setCountries(response))
  },[])
  
  return (
    <>
      <Header></Header>
      <ControlsContainer></ControlsContainer>
      <CardContainer countries={countries}></CardContainer>
    </>
  )
}

export default App
