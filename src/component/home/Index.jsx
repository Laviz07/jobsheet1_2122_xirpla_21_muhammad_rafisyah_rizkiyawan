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
          <h1 class="name "><span>Samsung</span> Electronics Co., Ltd.</h1>
          <h2 className=''>Komitmen tanggung jawab kami <br/>sebagai organisasi global terkemuka.</h2>
      </div>
      <div class="intro-button ">
          <a href='#us'><button class="button1">See More</button></a>
      </div>
    </div>
  </div>
  <div id='us'><About/></div>
  <div id='prisip'><Prinsip/></div>
  </div>
  )
}

export default Index