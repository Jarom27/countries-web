import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { CountryProvider } from './context/CountryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
        
    </ThemeProvider>
    
  </React.StrictMode>,
)
