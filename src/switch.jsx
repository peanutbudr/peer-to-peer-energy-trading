import { useState } from 'react'
import frontImg from './assets/frontImg.avif' 
import './App.css'
import MainButton  from './components.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Switch() {



 
  var base = "#";
  return (
    <>    
      <div>
        <a href= {base} target='_self'> 
        <img  src = {frontImg} class = 'frontImg' />
        </a>
      </div>
      <div class = "title">
        <h3 >Peer To Peer Energy Trading</h3>
      </div>
      <MainButton  message={"Allow Switching"} navigateTo={'yesSwitch'}/>
      <MainButton  message={"Don't Switch"} navigateTo={'noSwitch'}/>

    </>
  )
}

export default Switch