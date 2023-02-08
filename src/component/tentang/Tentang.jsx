import React from 'react'
import './tentang.css'
import Contact from './Contact'
import Sosmed from '../../assets/sosmed.png'
import Rules from '../../assets/rules.png'
import Kontak from '../../assets/kontak.png'
import Warung from '../../assets/warung.png'

const Tentang = () => {

  return (
    <div className='container tentang-container'>
        <div className='desc-container' id='desc'>
            <h2>Deskripsi Umum</h2>
            <div style={{display:'flex'}}>
                <ul style={{listStyleType:'square'}}>
                    <li><b>Nama</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Jajanan Bungur</li>
                    <li><b>Lokasi</b> &nbsp;&nbsp;&nbsp;&nbsp;: Jl. Bungur 7 No.78, RT.012/RW.007, Jakasampurna, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat</li>
                    <li><b>Berdiri</b> &nbsp;&nbsp;&nbsp;&nbsp;: 9 Januari 2010</li>
                    <li><b>Jenis</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Home Industry</li>
                    <li><b>Produk</b> &nbsp;&nbsp;&nbsp;: Jajanan Anak</li>
                </ul>

                <div>
                    <img src={Warung} style={{height:"250px", marginRight:'-10px', marginTop:'-50px' }}/>
                </div>
            </div>
        </div>

        <div className='down'>
        <a href='#contact'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
        </a>
        </div>

        <div id='contact'>
        <div style={{marginTop:'5rem', display:'flex'}} >
        <div className='contact-container' >
            <h2>Contact Person</h2>
            <div style={{display:'flex'}}>
                <dl>
                    <dt><b>E S Putri</b> &nbsp;: </dt>
                    <dd>Whatsapp: +62 123345678</dd>
                    <dd>Instagram: @putri.syah</dd>
                    <dt><b>I Arifin</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</dt>
                    <dd>Whatsapp: +62 123345678</dd>
                    <dd>Instagram: @rafisyah78</dd>
                    <dt><b>E-mail</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: warungbungur@gmail.com</dt>
                </dl>

                <div>
                    <img src={Kontak} style={{height:"160px", marginRight:'-25px', marginTop:'40px' }}/>
                </div>
            </div>
        </div>
        <div className='contact-container fsosmed-container' style={{marginLeft:"100px"}}>
            <h2><del>Fake</del> Social Media</h2>
            <div style={{display:'flex'}}>
            <dl>
                <dt><b>Instagram</b> &nbsp;: </dt>
                <dd>@jajanan_bungur</dd>
                <dt><b>Facebook</b> &nbsp;: </dt>
                <dd>Jajanan Bungur</dd>
                <dt><b>Twitter</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</dt>
                <dd>Jajanan_Bungur</dd>
            </dl>

            <div>
            <img src={Sosmed} style={{height:"170px", marginLeft:'70px', marginTop:'20px'}}/>
            </div>
        </div>

        </div>
        {/* <Contact/> */}
        </div>
        </div>
        <div className='down'>
        <a href='#hminum'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
        </a>
        </div>

        <div id='hminum'>
        <div style={{marginTop:'7rem'}} >
        <div className='hminum-container' >
            <h2>Harga Minuman</h2>
            <table>
                <tr>
                    <th>No</th>
                    <th>Minuman</th>
                    <th>Harga</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Es Kocok Medium</td>
                    <td>Rp1.000,00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Es Kocok Large</td>
                    <td>Rp2.000,00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pop Ice</td>
                    <td>Rp5.000,00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Milo</td>
                    <td>Rp6.000,00</td>
                </tr>
            </table>
        </div>
        </div>
        </div>

        <div className='down'>
        <a href='#hmakan'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
        </a>
        </div>

        <div id='hmakan'>
        <div style={{marginTop:'4.5rem'}} >
        <div className='hmakan-container' >
            <h2>Harga Makanan</h2>
            <table>
                <tr>
                    <th>No</th>
                    <th>Makanan</th>
                    <th>Harga</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Permen 4 buah</td>
                    <td>Rp500,00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Keripik Kaca</td>
                    <td>Rp500,00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mie Lidi</td>
                    <td>Rp1.000,00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Makaroni</td>
                    <td>Rp1.000,00</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sosis Bakar</td>
                    <td>Rp2.000,00</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fishroll</td>
                    <td>Rp2.000,00</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Dumpling</td>
                    <td>Rp2.000,00</td>
                </tr> 
                <tr>
                    <td>8</td>
                    <td>Dimsum Beku</td>
                    <td>Rp10.000,00</td>
                </tr>
            </table>
        </div>
        </div>
        </div>

        <div className='down'>
        <a href='#rules'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
        </a>
        </div>

        <div id='rules'>
        <div style={{marginTop:'3rem'}} >
            <div className='rules-container'>
                <h2 >Aturan Saat Berada Di Jajanan Bungur</h2>

                <div style={{display:'flex'}}>
                <ol>
                    <li>Dilarang berkata kasar (toxic) dan berteriak</li>
                    <li>Mengenakan pakaian yang sopan dan tidak 4no</li>
                    <li>Harap bersabar saat menunggu pesanan</li>
                    <li>Dilarang mencuri apapun (dompet, barang dagangan, dll)</li>
                    <li>Dilarang Merokok (termasuk vape)</li>
                    <li>Dilarang membawa hewan (atau memakai kostum hewan) </li>
                    <li>Dilarang bermain dan membawa lato lato</li>
                    <li>Dilarang Rasis dan sara</li>
                    <li>China, kaum pelangi, sjw twittard, dan atheis dilarang masuk</li>
                    <li>Dilarang menginvasi eropa</li>
                </ol>

                <img src={Rules} style={{height:'50%', marginLeft:'120px', marginTop:'-50px'}}/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Tentang