import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './components/Navbar.jsx'
import SecondNavbar from './components/SecondNavbar.jsx'
import Footer from './components/Footer.jsx'
import TestComponent from './components/TestComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <SecondNavbar/>
    {/*<TestComponent/>*/}
    <App />
  </StrictMode>
)
