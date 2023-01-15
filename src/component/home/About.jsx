import React from 'react'
import { Link } from 'react-router-dom'
import samsung from '../../assets/samsung_desc.png'

const About = () => {
  return (
    <div>
        <div className='container'>
        <div className='me-flex'>
          <div className=' '>
            <img src={samsung} className='me-img'/>
          </div>  

          <div className='me-text '>
            <h3 className='me-title'>
                About Us
            </h3>
            <p className='me-parag'>
            Samsung berkomitmen untuk mematuhi hukum dan peraturan setempat serta menerapkan kode etik global yang ketat kepada semua karyawan. Samsung yakin bahwa manajemen etis bukan hanya alat untuk menanggapi perubahan cepat dalam lingkungan bisnis global, tetapi juga sarana untuk membangun kepercayaan dengan berbagai pemangku kepentingan, termasuk pelanggan, pemegang saham, karyawan, mitra bisnis, dan masyarakat setempat. Dengan tujuan untuk menjadi salah satu perusahaan paling etis di dunia, Samsung terus melatih karyawannya dan mengoperasikan sistem pemantauan, sekaligus mempraktikkan manajemen perusahaan yang adil dan transparan.
            </p>
            
            {/* <div className='btn-cont'>
            <a href='https://wa.me/+6282125622387'><button className='button2'>Lets Talk</button></a>
            <Link to='/tentang'><button className='button2 btnme1' >See My Biodata</button></Link>
            </div> */}
          
          </div>

        </div>
        </div>
    </div>
  )
}

export default About