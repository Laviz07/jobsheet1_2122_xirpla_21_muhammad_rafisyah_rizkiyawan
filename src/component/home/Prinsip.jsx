import React from 'react'
import './home.css'
import img1 from '../../assets/pop es.jpg'
import img2 from '../../assets/sosis bakar.jpg'
import img3 from '../../assets/Mie-Lidi1.jpg'
import img4 from '../../assets/permen.jpg'
import img5 from '../../assets/dimsum beku.jpg'
import { Link } from 'react-router-dom'

const principle1 = [
    {
        id: 1,
        img: img1,
        desc: 'Pop Ice, Milo, dan Es Kocok',

    },
    {
        id: 2,
        img: img2,
        desc: 'Sosis Bakar, Fishroll, dan Dumpling',

    },
    {
        id: 3,
        img: img3,
        desc: 'Mie Lidi, Makaroni, dan Keripik Kaca',

    },
    {
        id: 4,
        img: img4,
        desc: 'Aneka Permen',

    },
    {
        id: 5,
        img: img5,
        desc: 'Dimsum Beku',

    },
]

const prinsip = () => {
  return (
    <div className='container prinsip-container'>
       <div> 
            <h3 className='prinsip-title ' >Our Menu</h3>
            <div className='prinsip-btn'>
            <Link to='/about#hminum'><button className='button1 '>See Price List</button></Link>
            </div>
        </div>

        <div className='prinsip-content '>{
          principle1.map(({id, img, desc}) => {
            return (
                <article key={id} className='prinsip-item' >
                  <div className='prinsip-image'>
                    <img src={img} className='prinsip-img' />
                  </div>
                  <p className='prinsip-desc'>{desc}</p>
                </article>
            )
          } )
        }</div>
    </div>
  )
}

export default prinsip