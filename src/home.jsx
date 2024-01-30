import { useState } from 'react'
import frontImg from './assets/frontImg.avif' 
import './App.css'
import MainButton  from './components.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Home() {



 
  var base = "#";
  return (
    <>
    {/* <Link to="/home">Home</Link>     */}
    
      <div>
        <a href= {base} target='_self'> 
        <img  src = {frontImg} class = 'frontImg' />
        </a>
      </div>
      <div class = "title">
        <h3 >Peer To Peer Energy Trading</h3>
      </div>
      <MainButton  message={"Begin Simulation"} navigateTo={'sim'}/>

    </>
  )
}

export default Home