import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import AllRoute from './Route/AllRoute'
import { useParams } from 'react-router-dom'
import { Footer } from './Components/Footer'

function App() {


  return (
    <div className="App">
     <Navbar/>
      <AllRoute/>
      <Footer/>
    </div>
  )
}

export default App
