import React from 'react'
import './home.css'
import About from './About'
import Prinsip from './Prinsip'

const Index = () => {
  return (
    <div>
    <div className='wrapper'>
      <div class="intro-container container">
      <div class="intro-text text ">
          <h1 class="name "> Jajanan <span>Bungur</span></h1>
          <h2 className=''>Menyediakan Berbagai Macam Jajanan <br/>Makanan Dan Minuman.</h2>
      </div>
      <div class="intro-button ">
          <a href='#us'><button class="button1">Scroll Down</button></a>
      </div>
    </div>
  </div>
  <div id='us'> 
    <div className='revealu'><About /></div>
  </div>
  <div id='menu' >
    <div className='revealu'><Prinsip/></div>
  </div>
  </div>
  )
}

export default Index