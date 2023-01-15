import React from 'react'
import './home.css'
import img1 from '../../assets/law.png'
import img2 from '../../assets/organisasi.png'
import img3 from '../../assets/hormat.png'
import img4 from '../../assets/keselamatan.png'
import img5 from '../../assets/tanggung_jawab.png'

const principle1 = [
    {
        id: 1,
        img: img1,
        desc: 'Kami mematuhi undang-undang dan standar etika',

    },
    {
        id: 2,
        img: img2,
        desc: 'Kami memelihara budaya organisasi yang bersih',

    },
    {
        id: 3,
        img: img3,
        desc: 'Kami menghormati pelanggan, pemegang saham, dan karyawan',

    },
    {
        id: 4,
        img: img4,
        desc: 'Kami peduli terhadap lingkungan, keselamatan, dan kesehatan',

    },
    {
        id: 5,
        img: img5,
        desc: 'Kami adalah warga korporat yang memiliki tanggung jawab sosial',

    },
]

const prinsip = () => {
  return (
    <div className='container prinsip-container'>
       <div> 
            <h3 className='prinsip-title ' >Our Principle</h3>
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