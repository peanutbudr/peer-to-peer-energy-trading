import { useState } from 'react'
import frontImg from './assets/frontImg.avif' 
import './App.css'
import SimButton  from './components.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.jsx'
import Simulation from './simulation.jsx'


function App() {
  return (
    <>
    <div className='App'>
  
    <Routes>
    <Route index element = {<Home />} />
    <Route path = '/home' element = {<Home/>} />
    <Route path = '/sim' element = {<Simulation />} />
    </Routes>
  
      </div>
    </>
  )
}

export default App
