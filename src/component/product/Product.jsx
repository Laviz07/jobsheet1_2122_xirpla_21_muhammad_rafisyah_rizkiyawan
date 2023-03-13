import React from 'react'
import './product.css'
import Allproduct from './allproduct'
import Song from '../../assets/song.mp3'
import Iklan from '../../assets/Iklan.mp4'

import img1 from '../../assets/milo.jpeg'
import img2 from '../../assets/sosis bakar.jpg'
import img3 from '../../assets/keripca.jpeg'
import img4 from '../../assets/poki.jpg'

const Product = () => {
  return (
    <div className='container product-container'>

      <audio controls loop
      autoPlay
      >
        <source src={Song} type="audio/ogg"/>
      </audio>

      <div id='product' >
      <div style={{marginTop:'4rem'}}>
        <div className='prod-container'>
          <h2>Top Produk</h2>
          <Allproduct/>
        </div>
      </div>
      </div>

      {/* <div className='fadeimg'>
        <img src={img1} className="fdimg1" />
        <img src={img2} className="fdimg2" />
        <img src={img3} className="fdimg3" />
        <img src={img4} className="fdimg4" />
      </div> */}

    <div id='video' className='revealu'>
      <div style={{marginTop:'-4rem'}}>
        <div className='video-container container'>
          <h2>Our Video</h2>

        <div className='video-card'>
            <div className='ytb'>
              <iframe width="600" height="365" 
                src="https://www.youtube.com/embed/MwqZ8UaIsYw" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </div>

            <div className='localvid'>
              <video width="600" height="365"  controls>
                <source src={Iklan} type="video/mp4"/>
              </video>
            </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Product