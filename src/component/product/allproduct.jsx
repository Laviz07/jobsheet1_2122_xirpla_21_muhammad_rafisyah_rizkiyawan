import React from 'react'
import './product.css'
import img1 from '../../assets/milo.jpeg'
import img2 from '../../assets/sosis bakar.jpg'
import img3 from '../../assets/keripca.jpeg'
import img4 from '../../assets/poki.jpg'
import img5 from '../../assets/fishhroll.jpeg'
import img6 from '../../assets/Mie-Lidi1.jpg'
import { Link } from 'react-router-dom'

const products = [
    {
        id: 1,
        img: img1,
        desc: 'Milo',
        harga: 'Rp 6.000,00'

    },
    {
        id: 2,
        img: img2,
        desc: 'Sosis Bakar',
        harga: 'Rp 2.000,00'

    },
    {
        id: 3,
        img: img6,
        desc: 'Mie Lidi',
        harga: 'Rp 1.000,00'

    },
    {
        id: 4,
        img: img4,
        desc: 'Poki-poki',
        harga: 'Rp 2.000,00'

    },
    {
        id: 5,
        img: img5,
        desc: 'Fishroll Bakar',
        harga: 'Rp 2.000,00'

    },
    {
        id: 6,
        img: img3,
        desc: 'Keripik Kaca',
        harga: 'Rp 1.000,00'

    },
]

const Allproduct = () => {
  return (
    <div className='container allprod-container'>

        <div className='allprod-content '>{
          products.map(({id, img, desc, harga}) => {
            return (
                <article key={id} className='allprod-item' >
                  <div className='allprod-image'>
                    <img src={img} className='allprod-img' />
                  </div>
                  <div className='allprod-text'>
                    <p className='allprod-desc'>{desc}</p>
                    <p className='allprod-harga'>{harga}</p>
                  </div>
                </article>
            )
          } )
        }</div>
    </div>
  )
}

export default Allproduct