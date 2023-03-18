import React from 'react'
import { Link } from 'react-router-dom'
import popice from '../../assets/popice.png'

const About = () => {
  return (
    <div>
        <div className='container'>
        <div className='me-flex'>
          <div className='me-img-cont '>
            <img src={popice} className='me-img'/>
          </div>  

          <div className='me-text '>
            <h3 className='me-title'>
                About Us
            </h3>
            <p className='me-parag'>
            <b>Jajanan Bungur</b> menyediakan berbagai macam <u>minuman dan makanan</u> ringan dengan harga yang <i>murah meriah</i>, mulai dari Rp.500,00 hingga Rp.10.000,00 saja.
            </p>
            <p className='me-parag'>
           Buka <em>setiap Hari</em> mulai pukul <mark style={{backgroundColor:"var(--blue)", color:"white"}}> 11.00 WIB - 20.00 WIB</mark> <small><del>jika tidak berhalangan</del></small>. Berlokasi di <strong>Jl. Bungur 7, no 78, Perumnas 1, Kota Bekasi.</strong>
            </p>
            
            <div className='btn-container' style={{display:"flex"}}>
              <div className='btn-cont'>
              <a href='/about#desc'><button className='button1 btnb' >See More About Us</button></a>
              <a href='#menu'><button className='button1 btna' >Lets Check Our Menu</button></a>
              </div>

            </div>
          
          </div>

        </div>
        </div>
    </div>
  )
}

export default About