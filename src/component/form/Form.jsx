import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form-container container'>
        <div className='add-container' id='add'>
            <div style={{marginTop:"5rem"}}>
            <h2>Tambah Makanan & Minuman</h2>
            <form>
                <fieldset>
                    <div className='form-content'>
                        <label>Nama Produk</label><br/>
                        <input type="text" required placeholder='Masukkan Nama Produk'/>
                    </div>
                    <div className='form-content'>
                        <label>Harga Produk</label><br/>
                        <input type="number" required placeholder='Masukkan Harga Produk'/>
                    </div>
                    <div className='form-content'>
                        <label>Tanggal Ditambahkan</label><br/>
                        <input type="date" required placeholder='Masukkan Tanggal'/>
                    </div>
                    <div className='form-content'>
                        <label>Jenis Produk</label><br/>
                            <input type="radio" id="makanan" name="jenis_produk" value="Makanan" />
                            <label for="makanan"  style={{marginLeft:"1rem"}}>Makanan</label>
                            <input type="radio" id="minuman" name="jenis_produk" value="Minuman" 
                            style={{marginLeft:"5rem"}}/>
                            <label for="minuman"  style={{marginLeft:"1rem"}}>Minuman</label>
                            <input type="radio" id="other" name="jenis_produk" value="Other"
                             style={{marginLeft:"5rem"}}/>
                            <label for="other"  style={{marginLeft:"1rem"}}>Other</label><br/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <input type="submit" value="Submit"/>
                    </div>
                </fieldset>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Form